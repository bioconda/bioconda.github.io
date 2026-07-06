:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openms-meta'
.. highlight: bash

openms-meta
===========

.. conda:recipe:: openms-meta
   :replaces_section_title:
   :noindex:

   OpenMS is an open\-source software C\+\+ library for LC\-MS data management and analyses. The openms\-meta package should not be installed. Please use one of its outputs libopenms\, openms \(\=tools\) or openms\-thirdparty.

   :homepage: https://github.com/OpenMS/OpenMS
   :documentation: https://openms.readthedocs.io/en/latest/index.html
   
   :license: BSD / BSD-3-Clause
   :recipe: /`openms-meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openms-meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openms-meta/meta.yaml>`_
   :links: biotools: :biotools:`openms`, usegalaxy-eu: :usegalaxy-eu:`openms_fileconverter`, doi: :doi:`10.1038/s41592-024-02197-7`

   


.. conda:package:: libopenms

   |downloads_libopenms| |docker_libopenms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.0-0</code>,  <code>3.4.1-1</code>,  <code>3.4.1-0</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.3.0-8</code>,  <code>3.3.0-6</code>,  <code>3.3.0-5</code>,  <code>3.2.0-5</code>,  </span></summary>
      

      ``3.5.0-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.0-8``,  ``3.3.0-6``,  ``3.3.0-5``,  ``3.2.0-5``,  ``3.2.0-4``,  ``3.1.0-4``,  ``3.1.0-3``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.9.1-4``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.0-4``,  ``2.8.0-3``,  ``2.8.0-2``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.6.0-0``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-3``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on coin-or-cbc: ``>=2.10.12,<2.11.0a0``
   :depends on coin-or-cgl: ``>=0.60,<0.61.0a0``
   :depends on coin-or-clp: ``>=1.17,<1.18.0a0``
   :depends on coin-or-utils: ``>=2.11,<2.12.0a0``
   :depends on libcxx: ``>=18``
   :depends on libsvm: ``>=335,<400``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on llvm-openmp: ``>=18.1.8``
   :depends on qt6-main: ``>=6.7.3,<6.8.0a0``
   :depends on xerces-c: ``>=3.2.5,<3.3.0a0``
   :depends on yaml-cpp: ``>=0.8.0,<0.9.0a0``

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

    pixi global install libopenms

to add into an existing workspace instead, run::

    pixi add libopenms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install libopenms

Alternatively, to install into a new environment, run::

    conda create -n envname libopenms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/libopenms:<tag>

