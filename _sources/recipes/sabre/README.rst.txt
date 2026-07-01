:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sabre'
.. highlight: bash

sabre
=====

.. conda:recipe:: sabre
   :replaces_section_title:
   :noindex:

   A barcode demultiplexing and trimming tool for FastQ files

   :homepage: https://github.com/najoshi/sabre/
   :license: MIT
   :recipe: /`sabre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sabre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sabre/meta.yaml>`_

   Next\-generation sequencing can currently produce hundreds of millions of
   reads per lane of sample and that number increases at a dizzying rate.
   Barcoding individual sequences for multiple lines or multiple species is a
   cost\-efficient method to sequence and analyze a broad range of data. Sabre
   is a tool that will demultiplex barcoded reads into separate files. It
   will work on both single\-end and paired\-end data in fastq format. It
   simply compares the provided barcodes with each read and separates the
   read into its appropriate barcode file\, after stripping the barcode from
   the read \(and also stripping the quality values of the barcode bases\). If
   a read does not have a recognized barcode\, then it is put into the unknown
   file. Sabre also has an option \(\-m\) to allow mismatches of the barcodes.
   Sabre also supports gzipped file inputs. Also\, since sabre does not use
   the quality values in any way\, it can be used on fasta data that is
   converted to fastq by creating fake quality values. Finally\, after
   demultiplexing\, sabre outputs a summary of how many records went into each
   barcode file.


.. conda:package:: sabre

   |downloads_sabre| |docker_sabre|

   :versions:
      
      

      ``1.000-6``,  ``1.000-5``,  ``1.000-4``,  ``1.000-3``,  ``1.000-2``,  ``1.000-1``,  ``1.000-0``

      

   
   :depends on libgcc: ``>=13``
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

    pixi global install sabre

to add into an existing workspace instead, run::

    pixi add sabre

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sabre

Alternatively, to install into a new environment, run::

    conda create -n envname sabre

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sabre:<tag>

(see `sabre/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sabre| image:: https://img.shields.io/conda/dn/bioconda/sabre.svg?style=flat
   :target: https://anaconda.org/bioconda/sabre
   :alt:   (downloads)
.. |docker_sabre| image:: https://quay.io/repository/biocontainers/sabre/status
   :target: https://quay.io/repository/biocontainers/sabre
.. _`sabre/tags`: https://quay.io/repository/biocontainers/sabre?tab=tags


.. raw:: html

   <script>
      var package = "sabre";
      var versions = ["1.000","1.000","1.000","1.000","1.000"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_sabre"></div>
   <div style="width: 100%" id="platform_plot_sabre"></div>
   <div style="width: 100%" id="cdf_plot_sabre"></div>



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
         
            // Build cdf plot for sabre
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sabre/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_sabre', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for sabre
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sabre/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_sabre', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for sabre
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/sabre/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_sabre', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sabre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sabre/README.html