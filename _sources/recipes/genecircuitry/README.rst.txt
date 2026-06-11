:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genecircuitry'
.. highlight: bash

genecircuitry
=============

.. conda:recipe:: genecircuitry
   :replaces_section_title:
   :noindex:

   GeneCircuitry\: TRN analysis from single\-cell data \(Scanpy\, CellOracle\, Hotspot\)

   :homepage: https://github.com/samuelecancellieri/genecircuitry
   :documentation: https://github.com/samuelecancellieri/genecircuitry/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`genecircuitry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genecircuitry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genecircuitry/meta.yaml>`_
   :links: pypi: :pypi:`genecircuitry`

   A modular\, checkpoint\-enabled pipeline for TRN analysis from
   single\-cell RNA\-seq data. Integrates Scanpy for preprocessing and
   clustering\, CellOracle for GRN inference\, and Hotspot for embedding\-aware
   gene modules identification. Provides an HTML\/PDF reporting layer
   and a standalone \`\`genecircuitry\`\` CLI entry point.



.. conda:package:: genecircuitry

   |downloads_genecircuitry| |docker_genecircuitry|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.4-0``

      

   
   :depends on adjusttext: ``>=0.7.3``
   :depends on anndata: ``>=0.8.0``
   :depends on fa2_modified: 
   :depends on genomepy: ``>=0.8.4``
   :depends on gimmemotifs: ``>=0.14.4``
   :depends on goatools: 
   :depends on gseapy: 
   :depends on h5py: ``>=3.1.0``
   :depends on igraph: ``>=0.10.1``
   :depends on joblib: 
   :depends on jupyter: 
   :depends on leidenalg: 
   :depends on louvain: 
   :depends on matplotlib-base: ``>=3.6.3``
   :depends on networkx: ``>=2.6.0``
   :depends on numba: ``>=0.50.1``
   :depends on numpy: ``>=1.20``
   :depends on pandas: ``>=1.3.0``
   :depends on pyarrow: ``>=0.17``
   :depends on python: ``>=3.9,<3.11``
   :depends on scanpy: ``>=1.9.0``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on tqdm: ``>=4.45``
   :depends on umap-learn: 
   :depends on velocyto.py: ``>=0.17``
   :depends on weasyprint: 

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

    pixi global install genecircuitry

to add into an existing workspace instead, run::

    pixi add genecircuitry

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genecircuitry

Alternatively, to install into a new environment, run::

    conda create -n envname genecircuitry

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genecircuitry:<tag>

(see `genecircuitry/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genecircuitry| image:: https://img.shields.io/conda/dn/bioconda/genecircuitry.svg?style=flat
   :target: https://anaconda.org/bioconda/genecircuitry
   :alt:   (downloads)
.. |docker_genecircuitry| image:: https://quay.io/repository/biocontainers/genecircuitry/status
   :target: https://quay.io/repository/biocontainers/genecircuitry
.. _`genecircuitry/tags`: https://quay.io/repository/biocontainers/genecircuitry?tab=tags


.. raw:: html

   <script>
      var package = "genecircuitry";
      var versions = ["0.1.7","0.1.4"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_genecircuitry"></div>
   <div style="width: 100%" id="platform_plot_genecircuitry"></div>
   <div style="width: 100%" id="cdf_plot_genecircuitry"></div>



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
         
            // Build cdf plot for genecircuitry
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/genecircuitry/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_genecircuitry', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for genecircuitry
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/genecircuitry/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_genecircuitry', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for genecircuitry
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/genecircuitry/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_genecircuitry', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genecircuitry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genecircuitry/README.html