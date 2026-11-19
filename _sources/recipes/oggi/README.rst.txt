:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'oggi'
.. highlight: bash

oggi
====

.. conda:recipe:: oggi
   :replaces_section_title:
   :noindex:

   Orthologous\-Gene\-Group Inference toolkit for plant pangenome analyses

   :homepage: https://github.com/liushuotong/oggi
   :documentation: https://github.com/liushuotong/oggi#readme
   
   :license: BSD-2-Clause AND GPL-3.0-only AND GPL-3.0-or-later
   :recipe: /`oggi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oggi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oggi/meta.yaml>`_

   OGGI integrates gene\-family identification\, synteny evidence\,
   orthology\-aware clustering\, BUSCO species\-tree construction\, and wrappers
   for common plant pangenome analysis tools.



.. conda:package:: oggi

   |downloads_oggi| |docker_oggi|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on agat: 
   :depends on biopython: 
   :depends on busco: 
   :depends on cd-hit: 
   :depends on diamond: 
   :depends on hdbscan: ``>=0.8.40,<0.9``
   :depends on hmmer: 
   :depends on iqtree: ``>=2``
   :depends on mafft: 
   :depends on mcl: 
   :depends on mcscanx: 
   :depends on mmseqs2: 
   :depends on networkx: ``>=3,<4``
   :depends on numpy: 
   :depends on orthofinder: 
   :depends on pandas: 
   :depends on python: ``>=3.11``
   :depends on scikit-learn: ``>=1.4,<2``
   :depends on scipy: 
   :depends on setuptools: 
   :depends on trimal: 
   :depends on wgdi: 

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

    pixi global install oggi

to add into an existing workspace instead, run::

    pixi add oggi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install oggi

Alternatively, to install into a new environment, run::

    conda create -n envname oggi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/oggi:<tag>

(see `oggi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_oggi| image:: https://img.shields.io/conda/dn/bioconda/oggi.svg?style=flat
   :target: https://anaconda.org/bioconda/oggi
   :alt:   (downloads)
.. |docker_oggi| image:: https://quay.io/repository/biocontainers/oggi/status
   :target: https://quay.io/repository/biocontainers/oggi
.. _`oggi/tags`: https://quay.io/repository/biocontainers/oggi?tab=tags


.. raw:: html

   <script>
      var package = "oggi";
      var versions = ["1.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_oggi"></div>
   <div style="width: 100%" id="platform_plot_oggi"></div>
   <div style="width: 100%" id="cdf_plot_oggi"></div>



   .. Create all the necessary plots for each package by loading all the
      correct specs and data. Important points on the place and implementation
      of this script block:
      1. It is here, and not in a separate HTML file, as it needs to have the
         `package.name` rendered in for each package.
      2. All packages are handled in one `window.onload` function, as multiple
         instances of this throughout a (rendered) HTML just overwrite each
         other.

   <script>
      window.onload = async function() {
         
            // Build cdf plot for oggi
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/oggi/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_oggi', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for oggi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/oggi/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_oggi', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for oggi
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/oggi/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_oggi', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oggi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oggi/README.html