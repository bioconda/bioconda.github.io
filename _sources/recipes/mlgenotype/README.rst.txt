:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mlgenotype'
.. highlight: bash

mlgenotype
==========

.. conda:recipe:: mlgenotype
   :replaces_section_title:
   :noindex:

   A package with utilities for training random forest classifiers to recognize SVs in short read datasets

   :homepage: https://github.com/nhansen/mlgenotype
   :license: MIT
   :recipe: /`mlgenotype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlgenotype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlgenotype/meta.yaml>`_

   


.. conda:package:: mlgenotype

   |downloads_mlgenotype| |docker_mlgenotype|

   :versions:
      
      

      ``0.1.12-0``

      

   
   :depends pandas: ``>=1.0``
   :depends python: ``>=3.7``
   :depends scikit-learn: ``1.0.2``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mlgenotype

   and update with::

      mamba update mlgenotype

  To create a new environment, run::

      mamba create --name myenvname mlgenotype

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mlgenotype:<tag>

   (see `mlgenotype/tags`_ for valid values for ``<tag>``)


.. |downloads_mlgenotype| image:: https://img.shields.io/conda/dn/bioconda/mlgenotype.svg?style=flat
   :target: https://anaconda.org/bioconda/mlgenotype
   :alt:   (downloads)
.. |docker_mlgenotype| image:: https://quay.io/repository/biocontainers/mlgenotype/status
   :target: https://quay.io/repository/biocontainers/mlgenotype
.. _`mlgenotype/tags`: https://quay.io/repository/biocontainers/mlgenotype?tab=tags


.. raw:: html

    <script>
        var package = "mlgenotype";
        var versions = ["0.1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlgenotype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlgenotype/README.html