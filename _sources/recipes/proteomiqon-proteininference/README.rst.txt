:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-proteininference'
.. highlight: bash

proteomiqon-proteininference
============================

.. conda:recipe:: proteomiqon-proteininference
   :replaces_section_title:
   :noindex:

   MS\-based shotgun proteomics estimates protein abundances using a proxy\: peptides. The process of \'Protein Inference\' is concerned with the mapping of identified peptides to the proteins they putatively originated from.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/ProteinInference.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-proteininference <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-proteininference>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-proteininference/meta.yaml>`_

   MS\-based shotgun proteomics estimates protein abundances using a proxy\: peptides. The process of \'Protein Inference\' is concerned with the mapping of identified peptides to
   the proteins they putatively originated from. This process is not as straightforward as one might think at a first glance on the subject\, since the peptide\-to\-protein mapping
   is not necessarily a one\-to\-one relationship but in many cases a one\-to\-many relationship. This is due to the fact that many proteins share peptides with an identical sequence\,
   e.g. two proteins originating from two different splice variants of the same gene. The ProteinInference tool relies on the concepts of protein groups and peptide evidence
   classes.



.. conda:package:: proteomiqon-proteininference

   |downloads_proteomiqon-proteininference| |docker_proteomiqon-proteininference|

   :versions:
      
      

      ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
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

    pixi global install proteomiqon-proteininference

to add into an existing workspace instead, run::

    pixi add proteomiqon-proteininference

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install proteomiqon-proteininference

Alternatively, to install into a new environment, run::

    conda create -n envname proteomiqon-proteininference

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/proteomiqon-proteininference:<tag>

(see `proteomiqon-proteininference/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_proteomiqon-proteininference| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-proteininference.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-proteininference
   :alt:   (downloads)
.. |docker_proteomiqon-proteininference| image:: https://quay.io/repository/biocontainers/proteomiqon-proteininference/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-proteininference
.. _`proteomiqon-proteininference/tags`: https://quay.io/repository/biocontainers/proteomiqon-proteininference?tab=tags


.. raw:: html

   <script>
      var package = "proteomiqon-proteininference";
      var versions = ["0.0.7","0.0.7","0.0.6","0.0.5","0.0.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_proteomiqon-proteininference"></div>
   <div style="width: 100%" id="platform_plot_proteomiqon-proteininference"></div>
   <div style="width: 100%" id="cdf_plot_proteomiqon-proteininference"></div>



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
         
            // Build cdf plot for proteomiqon-proteininference
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/proteomiqon-proteininference/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_proteomiqon-proteininference', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for proteomiqon-proteininference
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/proteomiqon-proteininference/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_proteomiqon-proteininference', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for proteomiqon-proteininference
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/proteomiqon-proteininference/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_proteomiqon-proteininference', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-proteininference/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-proteininference/README.html