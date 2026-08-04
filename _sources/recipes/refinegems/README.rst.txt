:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refinegems'
.. highlight: bash

refinegems
==========

.. conda:recipe:: refinegems
   :replaces_section_title:
   :noindex:

   Python package for curation of genome\-scale metabolic models

   :homepage: https://github.com/draeger-lab/refinegems
   :documentation: https://refinegems.readthedocs.io/en/latest/
   
   :license: MIT
   :recipe: /`refinegems <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refinegems>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refinegems/meta.yaml>`_
   :links: doi: :doi:`10.3389/fbinf.2023.1214074`

   refineGEMs helps with curation\, analysis\, and refinement of genome\-scale
   metabolic models\, including model statistics\, gap\-filling workflows\,
   media handling\, SBO annotations\, and related systems biology utilities.



.. conda:package:: refinegems

   |downloads_refinegems| |docker_refinegems|

   :versions:
      
      

      ``2.0.0b3-0``

      

   
   :depends on biopython: ``>=1.79``
   :depends on bioservices: ``>=1.11.2``
   :depends on click: ``>=8.1.3``
   :depends on cloup: ``>=3.0.5``
   :depends on cobra: ``>=0.28.0``
   :depends on depinfo: ``>=1.7.0``
   :depends on gffutils: ``>=0.10.1``
   :depends on ipywidgets: 
   :depends on markupsafe: ``>=2.0.1``
   :depends on matplotlib-base: ``>=3.8.2``
   :depends on memote: ``>=0.17.0``
   :depends on multiprocess: ``>=0.70.16``
   :depends on numpy: ``>=2.0``
   :depends on pandas: ``>=2.2.2``
   :depends on python: ``>=3.10,<3.12``
   :depends on pyyaml: ``>=6.0.1``
   :depends on ratelimit: ``>=2.2.1``
   :depends on requests: ``>=2.32.4``
   :depends on seaborn: ``>=0.12.2``
   :depends on sortedcontainers: ``>=2.4.0``
   :depends on sqlalchemy: ``>=2.0.0``
   :depends on tqdm: ``>=4.66.1``
   :depends on upsetplot: ``>=0.9.0``
   :depends on venn: ``>=0.1.3``
   :depends on xmltodict: 
   :depends on z3-solver: ``>=4.13.0.0``

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

    pixi global install refinegems

to add into an existing workspace instead, run::

    pixi add refinegems

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install refinegems

Alternatively, to install into a new environment, run::

    conda create -n envname refinegems

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/refinegems:<tag>

(see `refinegems/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_refinegems| image:: https://img.shields.io/conda/dn/bioconda/refinegems.svg?style=flat
   :target: https://anaconda.org/bioconda/refinegems
   :alt:   (downloads)
.. |docker_refinegems| image:: https://quay.io/repository/biocontainers/refinegems/status
   :target: https://quay.io/repository/biocontainers/refinegems
.. _`refinegems/tags`: https://quay.io/repository/biocontainers/refinegems?tab=tags


.. raw:: html

   <script>
      var package = "refinegems";
      var versions = ["2.0.0b3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_refinegems"></div>
   <div style="width: 100%" id="platform_plot_refinegems"></div>
   <div style="width: 100%" id="cdf_plot_refinegems"></div>



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
         
            // Build cdf plot for refinegems
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/refinegems/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_refinegems', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for refinegems
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/refinegems/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_refinegems', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for refinegems
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/refinegems/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_refinegems', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refinegems/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refinegems/README.html