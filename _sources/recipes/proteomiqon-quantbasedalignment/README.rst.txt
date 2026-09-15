:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-quantbasedalignment'
.. highlight: bash

proteomiqon-quantbasedalignment
===============================

.. conda:recipe:: proteomiqon-quantbasedalignment
   :replaces_section_title:
   :noindex:

   QuantBasedAlignment predicts where peptide ions from one run should appear in another run\, enabling their later quantification even when they were not identified there.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/QuantBasedAlignment.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-quantbasedalignment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-quantbasedalignment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-quantbasedalignment/meta.yaml>`_

   In data dependent acquisition the instrument picks the ions it fragments more or less at random. 
   A peptide identified and quantified in one run is therefore often present in another run without ever having been fragmented there\, 
   so that run has no identification and no quantification for it. Run alignment maps the scan time of one run onto another\, 
   so that a later tool can look for the peptide where it should elute. 
   QuantBasedAlignment reads the quantified peptide ions of a target run \(\-i\) and of one or more source runs \(\-ii\). 
   On the peptide ions a source run shares with the target it fits a smoothing spline from source scan times to 
   target scan times\, and with that spline it predicts the scan time of every source peptide ion in the target run.
   AlignmentBasedQuantification then extracts and quantifies the peptide ions at the predicted scan times.



.. conda:package:: proteomiqon-quantbasedalignment

   |downloads_proteomiqon-quantbasedalignment| |docker_proteomiqon-quantbasedalignment|

   :versions:
      
      

      ``0.0.4-0``

      

   
   :depends on dotnet-runtime: ``>=10.0,<11.0``
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

    pixi global install proteomiqon-quantbasedalignment

to add into an existing workspace instead, run::

    pixi add proteomiqon-quantbasedalignment

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install proteomiqon-quantbasedalignment

Alternatively, to install into a new environment, run::

    conda create -n envname proteomiqon-quantbasedalignment

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/proteomiqon-quantbasedalignment:<tag>

(see `proteomiqon-quantbasedalignment/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_proteomiqon-quantbasedalignment| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-quantbasedalignment.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-quantbasedalignment
   :alt:   (downloads)
.. |docker_proteomiqon-quantbasedalignment| image:: https://quay.io/repository/biocontainers/proteomiqon-quantbasedalignment/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-quantbasedalignment
.. _`proteomiqon-quantbasedalignment/tags`: https://quay.io/repository/biocontainers/proteomiqon-quantbasedalignment?tab=tags


.. raw:: html

   <script>
      var package = "proteomiqon-quantbasedalignment";
      var versions = ["0.0.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_proteomiqon-quantbasedalignment"></div>
   <div style="width: 100%" id="platform_plot_proteomiqon-quantbasedalignment"></div>
   <div style="width: 100%" id="cdf_plot_proteomiqon-quantbasedalignment"></div>



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
         
            // Build cdf plot for proteomiqon-quantbasedalignment
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/proteomiqon-quantbasedalignment/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_proteomiqon-quantbasedalignment', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for proteomiqon-quantbasedalignment
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/proteomiqon-quantbasedalignment/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_proteomiqon-quantbasedalignment', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for proteomiqon-quantbasedalignment
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/proteomiqon-quantbasedalignment/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_proteomiqon-quantbasedalignment', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-quantbasedalignment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-quantbasedalignment/README.html