:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vsclust'
.. highlight: bash

vsclust
=======

.. conda:recipe:: vsclust
   :replaces_section_title:
   :noindex:

   Interactive tool for statistical testing\, data browsing and interactive visualization of quantitative omics data

   :homepage: https://bitbucket.org/veitveit/vsclust/src/master/
   :license: GPL / GPL (>=2)
   :recipe: /`vsclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsclust/meta.yaml>`_
   :links: biotools: :biotools:`vsclust`, doi: :doi:`10.1093/bioinformatics/bty224`

   VSClust is a web service \(shiny app\) and command\-line tool for statistical testing\, clustering and interactive visualization of quantitative omics data. Its variance\-sensitive clustering algorithm improves identification of co\-regulated features in noisy data with replicates



.. conda:package:: vsclust

   |downloads_vsclust| |docker_vsclust|

   :versions:
      
      

      ``0.91-0``,  ``0.87-0``

      

   
   :depends on bioconductor-clusterprofiler: ``4.2.0.*``
   :depends on bioconductor-limma: 
   :depends on bioconductor-mfuzz: 
   :depends on bioconductor-qvalue: 
   :depends on r-base: ``>=4.1,<4.2.0a0``
   :depends on r-data.table: 
   :depends on r-matrixstats: 
   :depends on r-parallelly: 
   :depends on r-readxl: 
   :depends on r-shinyjs: 
   :depends on r-shinythemes: 
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

    pixi global install vsclust

to add into an existing workspace instead, run::

    pixi add vsclust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vsclust

Alternatively, to install into a new environment, run::

    conda create -n envname vsclust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vsclust:<tag>

(see `vsclust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vsclust| image:: https://img.shields.io/conda/dn/bioconda/vsclust.svg?style=flat
   :target: https://anaconda.org/bioconda/vsclust
   :alt:   (downloads)
.. |docker_vsclust| image:: https://quay.io/repository/biocontainers/vsclust/status
   :target: https://quay.io/repository/biocontainers/vsclust
.. _`vsclust/tags`: https://quay.io/repository/biocontainers/vsclust?tab=tags


.. raw:: html

   <script>
      var package = "vsclust";
      var versions = ["0.91","0.87"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_vsclust"></div>
   <div style="width: 100%" id="platform_plot_vsclust"></div>
   <div style="width: 100%" id="cdf_plot_vsclust"></div>



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
         
            // Build cdf plot for vsclust
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vsclust/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_vsclust', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for vsclust
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vsclust/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_vsclust', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for vsclust
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/vsclust/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_vsclust', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>


Notes
-----
The shiny app can be run with the run\_app.sh command. Alternative\, a command\-line version is available\: runVSClust.R



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vsclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vsclust/README.html