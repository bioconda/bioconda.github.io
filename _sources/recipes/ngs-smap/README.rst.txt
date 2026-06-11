:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-smap'
.. highlight: bash

ngs-smap
========

.. conda:recipe:: ngs-smap
   :replaces_section_title:
   :noindex:

   SMAP is a software package that analyzes next\-generation DNA sequencing read mapping distributions and performs haplotype calling to create multi\-allelic molecular markers.

   :homepage: https://gitlab.ilvo.be/genomics/smap-package/smap
   :documentation: https://ngs-smap.readthedocs.io/en/latest
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`ngs-smap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-smap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-smap/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.03.10.483555`

   


.. conda:package:: ngs-smap

   |downloads_ngs-smap| |docker_ngs-smap|

   :versions:
      
      

      ``5.1.0-0``,  ``5.0.1-0``,  ``4.6.5-0``,  ``4.6.4-0``,  ``4.6.2-0``,  ``4.6.1-0``,  ``4.6.0-0``,  ``4.5.1-0``,  ``4.5.0-0``

      

   
   :depends on biopython: 
   :depends on colorlog: 
   :depends on cutadapt: 
   :depends on gffpandas: 
   :depends on gffutils: 
   :depends on matplotlib-base: 
   :depends on natsort: 
   :depends on numexpr: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on primer3-py: 
   :depends on pybedtools: 
   :depends on pycirclize: 
   :depends on pysam: 
   :depends on python: ``>=3.8.1,!=3.11``
   :depends on python-igraph: 
   :depends on python-kaleido: 
   :depends on scanpy: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on tqdm: 
   :depends on typing-extensions: 

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

    pixi global install ngs-smap

to add into an existing workspace instead, run::

    pixi add ngs-smap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngs-smap

Alternatively, to install into a new environment, run::

    conda create -n envname ngs-smap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngs-smap:<tag>

(see `ngs-smap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngs-smap| image:: https://img.shields.io/conda/dn/bioconda/ngs-smap.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-smap
   :alt:   (downloads)
.. |docker_ngs-smap| image:: https://quay.io/repository/biocontainers/ngs-smap/status
   :target: https://quay.io/repository/biocontainers/ngs-smap
.. _`ngs-smap/tags`: https://quay.io/repository/biocontainers/ngs-smap?tab=tags


.. raw:: html

   <script>
      var package = "ngs-smap";
      var versions = ["5.1.0","5.0.1","4.6.5","4.6.4","4.6.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_ngs-smap"></div>
   <div style="width: 100%" id="platform_plot_ngs-smap"></div>
   <div style="width: 100%" id="cdf_plot_ngs-smap"></div>



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
         
            // Build cdf plot for ngs-smap
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ngs-smap/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_ngs-smap', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for ngs-smap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ngs-smap/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_ngs-smap', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for ngs-smap
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/ngs-smap/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_ngs-smap', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-smap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-smap/README.html