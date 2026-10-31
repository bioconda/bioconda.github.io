:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'riaso'
.. highlight: bash

riaso
=====

.. conda:recipe:: riaso
   :replaces_section_title:
   :noindex:

   Rapid and intelligent analysis of spatial omics data

   :homepage: https://github.com/OpenGene/riaso
   :license: MIT
   :recipe: /`riaso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riaso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riaso/meta.yaml>`_

   RIASO is a Rust command\-line pipeline for spatial transcriptomics data
   in GEF\, GEM and h5ad formats\, with preprocessing\, clustering\, annotation\,
   enrichment analysis and HTML reports. This recipe builds only RIASO\/riaso
   from source and installs its complete self\-contained distribution\,
   including shared libraries\, fonts and fontconfig configuration.



.. conda:package:: riaso

   |downloads_riaso| |docker_riaso|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on arpack: ``>=3.9.1,<3.10.0a0 nompi_*``
   :depends on fontconfig: ``>=2.18.3,<3.0a0``
   :depends on fonts-conda-ecosystem: 
   :depends on hdf5: ``>=1.14.6,<1.14.7.0a0``
   :depends on libcurl: ``>=8.13.0,<9.0a0``
   :depends on libexpat: ``>=2.9.0,<3.0a0``
   :depends on libfreetype: ``>=2.14.3``
   :depends on libfreetype6: ``>=2.14.3``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``

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

    pixi global install riaso

to add into an existing workspace instead, run::

    pixi add riaso

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install riaso

Alternatively, to install into a new environment, run::

    conda create -n envname riaso

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/riaso:<tag>

(see `riaso/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_riaso| image:: https://img.shields.io/conda/dn/bioconda/riaso.svg?style=flat
   :target: https://anaconda.org/bioconda/riaso
   :alt:   (downloads)
.. |docker_riaso| image:: https://quay.io/repository/biocontainers/riaso/status
   :target: https://quay.io/repository/biocontainers/riaso
.. _`riaso/tags`: https://quay.io/repository/biocontainers/riaso?tab=tags


.. raw:: html

   <script>
      var package = "riaso";
      var versions = ["0.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_riaso"></div>
   <div style="width: 100%" id="platform_plot_riaso"></div>
   <div style="width: 100%" id="cdf_plot_riaso"></div>



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
         
            // Build cdf plot for riaso
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/riaso/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_riaso', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for riaso
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/riaso/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_riaso', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for riaso
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/riaso/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_riaso', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
bin\/riaso invokes the upstream launcher under share\/riaso. The launcher
sets FONTCONFIG\_FILE to the bundled configuration so plots use the
bundled fonts without requiring an activated environment.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riaso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riaso/README.html