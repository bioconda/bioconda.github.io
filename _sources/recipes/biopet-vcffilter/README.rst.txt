:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-vcffilter'
.. highlight: bash

biopet-vcffilter
================

.. conda:recipe:: biopet-vcffilter
   :replaces_section_title:
   :noindex:

   This tool enables a user to filter VCF files.

   :homepage: https://github.com/biopet/vcffilter
   :license: MIT
   :recipe: /`biopet-vcffilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-vcffilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-vcffilter/meta.yaml>`_

   This tool enables a user to filter VCF files. For example on sample depth and\/or total depth. It can also be used to
   filter out the reference calls and\/or minimum number of sample passes. There is a wide set of options which one can
   use to change the filter settings.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/vcffilter


.. conda:package:: biopet-vcffilter

   |downloads_biopet-vcffilter| |docker_biopet-vcffilter|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``

      

   
   :depends on openjdk: ``>=8,<9``
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

    pixi global install biopet-vcffilter

to add into an existing workspace instead, run::

    pixi add biopet-vcffilter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biopet-vcffilter

Alternatively, to install into a new environment, run::

    conda create -n envname biopet-vcffilter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biopet-vcffilter:<tag>

(see `biopet-vcffilter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biopet-vcffilter| image:: https://img.shields.io/conda/dn/bioconda/biopet-vcffilter.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-vcffilter
   :alt:   (downloads)
.. |docker_biopet-vcffilter| image:: https://quay.io/repository/biocontainers/biopet-vcffilter/status
   :target: https://quay.io/repository/biocontainers/biopet-vcffilter
.. _`biopet-vcffilter/tags`: https://quay.io/repository/biocontainers/biopet-vcffilter?tab=tags


.. raw:: html

   <script>
      var package = "biopet-vcffilter";
      var versions = ["0.2","0.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_biopet-vcffilter"></div>
   <div style="width: 100%" id="platform_plot_biopet-vcffilter"></div>
   <div style="width: 100%" id="cdf_plot_biopet-vcffilter"></div>



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
         
            // Build cdf plot for biopet-vcffilter
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/biopet-vcffilter/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_biopet-vcffilter', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for biopet-vcffilter
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/biopet-vcffilter/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_biopet-vcffilter', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for biopet-vcffilter
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/biopet-vcffilter/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_biopet-vcffilter', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
biopet\-vcffilter is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-vcffilter\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-vcffilter \-Xms512m \-Xmx1g\'. 


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-vcffilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-vcffilter/README.html