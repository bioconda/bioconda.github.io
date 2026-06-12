:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'polystest'
.. highlight: bash

polystest
=========

.. conda:recipe:: polystest
   :replaces_section_title:
   :noindex:

   Interactive tool for statistical testing\, data browsing and interactive visualization of quantitative omics data

   :homepage: https://bitbucket.org/veitveit/polystest/src/master/
   :license: GPL / GPL (>=2)
   :recipe: /`polystest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polystest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polystest/meta.yaml>`_
   :links: biotools: :biotools:`polystest`, doi: :doi:`10.1074/mcp.RA119.001777`

   PolySTest is a web service \(shiny app\) and command\-line tool for statistical testing\, data browsing and interactive visualization of quantitative omics data. It contains multiple statistical tests and a new method to incorporate missing values. 



.. conda:package:: polystest

   |downloads_polystest| |docker_polystest|

   :versions:
      
      

      ``1.3.4-0``,  ``1.3.2-0``,  ``1.2.2-0``,  ``1.2-0``,  ``1.1-2``,  ``1.01-1``,  ``1.1-1``,  ``1.1-0``,  ``1.01-0``

      

   
   :depends on bioconductor-limma: 
   :depends on bioconductor-qvalue: 
   :depends on r-base: 
   :depends on r-circlize: 
   :depends on r-dt: 
   :depends on r-fdrtool: 
   :depends on r-gplots: 
   :depends on r-heatmaply: 
   :depends on r-knitr: 
   :depends on r-matrixstats: 
   :depends on r-readxl: 
   :depends on r-shiny: 
   :depends on r-shinybs: 
   :depends on r-shinydashboard: 
   :depends on r-upsetr: 
   :depends on r-yaml: 

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

    pixi global install polystest

to add into an existing workspace instead, run::

    pixi add polystest

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install polystest

Alternatively, to install into a new environment, run::

    conda create -n envname polystest

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/polystest:<tag>

(see `polystest/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_polystest| image:: https://img.shields.io/conda/dn/bioconda/polystest.svg?style=flat
   :target: https://anaconda.org/bioconda/polystest
   :alt:   (downloads)
.. |docker_polystest| image:: https://quay.io/repository/biocontainers/polystest/status
   :target: https://quay.io/repository/biocontainers/polystest
.. _`polystest/tags`: https://quay.io/repository/biocontainers/polystest?tab=tags


.. raw:: html

   <script>
      var package = "polystest";
      var versions = ["1.3.4","1.3.2","1.2.2","1.2","1.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_polystest"></div>
   <div style="width: 100%" id="platform_plot_polystest"></div>
   <div style="width: 100%" id="cdf_plot_polystest"></div>



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
         
            // Build cdf plot for polystest
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/polystest/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_polystest', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for polystest
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/polystest/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_polystest', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for polystest
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/polystest/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_polystest', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
PolySTest is available as shiny app via run\_polystest\_app.R or as command\-line tool\: runPolySTestCLI.R



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/polystest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/polystest/README.html