(see `libopenms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_libopenms| image:: https://img.shields.io/conda/dn/bioconda/libopenms.svg?style=flat
   :target: https://anaconda.org/bioconda/libopenms
   :alt:   (downloads)
.. |docker_libopenms| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`libopenms/tags`: https://quay.io/repository/biocontainers/libopenms?tab=tags


.. raw:: html

   <script>
      var package = "libopenms";
      var versions = ["3.5.0","3.4.1","3.4.1","3.4.0","3.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_libopenms"></div>
   <div style="width: 100%" id="platform_plot_libopenms"></div>
   <div style="width: 100%" id="cdf_plot_libopenms"></div>


.. conda:package:: openms

   |downloads_openms| |docker_openms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.0-0</code>,  <code>3.4.1-1</code>,  <code>3.4.1-0</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.3.0-8</code>,  <code>3.3.0-6</code>,  <code>3.3.0-5</code>,  <code>3.2.0-5</code>,  </span></summary>
      

      ``3.5.0-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.0-8``,  ``3.3.0-6``,  ``3.3.0-5``,  ``3.2.0-5``,  ``3.2.0-4``,  ``3.1.0-4``,  ``3.1.0-3``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.9.1-4``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.0-4``,  ``2.8.0-3``,  ``2.8.0-2``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.6.0-0``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on eigen: ``>=3.4.0,<3.5.0a0``
   :depends on libarrow: ``>=21.0.0,<21.1.0a0``
   :depends on libcxx: ``>=18``
   :depends on libopenms: ``3.5.0 h030a1c7_0``
   :depends on libparquet: ``>=21.0.0,<21.1.0a0``
   :depends on libsvm: ``>=335,<400``
   :depends on qt6-main: ``>=6.7.3,<6.8.0a0``
   :depends on xerces-c: ``>=3.2.5,<3.3.0a0``

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

    pixi global install openms

to add into an existing workspace instead, run::

    pixi add openms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install openms

Alternatively, to install into a new environment, run::

    conda create -n envname openms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/openms:<tag>

(see `openms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_openms| image:: https://img.shields.io/conda/dn/bioconda/openms.svg?style=flat
   :target: https://anaconda.org/bioconda/openms
   :alt:   (downloads)
.. |docker_openms| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`openms/tags`: https://quay.io/repository/biocontainers/openms?tab=tags


.. raw:: html

   <script>
      var package = "openms";
      var versions = ["3.5.0","3.4.1","3.4.1","3.4.0","3.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_openms"></div>
   <div style="width: 100%" id="platform_plot_openms"></div>
   <div style="width: 100%" id="cdf_plot_openms"></div>


.. conda:package:: openms-thirdparty

   |downloads_openms-thirdparty| |docker_openms-thirdparty|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.0-0</code>,  <code>3.4.1-1</code>,  <code>3.4.1-0</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.3.0-8</code>,  <code>3.3.0-6</code>,  <code>3.3.0-5</code>,  <code>3.2.0-5</code>,  </span></summary>
      

      ``3.5.0-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.0-8``,  ``3.3.0-6``,  ``3.3.0-5``,  ``3.2.0-5``,  ``3.2.0-4``,  ``3.1.0-4``,  ``3.1.0-3``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.9.1-4``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.0-4``,  ``2.8.0-3``,  ``2.8.0-2``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.6.0-0``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on comet-ms: ``2024011``
   :depends on gnuplot: 
   :depends on luciphor2: ``2020_04_03``
   :depends on msgf_plus: ``2024.03.26``
   :depends on openms: ``3.5.0 h1ce2723_0``
   :depends on percolator: ``3.7.1``
   :depends on r-gplots: 
   :depends on sage-proteomics: ``0.14.7``
   :depends on sirius-ms: ``>=6.1.0``
   :depends on thermorawfileparser: ``1.4.3``

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

    pixi global install openms-thirdparty

to add into an existing workspace instead, run::

    pixi add openms-thirdparty

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install openms-thirdparty

Alternatively, to install into a new environment, run::

    conda create -n envname openms-thirdparty

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/openms-thirdparty:<tag>

(see `openms-thirdparty/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_openms-thirdparty| image:: https://img.shields.io/conda/dn/bioconda/openms-thirdparty.svg?style=flat
   :target: https://anaconda.org/bioconda/openms-thirdparty
   :alt:   (downloads)
.. |docker_openms-thirdparty| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`openms-thirdparty/tags`: https://quay.io/repository/biocontainers/openms-thirdparty?tab=tags


.. raw:: html

   <script>
      var package = "openms-thirdparty";
      var versions = ["3.5.0","3.4.1","3.4.1","3.4.0","3.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_openms-thirdparty"></div>
   <div style="width: 100%" id="platform_plot_openms-thirdparty"></div>
   <div style="width: 100%" id="cdf_plot_openms-thirdparty"></div>



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
         
            // Build cdf plot for libopenms
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/libopenms/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_libopenms', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for libopenms
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/libopenms/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_libopenms', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for libopenms
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/libopenms/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_libopenms', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
            // Build cdf plot for openms
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/openms/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_openms', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for openms
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/openms/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_openms', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for openms
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/openms/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_openms', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
            // Build cdf plot for openms-thirdparty
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/openms-thirdparty/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_openms-thirdparty', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for openms-thirdparty
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/openms-thirdparty/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_openms-thirdparty', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for openms-thirdparty
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/openms-thirdparty/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_openms-thirdparty', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openms-meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openms-meta/README.html