:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyling'
.. highlight: bash

phyling
=======

.. conda:recipe:: phyling
   :replaces_section_title:
   :noindex:

   A phylogenetic inference tool based on protein\-coding genomic sequences

   :homepage: https://github.com/stajichlab/Phyling
   :documentation: https://github.com/stajichlab/Phyling/blob/v2.3.1/README.md
   
   :license: MIT / MIT
   :recipe: /`phyling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyling/meta.yaml>`_

   Phyling is a fast\, scalable\, and user\-friendly tool supporting phylogenomic reconstruction of species phylogenies directly
   from protein\-encoded genomic data. It identifies orthologous genes by searching a sample\'s protein sequences against a Hidden
   Markov Models marker set\, containing single\-copy orthologs\, retrieved from the BUSCO database. In the final step\, users can
   choose between consensus and concatenation strategies to construct the species tree from the aligned orthologs.



.. conda:package:: phyling

   |downloads_phyling| |docker_phyling|

   :versions:
      
      

      ``2.3.1-0``,  ``2.3.0-0``

      

   
   :depends on aster: ``>=1.19``
   :depends on biopython: ``>=1.81``
   :depends on clipkit: ``>=2.1.1``
   :depends on fasttree: ``>=2.1.1``
   :depends on iqtree: ``>=2.4.0,<3.0``
   :depends on matplotlib-base: ``>=3.5.3``
   :depends on muscle: ``>=5.3``
   :depends on numpy: ``>=2.0.2``
   :depends on phykit: ``>=2.0.1``
   :depends on pyfaidx: ``>=0.8.1.3``
   :depends on pyhmmer: ``>=0.11.0``
   :depends on python: ``>=3.9``
   :depends on raxml-ng: ``>=1.2.2``

   :additional platforms:
      


Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install phyling

to add into an existing workspace instead, run::

    pixi add phyling

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phyling

Alternatively, to install into a new environment, run::

    conda create -n envname phyling

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phyling:<tag>

(see `phyling/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phyling| image:: https://img.shields.io/conda/dn/bioconda/phyling.svg?style=flat
   :target: https://anaconda.org/bioconda/phyling
   :alt:   (downloads)
.. |docker_phyling| image:: https://quay.io/repository/biocontainers/phyling/status
   :target: https://quay.io/repository/biocontainers/phyling
.. _`phyling/tags`: https://quay.io/repository/biocontainers/phyling?tab=tags


.. raw:: html

   <script>
      var package = "phyling";
      var versions = ["2.3.1","2.3.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_phyling"></div>
   <div style="width: 100%" id="platform_plot_phyling"></div>
   <div style="width: 100%" id="cdf_plot_phyling"></div>



   ..
      Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for phyling
            try {
               const cdf_spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/cdf.vl.json")
               if (!cdf_spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_spec_resp.status}.`);
               }
               const cdf_spec = await cdf_spec_resp.json();
               const cdf_data_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/cdf.json")
               if (!cdf_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${cdf_data_resp.status}.`);
               }
               const cdf_plot_data = await cdf_data_resp.json();
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/phyling/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_phyling', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for phyling
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/phyling/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_phyling', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for phyling
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/phyling/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_phyling', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyling/README.html