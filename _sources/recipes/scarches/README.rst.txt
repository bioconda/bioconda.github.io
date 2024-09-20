:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scarches'
.. highlight: bash

scarches
========

.. conda:recipe:: scarches
   :replaces_section_title:
   :noindex:

   Transfer learning with Architecture Surgery on Single\-cell data

   :homepage: https://github.com/theislab/scarches
   :license: BSD-3-Clause
   :recipe: /`scarches <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scarches>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scarches/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-021-01001-7`

   


.. conda:package:: scarches

   |downloads_scarches| |docker_scarches|

   :versions:
      
      

      ``0.6.1-0``

      

   
   :depends anndata: ``>=0.7.4``
   :depends gdown: 
   :depends h5py: ``>=2.10.0``
   :depends leidenalg: 
   :depends matplotlib-base: ``>=3.3.1``
   :depends muon: 
   :depends numpy: ``>=1.19.2``
   :depends pandas: ``>=1.1.2``
   :depends python: 
   :depends pytorch: ``>=1.8.0``
   :depends requests: 
   :depends scanpy: ``>=1.6.0``
   :depends schpl: ``>=1.0.0``
   :depends scikit-learn: ``>=0.23.2``
   :depends scipy: ``>=1.5.2``
   :depends scvi-tools: ``>=0.12.1``
   :depends tqdm: ``>=4.56.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install scarches

   and update with::

      mamba update scarches

  To create a new environment, run::

      mamba create --name myenvname scarches

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scarches:<tag>

   (see `scarches/tags`_ for valid values for ``<tag>``)


.. |downloads_scarches| image:: https://img.shields.io/conda/dn/bioconda/scarches.svg?style=flat
   :target: https://anaconda.org/bioconda/scarches
   :alt:   (downloads)
.. |docker_scarches| image:: https://quay.io/repository/biocontainers/scarches/status
   :target: https://quay.io/repository/biocontainers/scarches
.. _`scarches/tags`: https://quay.io/repository/biocontainers/scarches?tab=tags


.. raw:: html

    <script>
        var package = "scarches";
        var versions = ["0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scarches/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scarches/README.html