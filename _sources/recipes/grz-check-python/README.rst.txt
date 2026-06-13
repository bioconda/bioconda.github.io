:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grz-check-python'
.. highlight: bash

grz-check-python
================

.. conda:recipe:: grz-check-python
   :replaces_section_title:
   :noindex:

   Python bindings for grz\-check\, validator for Modellvorhaben §64e submissions.

   :homepage: https://github.com/BfArM-MVH/grz-tools/tree/main/packages/grz-check
   :documentation: https://github.com/BfArM-MVH/grz-tools/blob/grz-check-v0.3.1/packages/grz-check/README.md
   
   :license: MIT / MIT
   :recipe: /`grz-check-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grz-check-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grz-check-python/meta.yaml>`_

   


.. conda:package:: grz-check-python

   |downloads_grz-check-python| |docker_grz-check-python|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on openssl: ``>=3.5.6,<4.0a0``
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python_abi: ``3.12.* *_cp312``

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

    pixi global install grz-check-python

to add into an existing workspace instead, run::

    pixi add grz-check-python

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install grz-check-python

Alternatively, to install into a new environment, run::

    conda create -n envname grz-check-python

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/grz-check-python:<tag>

(see `grz-check-python/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_grz-check-python| image:: https://img.shields.io/conda/dn/bioconda/grz-check-python.svg?style=flat
   :target: https://anaconda.org/bioconda/grz-check-python
   :alt:   (downloads)
.. |docker_grz-check-python| image:: https://quay.io/repository/biocontainers/grz-check-python/status
   :target: https://quay.io/repository/biocontainers/grz-check-python
.. _`grz-check-python/tags`: https://quay.io/repository/biocontainers/grz-check-python?tab=tags


.. raw:: html

   <script>
      var package = "grz-check-python";
      var versions = ["0.3.1","0.3.0","0.3.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_grz-check-python"></div>
   <div style="width: 100%" id="platform_plot_grz-check-python"></div>
   <div style="width: 100%" id="cdf_plot_grz-check-python"></div>



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
         
            // Build cdf plot for grz-check-python
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/grz-check-python/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_grz-check-python', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for grz-check-python
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/grz-check-python/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_grz-check-python', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for grz-check-python
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/grz-check-python/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_grz-check-python', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grz-check-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grz-check-python/README.html