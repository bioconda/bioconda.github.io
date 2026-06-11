:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-alignmentbasedquantstatistics'
.. highlight: bash

proteomiqon-alignmentbasedquantstatistics
=========================================

.. conda:recipe:: proteomiqon-alignmentbasedquantstatistics
   :replaces_section_title:
   :noindex:

   The tool ProteomIQon.AlignmentBasedQuantStatistics scores peptide ion quantifications obtained through alignment between runs.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/AlignmentBasedQuantStatistics.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-alignmentbasedquantstatistics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-alignmentbasedquantstatistics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-alignmentbasedquantstatistics/meta.yaml>`_

   MS\-based shotgun proteomics estimates protein abundances using a proxy\: peptides. 
   Due to the acquisition method for MS2\, not every peptide ion present can be identified in every run. One approach to mitigate this problem is to 
   align information obtained from similar runs to the current run\, therefore getting more quantifications. This tool scores the quantifications 
   obtained through alignment based on peak and run properties to obtain a measurement of reliability for the alignments.



.. conda:package:: proteomiqon-alignmentbasedquantstatistics

   |downloads_proteomiqon-alignmentbasedquantstatistics| |docker_proteomiqon-alignmentbasedquantstatistics|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.1-0``

      

   
   :depends on dotnet-runtime: ``5.0.*``
   :depends on openssl: ``1.1.*``

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

    pixi global install proteomiqon-alignmentbasedquantstatistics

to add into an existing workspace instead, run::

    pixi add proteomiqon-alignmentbasedquantstatistics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install proteomiqon-alignmentbasedquantstatistics

Alternatively, to install into a new environment, run::

    conda create -n envname proteomiqon-alignmentbasedquantstatistics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/proteomiqon-alignmentbasedquantstatistics:<tag>

(see `proteomiqon-alignmentbasedquantstatistics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_proteomiqon-alignmentbasedquantstatistics| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-alignmentbasedquantstatistics.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-alignmentbasedquantstatistics
   :alt:   (downloads)
.. |docker_proteomiqon-alignmentbasedquantstatistics| image:: https://quay.io/repository/biocontainers/proteomiqon-alignmentbasedquantstatistics/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-alignmentbasedquantstatistics
.. _`proteomiqon-alignmentbasedquantstatistics/tags`: https://quay.io/repository/biocontainers/proteomiqon-alignmentbasedquantstatistics?tab=tags


.. raw:: html

   <script>
      var package = "proteomiqon-alignmentbasedquantstatistics";
      var versions = ["0.0.3","0.0.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_proteomiqon-alignmentbasedquantstatistics"></div>
   <div style="width: 100%" id="platform_plot_proteomiqon-alignmentbasedquantstatistics"></div>
   <div style="width: 100%" id="cdf_plot_proteomiqon-alignmentbasedquantstatistics"></div>



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
         
            // Build cdf plot for proteomiqon-alignmentbasedquantstatistics
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/proteomiqon-alignmentbasedquantstatistics/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_proteomiqon-alignmentbasedquantstatistics', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for proteomiqon-alignmentbasedquantstatistics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/proteomiqon-alignmentbasedquantstatistics/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_proteomiqon-alignmentbasedquantstatistics', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for proteomiqon-alignmentbasedquantstatistics
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/proteomiqon-alignmentbasedquantstatistics/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_proteomiqon-alignmentbasedquantstatistics', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-alignmentbasedquantstatistics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-alignmentbasedquantstatistics/README.html