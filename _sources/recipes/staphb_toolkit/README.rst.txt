:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'staphb_toolkit'
.. highlight: bash

staphb_toolkit
==============

.. conda:recipe:: staphb_toolkit
   :replaces_section_title:
   :noindex:

   A ToolKit of commonly used Public Health Bioinformatics Tools

   :homepage: https://staphb.org/staphb_toolkit/
   :documentation: https://staphb.org/staphb_toolkit
   
   :developer docs: https://github.com/StaPH-B/staphb_toolkit
   :license: GPL / GPLv3
   :recipe: /`staphb_toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphb_toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphb_toolkit/meta.yaml>`_

   


.. conda:package:: staphb_toolkit

   |downloads_staphb_toolkit| |docker_staphb_toolkit|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0-0``,  ``1.3.10-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``

      

   
   :depends on docker-py: ``>=4.1.0``
   :depends on openjdk: 
   :depends on pexpect: ``>=4.8``
   :depends on psutil: ``>=5.6.3``
   :depends on pyfiglet: ``>=0.8.post1``
   :depends on python: ``>=3.6``
   :depends on rich: ``>=12.4.4``
   :depends on spython: ``>=0.0.73``

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

    pixi global install staphb_toolkit

to add into an existing workspace instead, run::

    pixi add staphb_toolkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install staphb_toolkit

Alternatively, to install into a new environment, run::

    conda create -n envname staphb_toolkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/staphb_toolkit:<tag>

(see `staphb_toolkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_staphb_toolkit| image:: https://img.shields.io/conda/dn/bioconda/staphb_toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/staphb_toolkit
   :alt:   (downloads)
.. |docker_staphb_toolkit| image:: https://quay.io/repository/biocontainers/staphb_toolkit/status
   :target: https://quay.io/repository/biocontainers/staphb_toolkit
.. _`staphb_toolkit/tags`: https://quay.io/repository/biocontainers/staphb_toolkit?tab=tags


.. raw:: html

   <script>
      var package = "staphb_toolkit";
      var versions = ["2.0.1","2.0.0","1.3.10","1.3.9","1.3.8"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_staphb_toolkit"></div>
   <div style="width: 100%" id="platform_plot_staphb_toolkit"></div>
   <div style="width: 100%" id="cdf_plot_staphb_toolkit"></div>



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
         
            // Build cdf plot for staphb_toolkit
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/staphb_toolkit/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_staphb_toolkit', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for staphb_toolkit
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/staphb_toolkit/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_staphb_toolkit', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for staphb_toolkit
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/staphb_toolkit/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_staphb_toolkit', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/staphb_toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/staphb_toolkit/README.html