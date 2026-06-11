:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-sampleconfig'
.. highlight: bash

biopet-sampleconfig
===================

.. conda:recipe:: biopet-sampleconfig
   :replaces_section_title:
   :noindex:

   \#\#\#\# Tools \- ExtractTsv  This mean can extract samples\, libraries and readgroups from a sample config file.

   :homepage: https://github.com/biopet/sampleconfig
   :license: MIT
   :recipe: /`biopet-sampleconfig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-sampleconfig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-sampleconfig/meta.yaml>`_

   \#\#\#\# Tools \- ExtractTsv

   This mean can extract samples\, libraries and readgroups from a sample config file. This meant as a supporting tool inside wdl pipelines.
   It can also output a single layer as tsv file.


   \#\#\#\# Tools \- ReadFromTsv

   This tool enables a user to create a full sample sheet in JSON format or
   YAML format\, suitable for all Biopet Queue pipelines\, from TSV file\(s\).


   \#\#\#\# Tools \- CromwellArrays

   This tool will convert the sample configs to a array based format that can be used inside wdl pipelines.
   This tool is only to support biowdl pipelines.


   \#\#\#\# Tools \- CaseControl

    This tool will extract the case\-control pairs from a sample config file.
    It will read the headers of the bam files to confirm that samples do exist.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/sampleconfig



.. conda:package:: biopet-sampleconfig

   |downloads_biopet-sampleconfig| |docker_biopet-sampleconfig|

   :versions:
      
      

      ``0.3-1``,  ``0.3-0``,  ``0.2-1``,  ``0.2-0``,  ``0.1-1``,  ``0.1-0``

      

   
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

    pixi global install biopet-sampleconfig

to add into an existing workspace instead, run::

    pixi add biopet-sampleconfig

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biopet-sampleconfig

Alternatively, to install into a new environment, run::

    conda create -n envname biopet-sampleconfig

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biopet-sampleconfig:<tag>

(see `biopet-sampleconfig/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biopet-sampleconfig| image:: https://img.shields.io/conda/dn/bioconda/biopet-sampleconfig.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-sampleconfig
   :alt:   (downloads)
.. |docker_biopet-sampleconfig| image:: https://quay.io/repository/biocontainers/biopet-sampleconfig/status
   :target: https://quay.io/repository/biocontainers/biopet-sampleconfig
.. _`biopet-sampleconfig/tags`: https://quay.io/repository/biocontainers/biopet-sampleconfig?tab=tags


.. raw:: html

   <script>
      var package = "biopet-sampleconfig";
      var versions = ["0.3","0.3","0.2","0.2","0.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_biopet-sampleconfig"></div>
   <div style="width: 100%" id="platform_plot_biopet-sampleconfig"></div>
   <div style="width: 100%" id="cdf_plot_biopet-sampleconfig"></div>



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
         
            // Build cdf plot for biopet-sampleconfig
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/biopet-sampleconfig/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_biopet-sampleconfig', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for biopet-sampleconfig
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/biopet-sampleconfig/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_biopet-sampleconfig', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for biopet-sampleconfig
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/biopet-sampleconfig/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_biopet-sampleconfig', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
biopet\-sampleconfig is a Java program that comes with a custom wrapper shell script.
By default \'no default java option\' is set in the wrapper.
The command that runs the program is \'biopet\-sampleconfig\'.
If you want to overwrite it you can specify memory options directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \'biopet\-sampleconfig \-Xms512m \-Xmx1g\'.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-sampleconfig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-sampleconfig/README.html