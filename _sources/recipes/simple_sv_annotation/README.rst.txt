:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simple_sv_annotation'
.. highlight: bash

simple_sv_annotation
====================

.. conda:recipe:: simple_sv_annotation
   :replaces_section_title:
   :noindex:

   Simplify snpEff annotations for interesting cases

   :homepage: https://github.com/AstraZeneca-NGS/simple_sv_annotation
   :license: MIT
   :recipe: /`simple_sv_annotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simple_sv_annotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simple_sv_annotation/meta.yaml>`_

   


.. conda:package:: simple_sv_annotation

   |downloads_simple_sv_annotation| |docker_simple_sv_annotation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2019.02.18-0</code>,  <code>2018.05.29-1</code>,  <code>2018.05.29-0</code>,  <code>2017.05.14-0</code>,  <code>2017.02.17-0</code>,  <code>2016.07.08-1</code>,  <code>2016.07.08-0</code>,  <code>2016.06.15-1</code>,  <code>2016.06.15-0</code>,  </span></summary>
      

      ``2019.02.18-0``,  ``2018.05.29-1``,  ``2018.05.29-0``,  ``2017.05.14-0``,  ``2017.02.17-0``,  ``2016.07.08-1``,  ``2016.07.08-0``,  ``2016.06.15-1``,  ``2016.06.15-0``,  ``2015.11.24-0``,  ``2015.11.16-0``,  ``2015.11.05-0``,  ``2015.10.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: 
   :depends on pyvcf: 

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

    pixi global install simple_sv_annotation

to add into an existing workspace instead, run::

    pixi add simple_sv_annotation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install simple_sv_annotation

Alternatively, to install into a new environment, run::

    conda create -n envname simple_sv_annotation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/simple_sv_annotation:<tag>

(see `simple_sv_annotation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_simple_sv_annotation| image:: https://img.shields.io/conda/dn/bioconda/simple_sv_annotation.svg?style=flat
   :target: https://anaconda.org/bioconda/simple_sv_annotation
   :alt:   (downloads)
.. |docker_simple_sv_annotation| image:: https://quay.io/repository/biocontainers/simple_sv_annotation/status
   :target: https://quay.io/repository/biocontainers/simple_sv_annotation
.. _`simple_sv_annotation/tags`: https://quay.io/repository/biocontainers/simple_sv_annotation?tab=tags


.. raw:: html

   <script>
      var package = "simple_sv_annotation";
      var versions = ["2019.02.18","2018.05.29","2018.05.29","2017.05.14","2017.02.17"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_simple_sv_annotation"></div>
   <div style="width: 100%" id="platform_plot_simple_sv_annotation"></div>
   <div style="width: 100%" id="cdf_plot_simple_sv_annotation"></div>



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
         
            // Build cdf plot for simple_sv_annotation
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/simple_sv_annotation/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_simple_sv_annotation', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for simple_sv_annotation
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/simple_sv_annotation/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_simple_sv_annotation', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for simple_sv_annotation
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/simple_sv_annotation/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_simple_sv_annotation', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simple_sv_annotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simple_sv_annotation/README.html