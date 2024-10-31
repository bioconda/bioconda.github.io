:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'liana'
.. highlight: bash

liana
=====

.. conda:recipe:: liana
   :replaces_section_title:
   :noindex:

   LIANA\+\: a one\-stop\-shop framework for cell\-cell communication

   :homepage: https://liana-py.readthedocs.io
   :license: GPL-3.0-or-later
   :recipe: /`liana <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liana>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liana/meta.yaml>`_

   


.. conda:package:: liana

   |downloads_liana| |docker_liana|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends anndata: ``>=0.7.4``
   :depends cell2cell: 
   :depends corneto: 
   :depends cvxpy: ``>=1.4,<2``
   :depends cylp: ``>=0.91.5,<0.92.0``
   :depends decoupler: ``>=1.4.0``
   :depends docrep: ``>=0.3.1``
   :depends mofapy2: ``>=0.7.0``
   :depends mofax: 
   :depends mudata: 
   :depends muon: 
   :depends numba: ``>=0.54.0``
   :depends omnipath: ``>=1.0.6``
   :depends plotnine: ``>=0.10.0``
   :depends pre-commit: ``>=3.0.0``
   :depends pydeseq2: ``>=0.3.5``
   :depends python: ``>=3.8,<3.12``
   :depends requests: ``>=2.25.1,<3.0.0``
   :depends scanpy: ``>=1.8.0``
   :depends tqdm: ``>=4.0.0,<5.0.0``
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

      mamba install liana

   and update with::

      mamba update liana

  To create a new environment, run::

      mamba create --name myenvname liana

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/liana:<tag>

   (see `liana/tags`_ for valid values for ``<tag>``)


.. |downloads_liana| image:: https://img.shields.io/conda/dn/bioconda/liana.svg?style=flat
   :target: https://anaconda.org/bioconda/liana
   :alt:   (downloads)
.. |docker_liana| image:: https://quay.io/repository/biocontainers/liana/status
   :target: https://quay.io/repository/biocontainers/liana
.. _`liana/tags`: https://quay.io/repository/biocontainers/liana?tab=tags


.. raw:: html

    <script>
        var package = "liana";
        var versions = ["1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/liana/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/liana/README.html