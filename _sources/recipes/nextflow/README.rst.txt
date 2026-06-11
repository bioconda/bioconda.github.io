:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextflow'
.. highlight: bash

nextflow
========

.. conda:recipe:: nextflow
   :replaces_section_title:
   :noindex:

   A DSL for data\-driven computational pipelines http\:\/\/nextflow.io

   :homepage: https://github.com/nextflow-io/nextflow
   :license: Apache-2.0
   :recipe: /`nextflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextflow/meta.yaml>`_

   


.. conda:package:: nextflow

   |downloads_nextflow| |docker_nextflow|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>26.04.3-0</code>,  <code>26.04.2-0</code>,  <code>26.04.1-0</code>,  <code>26.04.0-0</code>,  <code>25.10.4-0</code>,  <code>25.10.3-1</code>,  <code>25.10.3-0</code>,  <code>25.10.2-0</code>,  <code>25.10.1-0</code>,  </span></summary>
      

      ``26.04.3-0``,  ``26.04.2-0``,  ``26.04.1-0``,  ``26.04.0-0``,  ``25.10.4-0``,  ``25.10.3-1``,  ``25.10.3-0``,  ``25.10.2-0``,  ``25.10.1-0``,  ``25.10.0-0``,  ``25.04.8-0``,  ``25.04.7-0``,  ``25.04.6-0``,  ``25.04.5-0``,  ``25.04.4-0``,  ``25.04.3-0``,  ``25.04.2-0``,  ``25.04.1-0``,  ``25.04.0-0``,  ``24.10.6-0``,  ``24.10.5-1``,  ``24.10.5-0``,  ``24.10.4-0``,  ``24.10.3-0``,  ``24.10.2-0``,  ``24.10.1-0``,  ``24.10.0-0``,  ``24.04.4-0``,  ``24.04.3-0``,  ``24.04.2-0``,  ``24.04.1-0``,  ``23.10.1-0``,  ``23.10.0-0``,  ``23.04.4-0``,  ``23.04.3-0``,  ``23.04.1-3``,  ``23.04.1-2``,  ``23.04.1-1``,  ``23.04.1-0``,  ``22.10.6-0``,  ``22.10.4-0``,  ``22.10.1-0``,  ``22.10.0-0``,  ``22.04.5-0``,  ``22.04.0-0``,  ``21.10.6-0``,  ``21.10.0-0``,  ``21.04.0-0``,  ``20.10.0-1``,  ``20.10.0-0``,  ``20.07.1-0``,  ``20.04.1-1``,  ``20.04.1-0``,  ``20.01.0-0``,  ``19.10.0-0``,  ``19.07.0-0``,  ``19.04.1-1``,  ``19.04.0-0``,  ``19.01.0-4``,  ``19.01.0-3``,  ``18.10.1-3``,  ``18.10.1-2``,  ``18.10.1-1``,  ``0.32.0-1``,  ``0.31.1-1``,  ``0.31.1-0``,  ``0.31.0-2``,  ``0.30.2-2``,  ``0.30.1-0``,  ``0.30.0-0``,  ``0.29.1-0``,  ``0.29.0-0``,  ``0.28.2-0``,  ``0.28.1-0``,  ``0.28.0-0``,  ``0.27.6-0``,  ``0.27.5-0``,  ``0.27.4-0``,  ``0.27.2-0``,  ``0.27.1-0``,  ``0.27.0-0``,  ``0.25.1-0``,  ``0.24.2-0``,  ``0.24.1-0``,  ``0.23.4-0``,  ``0.21.3-0``,  ``0.19.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on coreutils: 
   :depends on curl: 
   :depends on openjdk: ``>=17,<=24``

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

    pixi global install nextflow

to add into an existing workspace instead, run::

    pixi add nextflow

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nextflow

Alternatively, to install into a new environment, run::

    conda create -n envname nextflow

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nextflow:<tag>

(see `nextflow/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nextflow| image:: https://img.shields.io/conda/dn/bioconda/nextflow.svg?style=flat
   :target: https://anaconda.org/bioconda/nextflow
   :alt:   (downloads)
.. |docker_nextflow| image:: https://quay.io/repository/biocontainers/nextflow/status
   :target: https://quay.io/repository/biocontainers/nextflow
.. _`nextflow/tags`: https://quay.io/repository/biocontainers/nextflow?tab=tags


.. raw:: html

   <script>
      var package = "nextflow";
      var versions = ["26.04.3","26.04.2","26.04.1","26.04.0","25.10.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_nextflow"></div>
   <div style="width: 100%" id="platform_plot_nextflow"></div>
   <div style="width: 100%" id="cdf_plot_nextflow"></div>



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
         
            // Build cdf plot for nextflow
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nextflow/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_nextflow', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for nextflow
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nextflow/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_nextflow', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for nextflow
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/nextflow/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_nextflow', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextflow/README.html