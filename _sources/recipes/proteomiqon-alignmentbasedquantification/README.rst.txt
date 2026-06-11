:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-alignmentbasedquantification'
.. highlight: bash

proteomiqon-alignmentbasedquantification
========================================

.. conda:recipe:: proteomiqon-alignmentbasedquantification
   :replaces_section_title:
   :noindex:

   Given an MS run in the mzLite or mzml format and a list of a list of peptides deduced by alignment\, this tool iterates accross all and performs an XIC extration and quantification in similar to the PSMbasedQuantification tool.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/AlignmentBasedQuantification.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-alignmentbasedquantification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-alignmentbasedquantification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-alignmentbasedquantification/meta.yaml>`_

   Given an MS run in the mzLite or mzml format and a list of a list of peptides deduced by alignment.\, this tool iterates accross all and performs an XIC extration and quantification in similar to the PSMbasedQuantification tool. 
   One of the drawbacks of data\-dependent acquisition is the stochastic nature of peptide ion selection for MSMS fragmentation as a prerequisite for peptide identification and quantification. A way to overcome this drawback is the transfer of identified ions from one run to another using the assumption that the run is merely lacking a successful MSMS scan\, but still containing the peptide itself. 
   For each peptide ion the tools uses the scan time prediction derived using the quant based alignment tool to extract a XIC. To refine the derived scan time estimate\, we then locally align the extracted XIC to the XIC of the aligned peptide using dynamic time warping. 
   Using this scan time estimate\, we use wavelet based peak detection techniques to identify all peaks present in the XIC and select the most probable peak as our target for quantification. Using parameter estimation techniques we subsequently use peak fitting to fit a set of two gaussian models to the detected peak\, from whom the one with the better fit is selected. This allows us not only to report how well the signal fitted to the theoretical expected peak shape but also to obtain accurate estimates for the peak area\, our estimator for peptide ion abundance.



.. conda:package:: proteomiqon-alignmentbasedquantification

   |downloads_proteomiqon-alignmentbasedquantification| |docker_proteomiqon-alignmentbasedquantification|

   :versions:
      
      

      ``0.0.2-0``

      

   
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

    pixi global install proteomiqon-alignmentbasedquantification

to add into an existing workspace instead, run::

    pixi add proteomiqon-alignmentbasedquantification

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install proteomiqon-alignmentbasedquantification

Alternatively, to install into a new environment, run::

    conda create -n envname proteomiqon-alignmentbasedquantification

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/proteomiqon-alignmentbasedquantification:<tag>

(see `proteomiqon-alignmentbasedquantification/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_proteomiqon-alignmentbasedquantification| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-alignmentbasedquantification.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-alignmentbasedquantification
   :alt:   (downloads)
.. |docker_proteomiqon-alignmentbasedquantification| image:: https://quay.io/repository/biocontainers/proteomiqon-alignmentbasedquantification/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-alignmentbasedquantification
.. _`proteomiqon-alignmentbasedquantification/tags`: https://quay.io/repository/biocontainers/proteomiqon-alignmentbasedquantification?tab=tags


.. raw:: html

   <script>
      var package = "proteomiqon-alignmentbasedquantification";
      var versions = ["0.0.2"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_proteomiqon-alignmentbasedquantification"></div>
   <div style="width: 100%" id="platform_plot_proteomiqon-alignmentbasedquantification"></div>
   <div style="width: 100%" id="cdf_plot_proteomiqon-alignmentbasedquantification"></div>



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
         
            // Build cdf plot for proteomiqon-alignmentbasedquantification
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/proteomiqon-alignmentbasedquantification/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_proteomiqon-alignmentbasedquantification', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for proteomiqon-alignmentbasedquantification
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/proteomiqon-alignmentbasedquantification/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_proteomiqon-alignmentbasedquantification', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for proteomiqon-alignmentbasedquantification
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/proteomiqon-alignmentbasedquantification/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_proteomiqon-alignmentbasedquantification', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-alignmentbasedquantification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-alignmentbasedquantification/README.html