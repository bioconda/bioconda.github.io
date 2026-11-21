:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'membrane-rule-audit'
.. highlight: bash

membrane-rule-audit
===================

.. conda:recipe:: membrane-rule-audit
   :replaces_section_title:
   :noindex:

   Audit biological patterns in protein variant scores

   :homepage: https://github.com/btrinh0/Protein-Topology
   :documentation: https://github.com/btrinh0/Protein-Topology/blob/v0.1.1/project6_membrane_variant_topology_audit/tools/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`membrane-rule-audit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/membrane-rule-audit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/membrane-rule-audit/meta.yaml>`_

   Analyze existing protein variant scores with supplied biological
   annotations. Includes positive\-inside\, disulfide\, proline\, and refinement
   command interfaces. The optional SeqRecord integration additionally
   requires Biopython\, which can be installed separately.



.. conda:package:: membrane-rule-audit

   |downloads_membrane-rule-audit| |docker_membrane-rule-audit|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on numpy: ``>=1.23``
   :depends on python: ``>=3.10``

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

    pixi global install membrane-rule-audit

to add into an existing workspace instead, run::

    pixi add membrane-rule-audit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install membrane-rule-audit

Alternatively, to install into a new environment, run::

    conda create -n envname membrane-rule-audit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/membrane-rule-audit:<tag>

(see `membrane-rule-audit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_membrane-rule-audit| image:: https://img.shields.io/conda/dn/bioconda/membrane-rule-audit.svg?style=flat
   :target: https://anaconda.org/bioconda/membrane-rule-audit
   :alt:   (downloads)
.. |docker_membrane-rule-audit| image:: https://quay.io/repository/biocontainers/membrane-rule-audit/status
   :target: https://quay.io/repository/biocontainers/membrane-rule-audit
.. _`membrane-rule-audit/tags`: https://quay.io/repository/biocontainers/membrane-rule-audit?tab=tags


.. raw:: html

   <script>
      var package = "membrane-rule-audit";
      var versions = ["0.1.1"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_membrane-rule-audit"></div>
   <div style="width: 100%" id="platform_plot_membrane-rule-audit"></div>
   <div style="width: 100%" id="cdf_plot_membrane-rule-audit"></div>



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
         
            // Build cdf plot for membrane-rule-audit
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/membrane-rule-audit/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_membrane-rule-audit', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for membrane-rule-audit
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/membrane-rule-audit/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_membrane-rule-audit', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for membrane-rule-audit
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/membrane-rule-audit/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_membrane-rule-audit', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/membrane-rule-audit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/membrane-rule-audit/README.html