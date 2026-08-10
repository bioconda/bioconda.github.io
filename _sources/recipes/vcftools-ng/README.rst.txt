:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcftools-ng'
.. highlight: bash

vcftools-ng
===========

.. conda:recipe:: vcftools-ng
   :replaces_section_title:
   :noindex:

   High\-performance\, output\-compatible successor to VCFtools 0.1.17

   :homepage: https://github.com/VensinMa/vcftools-ng
   :documentation: https://github.com/VensinMa/vcftools-ng/blob/v0.13.0/README.md
   
   :license: LGPL / LGPL-3.0-only
   :recipe: /`vcftools-ng <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcftools-ng>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcftools-ng/meta.yaml>`_

   vcftools\-ng is an HTSlib\-based\, multithreaded VCF\/BCF filtering\,
   statistics\, conversion\, and population\-genetics tool. It preserves exact
   VCFtools 0.1.17 scientific output for its documented compatibility surface
   while adding adaptive input backends\, deterministic BGZF output\,
   transactional writes\, and reproducible run logs.



.. conda:package:: vcftools-ng

   |downloads_vcftools-ng| |docker_vcftools-ng|

   :versions:
      
      

      ``0.13.0-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on bcftools: ``>=1.24``
   :depends on blis: ``>=2.1,<3.0a0``
   :depends on htslib: ``>=1.24,<1.25.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.2,<2.0a0``

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

    pixi global install vcftools-ng

to add into an existing workspace instead, run::

    pixi add vcftools-ng

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcftools-ng

Alternatively, to install into a new environment, run::

    conda create -n envname vcftools-ng

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcftools-ng:<tag>

(see `vcftools-ng/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcftools-ng| image:: https://img.shields.io/conda/dn/bioconda/vcftools-ng.svg?style=flat
   :target: https://anaconda.org/bioconda/vcftools-ng
   :alt:   (downloads)
.. |docker_vcftools-ng| image:: https://quay.io/repository/biocontainers/vcftools-ng/status
   :target: https://quay.io/repository/biocontainers/vcftools-ng
.. _`vcftools-ng/tags`: https://quay.io/repository/biocontainers/vcftools-ng?tab=tags


.. raw:: html

   <script>
      var package = "vcftools-ng";
      var versions = ["0.13.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_vcftools-ng"></div>
   <div style="width: 100%" id="platform_plot_vcftools-ng"></div>
   <div style="width: 100%" id="cdf_plot_vcftools-ng"></div>



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
         
            // Build cdf plot for vcftools-ng
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcftools-ng/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_vcftools-ng', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for vcftools-ng
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcftools-ng/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_vcftools-ng', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for vcftools-ng
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vcftools-ng/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_vcftools-ng', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcftools-ng/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcftools-ng/README.html