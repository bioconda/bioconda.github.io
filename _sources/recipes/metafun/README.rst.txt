:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metafun'
.. highlight: bash

metafun
=======

.. conda:recipe:: metafun
   :replaces_section_title:
   :noindex:

   Scalable and agile analysis pipeline for metagenomic and comparative genomic analysis

   :homepage: https://github.com/aababc1/metaFun
   :documentation: https://metafun-doc.readthedocs.io/
   
   :license: MIT
   :recipe: /`metafun <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metafun>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metafun/meta.yaml>`_

   metaFun is a comprehensive pipeline for metagenomic analysis including quality control\, assembly\, binning\, taxonomy profiling\, and functional analysis. Version 1.0.0 adds WMS\_STRAIN module for strain\-level microbial diversity analysis.


.. conda:package:: metafun

   |downloads_metafun| |docker_metafun|

   :versions:
      
      

      ``1.0.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends on apptainer: ``1.3.0.*``
   :depends on dash: ``2.17.1.*``
   :depends on dash-bootstrap-components: 
   :depends on dash-core-components: 
   :depends on dash-daq: 
   :depends on dash-html-components: 
   :depends on dash-table: 
   :depends on nextflow: ``24.04.2.*``
   :depends on numpy: ``>=1.26``
   :depends on pandas: ``>=2.0``
   :depends on plotly: ``>=5.0``
   :depends on python: ``>=3.10``
   :depends on squashfuse: 
   :depends on sylph: ``0.6.1.*``
   :depends on tqdm: 

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

    pixi global install metafun

to add into an existing workspace instead, run::

    pixi add metafun

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metafun

Alternatively, to install into a new environment, run::

    conda create -n envname metafun

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metafun:<tag>

(see `metafun/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metafun| image:: https://img.shields.io/conda/dn/bioconda/metafun.svg?style=flat
   :target: https://anaconda.org/bioconda/metafun
   :alt:   (downloads)
.. |docker_metafun| image:: https://quay.io/repository/biocontainers/metafun/status
   :target: https://quay.io/repository/biocontainers/metafun
.. _`metafun/tags`: https://quay.io/repository/biocontainers/metafun?tab=tags


.. raw:: html

   <script>
      var package = "metafun";
      var versions = ["1.0.0","0.3.0","0.2.0","0.1.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_metafun"></div>
   <div style="width: 100%" id="platform_plot_metafun"></div>
   <div style="width: 100%" id="cdf_plot_metafun"></div>



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
         
            // Build cdf plot for metafun
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metafun/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_metafun', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for metafun
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metafun/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_metafun', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for metafun
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metafun/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_metafun', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metafun/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metafun/README.html