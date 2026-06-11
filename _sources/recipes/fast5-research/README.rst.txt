:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fast5-research'
.. highlight: bash

fast5-research
==============

.. conda:recipe:: fast5-research
   :replaces_section_title:
   :noindex:

   ONT Research fast5 read\/write package

   :homepage: https://github.com/nanoporetech/fast5_research
   :license: OTHER / Mozilla Public License 2.0 (MPL 2.0)
   :recipe: /`fast5-research <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5-research>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5-research/meta.yaml>`_

   


.. conda:package:: fast5-research

   |downloads_fast5-research| |docker_fast5-research|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.22-0</code>,  <code>1.2.20-1</code>,  <code>1.2.20-0</code>,  <code>1.2.19-0</code>,  <code>1.2.18-0</code>,  <code>1.2.17-0</code>,  <code>1.2.15-0</code>,  <code>1.2.11-0</code>,  <code>1.2.10-0</code>,  </span></summary>
      

      ``1.2.22-0``,  ``1.2.20-1``,  ``1.2.20-0``,  ``1.2.19-0``,  ``1.2.18-0``,  ``1.2.17-0``,  ``1.2.15-0``,  ``1.2.11-0``,  ``1.2.10-0``,  ``1.2.8-0``,  ``1.0.9-1``,  ``1.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on futures: 
   :depends on h5py: ``<2.9.0``
   :depends on numpy: ``>=1.14``
   :depends on progressbar2: 
   :depends on python: 

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

    pixi global install fast5-research

to add into an existing workspace instead, run::

    pixi add fast5-research

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fast5-research

Alternatively, to install into a new environment, run::

    conda create -n envname fast5-research

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fast5-research:<tag>

(see `fast5-research/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fast5-research| image:: https://img.shields.io/conda/dn/bioconda/fast5-research.svg?style=flat
   :target: https://anaconda.org/bioconda/fast5-research
   :alt:   (downloads)
.. |docker_fast5-research| image:: https://quay.io/repository/biocontainers/fast5-research/status
   :target: https://quay.io/repository/biocontainers/fast5-research
.. _`fast5-research/tags`: https://quay.io/repository/biocontainers/fast5-research?tab=tags


.. raw:: html

   <script>
      var package = "fast5-research";
      var versions = ["1.2.22","1.2.20","1.2.20","1.2.19","1.2.18"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_fast5-research"></div>
   <div style="width: 100%" id="platform_plot_fast5-research"></div>
   <div style="width: 100%" id="cdf_plot_fast5-research"></div>



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
         
            // Build cdf plot for fast5-research
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fast5-research/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_fast5-research', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for fast5-research
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fast5-research/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_fast5-research', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for fast5-research
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fast5-research/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_fast5-research', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fast5-research/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fast5-research/README.html