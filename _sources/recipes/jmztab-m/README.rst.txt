:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jmztab-m'
.. highlight: bash

jmztab-m
========

.. conda:recipe:: jmztab-m
   :replaces_section_title:
   :noindex:

   This project is the reference reader\, writer and validator implementation for mzTab for metabolomics 2.0\+.

   :homepage: https://github.com/lifs-tools/jmztab-m
   :license: APACHE / Apache License 2.0
   :recipe: /`jmztab-m <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jmztab-m>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jmztab-m/meta.yaml>`_
   :links: biotools: :biotools:`jmztab-m`, doi: :doi:`10.5281/zenodo.3662402`

   mzTab\-M is intended as a reporting standard for quantitative results from
   metabolomics\/lipodomics approaches. This format is further intended to
   provide local LIMS systems as well as MS metabolomics repositories a 
   simple way to share and combine basic information. mzTab\-M has been
   developed with a view to support the following general tasks. Facilitate 
   the sharing of final experimental results\, especially with researchers 
   outside the field of metabolomics. Export of results to external software\,
   including programs such as Microsoft Excel and Open Office Spreadsheet
   and statistical software \/ coding languages such as R. Act as an output
   format of \(web\-\) services that report MS\-based results and thus can 
   produce standardized result pages. Be able to link to the external 
   experimental evidence e.g. by referencing back to mzML files.



.. conda:package:: jmztab-m

   |downloads_jmztab-m| |docker_jmztab-m|

   :versions:
      
      

      ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``

      

   
   :depends on openjdk: ``>=11``
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

    pixi global install jmztab-m

to add into an existing workspace instead, run::

    pixi add jmztab-m

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jmztab-m

Alternatively, to install into a new environment, run::

    conda create -n envname jmztab-m

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jmztab-m:<tag>

(see `jmztab-m/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jmztab-m| image:: https://img.shields.io/conda/dn/bioconda/jmztab-m.svg?style=flat
   :target: https://anaconda.org/bioconda/jmztab-m
   :alt:   (downloads)
.. |docker_jmztab-m| image:: https://quay.io/repository/biocontainers/jmztab-m/status
   :target: https://quay.io/repository/biocontainers/jmztab-m
.. _`jmztab-m/tags`: https://quay.io/repository/biocontainers/jmztab-m?tab=tags


.. raw:: html

   <script>
      var package = "jmztab-m";
      var versions = ["1.0.6","1.0.6","1.0.5","1.0.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_jmztab-m"></div>
   <div style="width: 100%" id="platform_plot_jmztab-m"></div>
   <div style="width: 100%" id="cdf_plot_jmztab-m"></div>



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
         
            // Build cdf plot for jmztab-m
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/jmztab-m/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_jmztab-m', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for jmztab-m
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/jmztab-m/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_jmztab-m', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for jmztab-m
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/jmztab-m/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_jmztab-m', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
jmzTab\-M is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"jmztab\-m \-Xms512m \-Xmx1g\"



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jmztab-m/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jmztab-m/README.html