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

   A modular\, checkpoint\-enabled pipeline for TRN analysis from
   single\-cell RNA\-seq data. Integrates Scanpy for preprocessing and
   clustering\, CellOracle for GRN inference\, and Hotspot for embedding\-aware
   gene modules identification. Provides an HTML\/PDF reporting layer
   and a standalone \`\`genecircuitry\`\` CLI entry point.



.. conda:package:: genecircuitry

   |downloads_genecircuitry| |docker_genecircuitry|

   :versions:
      
      

      ``0.1.4-0``

      

   
   :depends adjusttext: ``>=0.7.3``
   :depends anndata: ``>=0.8.0``
   :depends fa2_modified: 
   :depends genomepy: ``>=0.8.4``
   :depends gimmemotifs: ``>=0.14.4``
   :depends goatools: 
   :depends gseapy: 
   :depends h5py: ``>=3.1.0``
   :depends igraph: ``>=0.10.1``
   :depends joblib: 
   :depends jupyter: 
   :depends leidenalg: 
   :depends louvain: 
   :depends matplotlib-base: ``>=3.6.3``
   :depends networkx: ``>=2.6.0``
   :depends numba: ``>=0.50.1``
   :depends numpy: ``>=1.20``
   :depends pandas: ``>=1.3.0``
   :depends pyarrow: ``>=0.17``
   :depends python: ``>=3.9,<3.11``
   :depends scanpy: ``>=1.9.0``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends tqdm: ``>=4.45``
   :depends umap-learn: 
   :depends velocyto.py: ``>=0.17``
   :depends weasyprint: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install genecircuitry

   and update with::

      mamba update genecircuitry

  To create a new environment, run::

      mamba create --name myenvname genecircuitry

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genecircuitry:<tag>

   (see `genecircuitry/tags`_ for valid values for ``<tag>``)


.. |downloads_genecircuitry| image:: https://img.shields.io/conda/dn/bioconda/genecircuitry.svg?style=flat
   :target: https://anaconda.org/bioconda/genecircuitry
   :alt:   (downloads)
.. |docker_genecircuitry| image:: https://quay.io/repository/biocontainers/genecircuitry/status
   :target: https://quay.io/repository/biocontainers/genecircuitry
.. _`genecircuitry/tags`: https://quay.io/repository/biocontainers/genecircuitry?tab=tags


.. raw:: html

    <script>
        var package = "genecircuitry";
        var versions = ["0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genecircuitry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genecircuitry/README.html