:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'colabalign'
.. highlight: bash

colabalign
==========

.. conda:recipe:: colabalign
   :replaces_section_title:
   :noindex:

   All\-vs\-all US\-align protein structure comparison\, structural dendrograms and clustering.

   :homepage: https://github.com/crfield18/ColabAlign
   :documentation: https://github.com/crfield18/ColabAlign/blob/v1.2.3/README.md
   
   :license: MIT / MIT
   :recipe: /`colabalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colabalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colabalign/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.10.06.677802`, doi: :doi:`10.5281/zenodo.14169501`

   ColabAlign runs parallel all\-vs\-all US\-align \(TM\-align\) structural
   alignments of protein chains\, builds a UPGMA structural dendrogram from
   the TM\-score matrix\, clusters it with TreeCluster at one or more
   thresholds\, superposes each cluster onto its medoid\, and picks a
   consensus representative per cluster. Accepts .pdb and .cif files\, and
   .zip or tar \(.tar\, .tar.gz\/.tgz\, .tar.bz2\, .tar.xz\) archives of them.



.. conda:package:: colabalign

   |downloads_colabalign| |docker_colabalign|

   :versions:
      
      

      ``1.2.3-0``

      

   
   :depends on beem-bio: ``>=1.0.1,<2``
   :depends on biopython: ``>=1.88,<2``
   :depends on numpy: ``>=2.5,<3``
   :depends on pandas: ``>=3.1,<4``
   :depends on python: ``>=3.12``
   :depends on scipy: ``>=1.18,<2``
   :depends on tqdm: ``>=4.70,<5``
   :depends on treecluster: ``>=1.0.5,<2``
   :depends on usalign: ``>=20241201``

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

    pixi global install colabalign

to add into an existing workspace instead, run::

    pixi add colabalign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install colabalign

Alternatively, to install into a new environment, run::

    conda create -n envname colabalign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/colabalign:<tag>

(see `colabalign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_colabalign| image:: https://img.shields.io/conda/dn/bioconda/colabalign.svg?style=flat
   :target: https://anaconda.org/bioconda/colabalign
   :alt:   (downloads)
.. |docker_colabalign| image:: https://quay.io/repository/biocontainers/colabalign/status
   :target: https://quay.io/repository/biocontainers/colabalign
.. _`colabalign/tags`: https://quay.io/repository/biocontainers/colabalign?tab=tags


.. raw:: html

   <script>
      var package = "colabalign";
      var versions = ["1.2.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_colabalign"></div>
   <div style="width: 100%" id="platform_plot_colabalign"></div>
   <div style="width: 100%" id="cdf_plot_colabalign"></div>



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
         
            // Build cdf plot for colabalign
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/colabalign/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_colabalign', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for colabalign
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/colabalign/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_colabalign', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for colabalign
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/colabalign/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_colabalign', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/colabalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/colabalign/README.html