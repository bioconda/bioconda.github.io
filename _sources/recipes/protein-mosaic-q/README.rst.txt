:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'protein-mosaic-q'
.. highlight: bash

protein-mosaic-q
================

.. conda:recipe:: protein-mosaic-q
   :replaces_section_title:
   :noindex:

   Calculate the Mosaic Q descriptor\, an amino acid clustering trait in protein structure

   :homepage: https://proteins-mosaic-q.org
   :developer docs: https://github.com/UPO-Sevilla-Fco-Javier-Lobo-Cabrera/mosaicq
   :license: MIT / MIT
   :recipe: /`protein-mosaic-q <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protein-mosaic-q>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protein-mosaic-q/meta.yaml>`_

   protein\-mosaic\-q calculates the Mosaic Q and Q\_alt descriptors\, which
   capture a proposed conserved structural trait in protein structure\: aside from 
   the hydrophobic core\, amino acids tend to cluster in 3D space according to their chemical
   family \(polar\, acidic\, basic\, special\)\, forming groups of approximately 8 residues. 
   The evidence for this regularity comes from direct analysis of \>160\,000 X\-ray determined 
   entries in the PDB \(Q descriptor\)\, stochastic simulations\, and visual inspection of hundreds
   of structures in collaboration with independent observers across recognized citizen science
   platforms.


   Resources\:
   \- Project website\: https\:\/\/proteins\-mosaic\-q.org
   \- bio.tools\: https\:\/\/bio.tools\/protein\-mosaic\-q
   \- Updated manuscript\: https\:\/\/github.com\/UPO\-Sevilla\-Fco\-Javier\-Lobo\-Cabrera\/clustering\_trait\_proteins\/blob\/main\/Manuscript\_and\_Supplementary\_Materials\_v4.pdf
   \- Preprint\: https\:\/\/www.biorxiv.org\/content\/10.1101\/500025v1.full
   \- FAIRsharing\: https\:\/\/fairsharing.org\/8206
   \- SciStarter\: https\:\/\/scistarter.org\/proteins\-mosaic\-q\-project
   \- EU Citizen Science\: https\:\/\/citizenscience.eu\/project\/686
   \- Observatorio Ciencia Ciudadana \(Spain\)\: https\:\/\/ciencia\-ciudadana.es\/project\/392
   \- HuggingFace Space\: https\:\/\/huggingface.co\/spaces\/ProteinsMosaicQProject\/proteins\-mosaic\-q
   \- Dataset\: https\:\/\/huggingface.co\/ProteinsMosaicQ\/datasets
   \- Collaborative repository\: https\:\/\/proteins\-mosaic\-q.org\/repository\/



.. conda:package:: protein-mosaic-q

   |downloads_protein-mosaic-q| |docker_protein-mosaic-q|

   :versions:
      
      

      ``0.3.3-0``

      

   
   :depends on biopython: ``>=1.80``
   :depends on python: ``>=3.9``

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

    pixi global install protein-mosaic-q

to add into an existing workspace instead, run::

    pixi add protein-mosaic-q

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install protein-mosaic-q

Alternatively, to install into a new environment, run::

    conda create -n envname protein-mosaic-q

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/protein-mosaic-q:<tag>

(see `protein-mosaic-q/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_protein-mosaic-q| image:: https://img.shields.io/conda/dn/bioconda/protein-mosaic-q.svg?style=flat
   :target: https://anaconda.org/bioconda/protein-mosaic-q
   :alt:   (downloads)
.. |docker_protein-mosaic-q| image:: https://quay.io/repository/biocontainers/protein-mosaic-q/status
   :target: https://quay.io/repository/biocontainers/protein-mosaic-q
.. _`protein-mosaic-q/tags`: https://quay.io/repository/biocontainers/protein-mosaic-q?tab=tags


.. raw:: html

   <script>
      var package = "protein-mosaic-q";
      var versions = ["0.3.3"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_protein-mosaic-q"></div>
   <div style="width: 100%" id="platform_plot_protein-mosaic-q"></div>
   <div style="width: 100%" id="cdf_plot_protein-mosaic-q"></div>



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
         
            // Build cdf plot for protein-mosaic-q
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/protein-mosaic-q/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_protein-mosaic-q', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for protein-mosaic-q
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/protein-mosaic-q/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_protein-mosaic-q', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for protein-mosaic-q
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/protein-mosaic-q/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_protein-mosaic-q', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/protein-mosaic-q/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/protein-mosaic-q/README.html