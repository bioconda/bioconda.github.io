:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmtk'
.. highlight: bash

gmtk
====

.. conda:recipe:: gmtk
   :replaces_section_title:
   :noindex:

   A publicly available toolkit for rapidly prototyping statistical models using dynamic graphical models \(DGMs\) and dynamic Bayesian networks \(DBNs\)

   :homepage: http://melodi.ee.washington.edu/gmtk/
   :license: OSL-3.0
   :recipe: /`gmtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmtk/meta.yaml>`_

   


.. conda:package:: gmtk

   |downloads_gmtk| |docker_gmtk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.4-16</code>,  <code>1.4.4-15</code>,  <code>1.4.4-14</code>,  <code>1.4.4-13</code>,  <code>1.4.4-12</code>,  <code>1.4.4-11</code>,  <code>1.4.4-10</code>,  <code>1.4.4-9</code>,  <code>1.4.4-8</code>,  </span></summary>
      

      ``1.4.4-16``,  ``1.4.4-15``,  ``1.4.4-14``,  ``1.4.4-13``,  ``1.4.4-12``,  ``1.4.4-11``,  ``1.4.4-10``,  ``1.4.4-9``,  ``1.4.4-8``,  ``1.4.4-7``,  ``1.4.4-6``,  ``1.4.4-5``,  ``1.4.4-4``,  ``1.4.4-3``,  ``1.4.4-2``,  ``1.4.4-1``,  ``1.4.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gxx_linux-64: ``10.*``
   :depends on hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends on libgcc: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx: 
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install gmtk

to add into an existing workspace instead, run::

    pixi add gmtk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gmtk

Alternatively, to install into a new environment, run::

    conda create -n envname gmtk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gmtk:<tag>

(see `gmtk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gmtk| image:: https://img.shields.io/conda/dn/bioconda/gmtk.svg?style=flat
   :target: https://anaconda.org/bioconda/gmtk
   :alt:   (downloads)
.. |docker_gmtk| image:: https://quay.io/repository/biocontainers/gmtk/status
   :target: https://quay.io/repository/biocontainers/gmtk
.. _`gmtk/tags`: https://quay.io/repository/biocontainers/gmtk?tab=tags


.. raw:: html

   <script>
      var package = "gmtk";
      var versions = ["1.4.4","1.4.4","1.4.4","1.4.4","1.4.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_gmtk"></div>
   <div style="width: 100%" id="platform_plot_gmtk"></div>
   <div style="width: 100%" id="cdf_plot_gmtk"></div>



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
         
            // Build cdf plot for gmtk
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gmtk/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_gmtk', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for gmtk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gmtk/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_gmtk', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for gmtk
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/gmtk/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_gmtk', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmtk/README.html