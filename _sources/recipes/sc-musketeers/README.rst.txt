:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sc-musketeers'
.. highlight: bash

sc-musketeers
=============

.. conda:recipe:: sc-musketeers
   :replaces_section_title:
   :noindex:

   A tri\-partite modular autoencoder for addressing imbalanced cell type annotation and batch effect reduction

   :homepage: https://sc-musketeers.readthedocs.io/
   :license: GPL-3.0
   :recipe: /`sc-musketeers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sc-musketeers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sc-musketeers/meta.yaml>`_

   


.. conda:package:: sc-musketeers

   |downloads_sc-musketeers| |docker_sc-musketeers|

   :versions:
      
      

      ``0.3.7-0``

      

   
   :depends ax-platform: ``>=0.4.0,<0.5.0``
   :depends keras: ``>=3.3.3,<4.0.0``
   :depends matplotlib-base: ``>=3.9.3,<4.0.0``
   :depends neptune: ``>=1.10.4,<2.0.0``
   :depends numpy: ``>=1.23.0,<2.0.0``
   :depends pandas: ``>=2.2.3,<3.0.0``
   :depends pillow: ``>=11.0.0,<12.0.0``
   :depends poetry: ``>=1.8.1,<2.0.0``
   :depends pympler: ``>=1.0.1,<2.0.0``
   :depends python: ``>=3.10.0,<4.0.0``
   :depends pytorch: ``>=2.3.1,<3.0.0``
   :depends scanpy: ``>=1.10.1,<2.0.0``
   :depends scikit-learn: ``>=1.5.2,<2.0.0``
   :depends seaborn: ``>=0.13.2,<0.14.0``
   :depends tensorflow: ``>=2.10.0,<3.0.0``
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

      mamba install sc-musketeers

   and update with::

      mamba update sc-musketeers

  To create a new environment, run::

      mamba create --name myenvname sc-musketeers

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sc-musketeers:<tag>

   (see `sc-musketeers/tags`_ for valid values for ``<tag>``)


.. |downloads_sc-musketeers| image:: https://img.shields.io/conda/dn/bioconda/sc-musketeers.svg?style=flat
   :target: https://anaconda.org/bioconda/sc-musketeers
   :alt:   (downloads)
.. |docker_sc-musketeers| image:: https://quay.io/repository/biocontainers/sc-musketeers/status
   :target: https://quay.io/repository/biocontainers/sc-musketeers
.. _`sc-musketeers/tags`: https://quay.io/repository/biocontainers/sc-musketeers?tab=tags


.. raw:: html

    <script>
        var package = "sc-musketeers";
        var versions = ["0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sc-musketeers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sc-musketeers/README.html