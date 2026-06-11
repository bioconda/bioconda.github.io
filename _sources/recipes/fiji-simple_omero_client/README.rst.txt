:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fiji-simple_omero_client'
.. highlight: bash

fiji-simple_omero_client
========================

.. conda:recipe:: fiji-simple_omero_client
   :replaces_section_title:
   :noindex:

   Java library to simplify API to put\/get objects on an OMERO server from Fiji\/ImageJ.

   :homepage: https://github.com/GReD-Clermont/simple-omero-client
   :license: GPLv2
   :recipe: /`fiji-simple_omero_client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-simple_omero_client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-simple_omero_client/meta.yaml>`_

   This library presents a simplified API to put\/get objects on an OMERO server.



.. conda:package:: fiji-simple_omero_client

   |downloads_fiji-simple_omero_client| |docker_fiji-simple_omero_client|

   :versions:
      
      

      ``5.19.0-0``,  ``5.18.0-0``,  ``5.17.0-0``,  ``5.16.0-0``,  ``5.15.0-0``,  ``5.12.2-0``

      

   
   :depends on fiji: ``>=20220414``
   :depends on fiji-omero_ij: ``<6.0.0``

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

    pixi global install fiji-simple_omero_client

to add into an existing workspace instead, run::

    pixi add fiji-simple_omero_client

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fiji-simple_omero_client

Alternatively, to install into a new environment, run::

    conda create -n envname fiji-simple_omero_client

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fiji-simple_omero_client:<tag>

(see `fiji-simple_omero_client/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fiji-simple_omero_client| image:: https://img.shields.io/conda/dn/bioconda/fiji-simple_omero_client.svg?style=flat
   :target: https://anaconda.org/bioconda/fiji-simple_omero_client
   :alt:   (downloads)
.. |docker_fiji-simple_omero_client| image:: https://quay.io/repository/biocontainers/fiji-simple_omero_client/status
   :target: https://quay.io/repository/biocontainers/fiji-simple_omero_client
.. _`fiji-simple_omero_client/tags`: https://quay.io/repository/biocontainers/fiji-simple_omero_client?tab=tags


.. raw:: html

   <script>
      var package = "fiji-simple_omero_client";
      var versions = ["5.19.0","5.18.0","5.17.0","5.16.0","5.15.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_fiji-simple_omero_client"></div>
   <div style="width: 100%" id="platform_plot_fiji-simple_omero_client"></div>
   <div style="width: 100%" id="cdf_plot_fiji-simple_omero_client"></div>



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
         
            // Build cdf plot for fiji-simple_omero_client
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fiji-simple_omero_client/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_fiji-simple_omero_client', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for fiji-simple_omero_client
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fiji-simple_omero_client/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_fiji-simple_omero_client', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for fiji-simple_omero_client
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fiji-simple_omero_client/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_fiji-simple_omero_client', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fiji-simple_omero_client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fiji-simple_omero_client/README.html