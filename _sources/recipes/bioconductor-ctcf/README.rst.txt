:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctcf'
.. highlight: bash

bioconductor-ctcf
=================

.. conda:recipe:: bioconductor-ctcf
   :replaces_section_title:
   :noindex:

   Genomic coordinates of CTCF binding sites\, with orientation

   :homepage: https://bioconductor.org/packages/3.22/data/annotation/html/CTCF.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ctcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctcf/meta.yaml>`_

   Genomic coordinates of CTCF binding sites\, with strand orientation \(directionality of binding\). Position weight matrices \(PWMs\) from JASPAR\, HOCOMOCO\, CIS\-BP\, CTCFBSDB\, SwissRegulon\, Jolma 2013\, were used to uniformly predict CTCF binding sites using FIMO \(default settings\) on human \(hg18\, hg19\, hg38\, T2T\) and mouse \(mm9\, mm10\, mm39\) genome assemblies. Extra columns include motif\/PWM name \(e.g.\, MA0139.1\)\, score\, p\-value\, q\-value\, and the motif sequence. It is recommended to filter FIMO\-predicted sites by 1e\-6 p\-value threshold instead of using the default 1e\-4 threshold. Experimentally obtained CTCF\-bound cis\-regulatory elements from ENCODE SCREEN and predicted CTCF sites from CTCFBSDB are also included. Selected data are lifted over from a different genome assembly as we demonstrated liftOver is a viable option to obtain CTCF coordinates in different genome assemblies. CTCF sites obtained using JASPAR\'s MA0139.1 PWM and filtered at 1e\-6 p\-value threshold are recommended.


.. conda:package:: bioconductor-ctcf

   |downloads_bioconductor-ctcf| |docker_bioconductor-ctcf|

   :versions:
      
      

      ``0.99.13-0``,  ``0.99.11-2``,  ``0.99.11-1``,  ``0.99.11-0``,  ``0.99.9-0``,  ``0.99.4-1``,  ``0.99.4-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-ctcf

to add into an existing workspace instead, run::

    pixi add bioconductor-ctcf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ctcf

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ctcf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ctcf:<tag>

(see `bioconductor-ctcf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ctcf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctcf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctcf
   :alt:   (downloads)
.. |docker_bioconductor-ctcf| image:: https://quay.io/repository/biocontainers/bioconductor-ctcf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctcf
.. _`bioconductor-ctcf/tags`: https://quay.io/repository/biocontainers/bioconductor-ctcf?tab=tags


.. raw:: html

   <script>
      var package = "bioconductor-ctcf";
      var versions = ["0.99.13","0.99.11","0.99.11","0.99.11","0.99.9"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_bioconductor-ctcf"></div>
   <div style="width: 100%" id="platform_plot_bioconductor-ctcf"></div>
   <div style="width: 100%" id="cdf_plot_bioconductor-ctcf"></div>



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
         
            // Build cdf plot for bioconductor-ctcf
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-ctcf/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_bioconductor-ctcf', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for bioconductor-ctcf
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-ctcf/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_bioconductor-ctcf', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for bioconductor-ctcf
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/bioconductor-ctcf/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_bioconductor-ctcf', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctcf/README.html