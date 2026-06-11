:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synaptome.data'
.. highlight: bash

bioconductor-synaptome.data
===========================

.. conda:recipe:: bioconductor-synaptome.data
   :replaces_section_title:
   :noindex:

   AnnotationData for Synaptome.DB package

   :homepage: https://bioconductor.org/packages/3.22/data/annotation/html/synaptome.data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-synaptome.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synaptome.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synaptome.data/meta.yaml>`_

   The package provides access to the copy of the Synaptic proteome database. It was designed as an accompaniment for Synaptome.DB package. Database provides information for specific synaptic genes and allows building the protein\-protein interaction graph for gene sets\, synaptic compartments\, and brain regions. In the current update we added 6 more synaptic proteome studies\, which resulted in total of 64 studies. We introduced Synaptic Vesicle as a separate compartment. We also added coding mutations for Autistic Spectral disorder and Epilepsy collected from publicly available databases.


.. conda:package:: bioconductor-synaptome.data

   |downloads_bioconductor-synaptome.data| |docker_bioconductor-synaptome.data|

   :versions:
      
      

      ``0.99.6-4``,  ``0.99.6-3``,  ``0.99.6-2``,  ``0.99.6-1``,  ``0.99.6-0``,  ``0.99.3-1``,  ``0.99.3-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-synaptome.data

to add into an existing workspace instead, run::

    pixi add bioconductor-synaptome.data

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-synaptome.data

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-synaptome.data

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-synaptome.data:<tag>

(see `bioconductor-synaptome.data/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-synaptome.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synaptome.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synaptome.data
   :alt:   (downloads)
.. |docker_bioconductor-synaptome.data| image:: https://quay.io/repository/biocontainers/bioconductor-synaptome.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synaptome.data
.. _`bioconductor-synaptome.data/tags`: https://quay.io/repository/biocontainers/bioconductor-synaptome.data?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-synaptome.data";
      var versions = ["0.99.6","0.99.6","0.99.6","0.99.6","0.99.6"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-synaptome.data"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-synaptome.data"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-synaptome.data"></div>



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
         
            // Build cdf plot for bioconductor-synaptome.data
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-synaptome.data/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-synaptome.data', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-synaptome.data
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-synaptome.data/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-synaptome.data', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-synaptome.data
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-synaptome.data/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-synaptome.data', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synaptome.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synaptome.data/README.html