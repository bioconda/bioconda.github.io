:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'fdrbench'
.. highlight: bash

fdrbench
========

.. conda:recipe:: fdrbench
   :replaces_section_title:
   :noindex:

   FDRBench\: entrapment\-based false discovery rate control evaluation for proteomics

   :homepage: https://github.com/Noble-Lab/FDRBench
   :documentation: https://github.com/Noble-Lab/FDRBench/blob/v1.1.1/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`fdrbench <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fdrbench>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fdrbench/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-025-02719-x`

   FDRBench evaluates false discovery rate control in tandem mass spectrometry
   analysis using entrapment. It provides two functions\: building entrapment
   databases\, either by randomly shuffling target sequences or by taking
   sequences from foreign species\; and estimating the false discovery
   proportion \(FDP\) using the lower bound\, combined and paired methods.
   It has been tested against identification results from DIA\-NN\, MSFragger\,
   Spectronaut\, MaxQuant\, Tide\, Sage and others.

   Wen B\, Freestone J\, Riffle M\, et al. Assessment of false discovery rate
   control in tandem mass spectrometry analysis using entrapment.
   Nat Methods 22\, 1454\-1463 \(2025\). doi\:10.1038\/s41592\-025\-02719\-x



.. conda:package:: fdrbench

   |downloads_fdrbench| |docker_fdrbench|

   :versions:
      
      

      ``1.1.1-0``

      

   
   :depends on openjdk: ``>=11``

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

    pixi global install fdrbench

to add into an existing workspace instead, run::

    pixi add fdrbench

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fdrbench

Alternatively, to install into a new environment, run::

    conda create -n envname fdrbench

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fdrbench:<tag>

(see `fdrbench/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fdrbench| image:: https://img.shields.io/conda/dn/bioconda/fdrbench.svg?style=flat
   :target: https://anaconda.org/bioconda/fdrbench
   :alt:   (downloads)
.. |docker_fdrbench| image:: https://quay.io/repository/biocontainers/fdrbench/status
   :target: https://quay.io/repository/biocontainers/fdrbench
.. _`fdrbench/tags`: https://quay.io/repository/biocontainers/fdrbench?tab=tags


.. raw:: html

   <script>
      var package = "fdrbench";
      var versions = ["1.1.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_fdrbench"></div>
   <div style="width: 100%" id="platform_plot_fdrbench"></div>
   <div style="width: 100%" id="cdf_plot_fdrbench"></div>



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
         
            // Build cdf plot for fdrbench
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fdrbench/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_fdrbench', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for fdrbench
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fdrbench/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_fdrbench', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for fdrbench
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/fdrbench/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_fdrbench', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
FDRBench is a Java program invoked through a wrapper script named
\"fdrbench\"\, which is placed on \$PATH. The wrapper passes \$JAVA\_OPTS to the
JVM\, so memory can be raised with e.g. JAVA\_OPTS\=\"\-Xmx8G\" fdrbench ...
Running it with no arguments launches the graphical interface\; passing
arguments runs the command line interface.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fdrbench/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fdrbench/README.html