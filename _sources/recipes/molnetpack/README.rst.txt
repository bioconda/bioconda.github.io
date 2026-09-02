:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'molnetpack'
.. highlight: bash

molnetpack
==========

.. conda:recipe:: molnetpack
   :replaces_section_title:
   :noindex:

   3DMolMS \- tandem mass spectrum prediction from 3D molecular conformations

   :homepage: https://github.com/JosieHong/3DMolMS
   :documentation: https://3dmolms.readthedocs.io/
   
   :license: CC-BY-NC-SA-4.0
   :recipe: /`molnetpack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/molnetpack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/molnetpack/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad354`

   3DMolMS predicts MS\/MS spectra from three\-dimensional molecular
   conformations using a deep neural network\, with qTOF and Orbitrap models.
   It also predicts retention time and collision cross section\, and supports
   feature extraction and model training.

   The PyPI distribution is named molnetpack\; the software is 3DMolMS.

   Pretrained checkpoints are downloaded on demand by the pred\_\* methods.
   Deployments needing reproducibility or offline operation should pass an
   explicit checkpoint path instead. Checkpoints are version\-specific\: 1.4.0
   retrained the QTOF\, Orbitrap\, RT and CCS models\, and loading refuses any
   checkpoint whose embedded config does not match.

   NOTE\: MolNet.load\_data accepts a .pkl input deserialised with pickle.load\,
   which permits arbitrary code execution. Do not pass untrusted .pkl files.



.. conda:package:: molnetpack

   |downloads_molnetpack| |docker_molnetpack|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends on matplotlib-base: 
   :depends on molmass: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pillow: 
   :depends on platformdirs: 
   :depends on pyteomics: 
   :depends on python: ``>=3.10``
   :depends on pytorch: 
   :depends on pyyaml: 
   :depends on rdkit: 
   :depends on requests: 
   :depends on scikit-learn: 
   :depends on tqdm: 

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

    pixi global install molnetpack

to add into an existing workspace instead, run::

    pixi add molnetpack

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install molnetpack

Alternatively, to install into a new environment, run::

    conda create -n envname molnetpack

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/molnetpack:<tag>

(see `molnetpack/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_molnetpack| image:: https://img.shields.io/conda/dn/bioconda/molnetpack.svg?style=flat
   :target: https://anaconda.org/bioconda/molnetpack
   :alt:   (downloads)
.. |docker_molnetpack| image:: https://quay.io/repository/biocontainers/molnetpack/status
   :target: https://quay.io/repository/biocontainers/molnetpack
.. _`molnetpack/tags`: https://quay.io/repository/biocontainers/molnetpack?tab=tags


.. raw:: html

   <script>
      var package = "molnetpack";
      var versions = ["1.4.0"];
   </script>

.. rubric:: Download stats

.. raw:: html
    
   <div style="width: 100%" id="download_plot_molnetpack"></div>
   <div style="width: 100%" id="platform_plot_molnetpack"></div>
   <div style="width: 100%" id="cdf_plot_molnetpack"></div>



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
         
            // Build cdf plot for molnetpack
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
               const point_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/molnetpack/cdf.json`)
               if (!point_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${point_data_resp.status}.`);
               }
               const single_point = await point_data_resp.json();
    
               cdf_spec.data.values = cdf_plot_data;
               cdf_spec.data.values.push(single_point.pop());
               vegaEmbed('#cdf_plot_molnetpack', cdf_spec);
            } catch (err) {
               console.error("An error occurred while building CDF plot: ", err)
            }
    
            // Build download plot for molnetpack
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/versions.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const version_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/molnetpack/versions.json`)
               if (!version_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${version_data_resp.status}.`);
               }
               const plot_data = await version_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#download_plot_molnetpack', spec);
            } catch (err) {
               console.error("An error occurred while building downloads plot: ", err)
            }
   
            // Build platform download plot for molnetpack
            try {
               const spec_resp = await fetch("https://raw.githubusercontent.com/bioconda/bioconda-plots/main/resources/platforms.vl.json")
               if (!spec_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${spec_resp.status}.`);
               }
               const spec = await spec_resp.json();
               const platform_data_resp = await fetch(`https://raw.githubusercontent.com/bioconda/bioconda-plots/main/plots/molnetpack/platforms.json`)
               if (!platform_data_resp.ok) {
                   throw new Error(`Fetching failed with HTTP code ${platform_data_resp.status}.`);
               }
               const plot_data = await platform_data_resp.json();
               spec.data.values = plot_data;
               vegaEmbed('#platform_plot_molnetpack', spec);
            } catch (err) {
               console.error("An error occurred while building platform downloads plot: ", err)
            }
         
      }
   </script>



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/molnetpack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/molnetpack/README.html