:orphan:  .. only available via index, not via toctree
:nosearch:

.. title:: Package Recipe 'phyloai'
.. highlight: bash

phyloai
=======

.. conda:recipe:: phyloai
   :replaces_section_title:
   :noindex:

   Neural\-network quartet inference and species\-tree reconstruction for protein alignments.

   :homepage: https://github.com/KulyaNikita/PhyloAI
   :documentation: https://github.com/KulyaNikita/PhyloAI#readme
   
   :license: BSD / BSD-2-Clause
   :recipe: /`phyloai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloai/meta.yaml>`_

   PhyloAI reconstructs phylogenetic trees from protein alignments with neural
   networks. ModelDetector selects the substitution model of each alignment\,
   model\-specific networks predict the topology of every quartet of sequences
   from their site pattern frequencies \(computed with Quartet Pattern Counter\)\,
   and the quartets are amalgamated into a species tree with ASTRAQ\, ASTRAL or
   QFM\-FI. PhyloAI also simulates training data with PolyMoSim and trains new
   networks. The pretrained networks are not part of the package\; download them
   with \`phyloai download\-models\` \(about 525 MB\).



.. conda:package:: phyloai

   |downloads_phyloai| |docker_phyloai|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends on astral-tree: ``>=5.7.8``
   :depends on astraq: ``>=0.5.8``
   :depends on biopython: 
   :depends on numpy: 
   :depends on openjdk: ``>=17``
   :depends on polymosim: ``>=1.2.0``
   :depends on python: ``>=3.10``
   :depends on qfm-fi: ``>=2.1.4``
   :depends on quartet-pattern-counter: ``>=1.8,<2``
   :depends on scikit-learn: 
   :depends on tensorflow: ``>=2.15``
   :depends on tf-keras: 

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

    pixi global install phyloai

to add into an existing workspace instead, run::

    pixi add phyloai

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phyloai

Alternatively, to install into a new environment, run::

    conda create -n envname phyloai

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phyloai:<tag>

(see `phyloai/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phyloai| image:: https://img.shields.io/conda/dn/bioconda/phyloai.svg?style=flat
   :target: https://anaconda.org/bioconda/phyloai
   :alt:   (downloads)
.. |docker_phyloai| image:: https://quay.io/repository/biocontainers/phyloai/status
   :target: https://quay.io/repository/biocontainers/phyloai
.. _`phyloai/tags`: https://quay.io/repository/biocontainers/phyloai?tab=tags


.. raw:: html

   <script>
      var package = "phyloai";
      var versions = ["1.1.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_phyloai"></div>
   <div style="width: 100%" id="platform_plot_phyloai"></div>
   <div style="width: 100%" id="cdf_plot_phyloai"></div>



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
         
            // Build cdf plot for phyloai
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/phyloai/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_phyloai', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for phyloai
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/phyloai/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_phyloai', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for phyloai
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/phyloai/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_phyloai', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyloai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyloai/README.html