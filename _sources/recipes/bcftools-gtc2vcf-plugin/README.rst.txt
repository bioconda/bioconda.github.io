:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcftools-gtc2vcf-plugin'
.. highlight: bash

bcftools-gtc2vcf-plugin
=======================

.. conda:recipe:: bcftools-gtc2vcf-plugin
   :replaces_section_title:
   :noindex:

   Tools to convert Illumina and Affymetrix array intensity data files into VCF files.

   :homepage: https://github.com/freeseek/gtc2vcf
   :license: MIT
   :recipe: /`bcftools-gtc2vcf-plugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-gtc2vcf-plugin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-gtc2vcf-plugin/meta.yaml>`_

   


.. conda:package:: bcftools-gtc2vcf-plugin

   |downloads_bcftools-gtc2vcf-plugin| |docker_bcftools-gtc2vcf-plugin|

   :versions:
      
      

      ``1.22-0``,  ``1.21-0``,  ``1.19-1``,  ``1.19-0``,  ``1.18-0``,  ``1.16-0``,  ``1.9-0``

      

   
   :depends on bcftools: ``>=1.22,<1.23.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on htslib: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      


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

    pixi global install bcftools-gtc2vcf-plugin

to add into an existing workspace instead, run::

    pixi add bcftools-gtc2vcf-plugin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bcftools-gtc2vcf-plugin

Alternatively, to install into a new environment, run::

    conda create -n envname bcftools-gtc2vcf-plugin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bcftools-gtc2vcf-plugin:<tag>

(see `bcftools-gtc2vcf-plugin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bcftools-gtc2vcf-plugin| image:: https://img.shields.io/conda/dn/bioconda/bcftools-gtc2vcf-plugin.svg?style=flat
   :target: https://anaconda.org/bioconda/bcftools-gtc2vcf-plugin
   :alt:   (downloads)
.. |docker_bcftools-gtc2vcf-plugin| image:: https://quay.io/repository/biocontainers/bcftools-gtc2vcf-plugin/status
   :target: https://quay.io/repository/biocontainers/bcftools-gtc2vcf-plugin
.. _`bcftools-gtc2vcf-plugin/tags`: https://quay.io/repository/biocontainers/bcftools-gtc2vcf-plugin?tab=tags


.. raw:: html

   <script>
      var package = "bcftools-gtc2vcf-plugin";
      var versions = ["1.22","1.21","1.19","1.19","1.18"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bcftools-gtc2vcf-plugin"></div>
   <div style="width: 100%" id="platform_plot_bcftools-gtc2vcf-plugin"></div>
   <div style="width: 100%" id="cdf_plot_bcftools-gtc2vcf-plugin"></div>



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
         
            // Build cdf plot for bcftools-gtc2vcf-plugin
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bcftools-gtc2vcf-plugin/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bcftools-gtc2vcf-plugin', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bcftools-gtc2vcf-plugin
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bcftools-gtc2vcf-plugin/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bcftools-gtc2vcf-plugin', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bcftools-gtc2vcf-plugin
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bcftools-gtc2vcf-plugin/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bcftools-gtc2vcf-plugin', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcftools-gtc2vcf-plugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcftools-gtc2vcf-plugin/README.html