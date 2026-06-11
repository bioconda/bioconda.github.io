:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metasmash'
.. highlight: bash

metasmash
=========

.. conda:recipe:: metasmash
   :replaces_section_title:
   :noindex:

   metaSMASH \- scalable metagenome\-scale BGC mining\, a fork of antiSMASH.

   :homepage: https://github.com/canerbagci/metasmash
   :documentation: https://github.com/canerbagci/metasmash#readme
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`metasmash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasmash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasmash/meta.yaml>`_

   metaSMASH is a fork of antiSMASH that scales biosynthetic gene cluster
   mining to metagenome\-scale inputs with bounded memory usage.



.. conda:package:: metasmash

   |downloads_metasmash| |docker_metasmash|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on bcbio-gff: ``0.7.1``
   :depends on biopython: ``1.81``
   :depends on blast: 
   :depends on brawn: ``1.0.2``
   :depends on diamond: ``>=2.1.21``
   :depends on fasttree: 
   :depends on helperlibs: ``0.2.1``
   :depends on hmmer: 
   :depends on hmmer2: 
   :depends on jinja2: ``3.1.6``
   :depends on joblib: ``1.4.2``
   :depends on jsonschema: ``4.25.1``
   :depends on libsass: ``0.23.0``
   :depends on markupsafe: ``3.0.2``
   :depends on matplotlib-base: ``3.10.1``
   :depends on moods: ``1.9.4.2``
   :depends on nrpys: ``0.1.1``
   :depends on numpy: ``2.2.5``
   :depends on orjson: ``3.10.16``
   :depends on prodigal: 
   :depends on python: ``>=3.11``
   :depends on scikit-learn: ``1.6.1``
   :depends on scipy: ``1.15.2``

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

    pixi global install metasmash

to add into an existing workspace instead, run::

    pixi add metasmash

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metasmash

Alternatively, to install into a new environment, run::

    conda create -n envname metasmash

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metasmash:<tag>

(see `metasmash/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metasmash| image:: https://img.shields.io/conda/dn/bioconda/metasmash.svg?style=flat
   :target: https://anaconda.org/bioconda/metasmash
   :alt:   (downloads)
.. |docker_metasmash| image:: https://quay.io/repository/biocontainers/metasmash/status
   :target: https://quay.io/repository/biocontainers/metasmash
.. _`metasmash/tags`: https://quay.io/repository/biocontainers/metasmash?tab=tags


.. raw:: html

   <script>
      var package = "metasmash";
      var versions = ["0.1.3","0.1.2","0.1.1","0.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_metasmash"></div>
   <div style="width: 100%" id="platform_plot_metasmash"></div>
   <div style="width: 100%" id="cdf_plot_metasmash"></div>



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
         
            // Build cdf plot for metasmash
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metasmash/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_metasmash', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for metasmash
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metasmash/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_metasmash', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for metasmash
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/metasmash/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_metasmash', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metasmash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metasmash/README.html