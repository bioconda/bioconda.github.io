:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beacon2-ri-tools'
.. highlight: bash

beacon2-ri-tools
================

.. conda:recipe:: beacon2-ri-tools
   :replaces_section_title:
   :noindex:

   Package of tools designed to simplify the population of a Beacon v2 mongoDB database

   :homepage: https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main
   :license: Apache-2.0
   :recipe: /`beacon2-ri-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beacon2-ri-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beacon2-ri-tools/meta.yaml>`_

   Beacon2 RI Tools v2 is a software created with the main goal of generating BFF data from .csv or .vcf \(and probably more types of datafiles in the future\). This is based on the first beacon ri tools. Currently\, the supported input formats are VCF\, CSV\, and Phenopackets. These formats are converted to BFF \(Beacon Friendly Format JSON\, following Beacon v2 official specifications\) and inserted into a Beacon database.


.. conda:package:: beacon2-ri-tools

   |downloads_beacon2-ri-tools| |docker_beacon2-ri-tools|

   :versions:
      
      

      ``2.1.2-0``,  ``2.1.1-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.0-0``

      

   
   :depends on annotated-types: ``>=0.6.0``
   :depends on certifi: ``>=2023.7.22``
   :depends on charset-normalizer: ``>=3.3.1``
   :depends on coverage: ``>=7.6.0``
   :depends on cyvcf2: ``>=0.30.28``
   :depends on ga4gh.vrs: ``>=2.3.1``
   :depends on openpyxl: ``>=3.1.2``
   :depends on pandas: ``>=2.1.2``
   :depends on pydantic: ``>=2.6.4``
   :depends on pydantic-core: ``>=2.16.3``
   :depends on pymongo: ``>=4.6.1``
   :depends on python: ``>=3.13,<3.14.0a0``
   :depends on python-dateutil: ``>=2.8.2``
   :depends on pyyaml: ``>=6.0.1``
   :depends on refgendetector: ``>=3.0.4``
   :depends on rfc3339-validator: ``>=0.1.4``
   :depends on tqdm: ``>=4.66.1``
   :depends on typing_extensions: ``>=4.11.0``

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

    pixi global install beacon2-ri-tools

to add into an existing workspace instead, run::

    pixi add beacon2-ri-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install beacon2-ri-tools

Alternatively, to install into a new environment, run::

    conda create -n envname beacon2-ri-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/beacon2-ri-tools:<tag>

(see `beacon2-ri-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_beacon2-ri-tools| image:: https://img.shields.io/conda/dn/bioconda/beacon2-ri-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/beacon2-ri-tools
   :alt:   (downloads)
.. |docker_beacon2-ri-tools| image:: https://quay.io/repository/biocontainers/beacon2-ri-tools/status
   :target: https://quay.io/repository/biocontainers/beacon2-ri-tools
.. _`beacon2-ri-tools/tags`: https://quay.io/repository/biocontainers/beacon2-ri-tools?tab=tags


.. raw:: html

   <script>
      var package = "beacon2-ri-tools";
      var versions = ["2.1.2","2.1.1","2.0.6","2.0.5","2.0.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_beacon2-ri-tools"></div>
   <div style="width: 100%" id="platform_plot_beacon2-ri-tools"></div>
   <div style="width: 100%" id="cdf_plot_beacon2-ri-tools"></div>



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
         
            // Build cdf plot for beacon2-ri-tools
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/beacon2-ri-tools/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_beacon2-ri-tools', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for beacon2-ri-tools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/beacon2-ri-tools/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_beacon2-ri-tools', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for beacon2-ri-tools
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/beacon2-ri-tools/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_beacon2-ri-tools', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beacon2-ri-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beacon2-ri-tools/README.html