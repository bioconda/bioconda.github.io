:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthanq'
.. highlight: bash

orthanq
=======

.. conda:recipe:: orthanq
   :replaces_section_title:
   :noindex:

   Uncertainty aware HLA typing and general haplotype quantification.

   :homepage: https://github.com/orthanq/orthanq
   :documentation: https://orthanq.github.io
   
   :license: MIT / MIT
   :recipe: /`orthanq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthanq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthanq/meta.yaml>`_

   


.. conda:package:: orthanq

   |downloads_orthanq| |docker_orthanq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.21.0-1</code>,  <code>1.21.0-0</code>,  <code>1.20.0-0</code>,  <code>1.19.0-0</code>,  <code>1.18.1-0</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.1-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.21.0-1``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.13.0-0``,  ``1.12.1-1``,  ``1.12.1-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.3-0``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.7.9-1``,  ``1.7.9-0``,  ``1.7.8-0``,  ``1.7.7-0``,  ``1.7.6-0``,  ``1.7.5-0``,  ``1.7.4-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-2``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bwa: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on coin-or-cbc: ``>=2.10.12,<2.11.0a0``
   :depends on fontconfig: ``>=2.15.0,<3.0a0``
   :depends on fonts-conda-ecosystem: 
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on htslib: 
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on minimap2: 
   :depends on openssl: ``>=3.5.5,<4.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on samtools: ``1.20``
   :depends on varlociraptor: ``8.7.3``
   :depends on vg: ``1.63.1``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      


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

    pixi global install orthanq

to add into an existing workspace instead, run::

    pixi add orthanq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install orthanq

Alternatively, to install into a new environment, run::

    conda create -n envname orthanq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/orthanq:<tag>

(see `orthanq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_orthanq| image:: https://img.shields.io/conda/dn/bioconda/orthanq.svg?style=flat
   :target: https://anaconda.org/bioconda/orthanq
   :alt:   (downloads)
.. |docker_orthanq| image:: https://quay.io/repository/biocontainers/orthanq/status
   :target: https://quay.io/repository/biocontainers/orthanq
.. _`orthanq/tags`: https://quay.io/repository/biocontainers/orthanq?tab=tags


.. raw:: html

   <script>
      var package = "orthanq";
      var versions = ["1.21.0","1.21.0","1.20.0","1.19.0","1.18.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_orthanq"></div>
   <div style="width: 100%" id="platform_plot_orthanq"></div>
   <div style="width: 100%" id="cdf_plot_orthanq"></div>



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
         
            // Build cdf plot for orthanq
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/orthanq/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_orthanq', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for orthanq
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/orthanq/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_orthanq', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for orthanq
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/orthanq/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_orthanq', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthanq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthanq/README.html