:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magic-impute'
.. highlight: bash

magic-impute
============

.. conda:recipe:: magic-impute
   :replaces_section_title:
   :noindex:

   Markov Affinity\-based Graph Imputation of Cells

   :homepage: https://github.com/KrishnaswamyLab/MAGIC
   :documentation: https://magic.readthedocs.io/en/stable/
   
   :license: GPL / GPL-2.0
   :recipe: /`magic-impute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magic-impute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magic-impute/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cell.2018.05.061`

   


.. conda:package:: magic-impute

   |downloads_magic-impute| |docker_magic-impute|

   :versions:
      
      

      ``3.0.0-0``

      

   
   :depends graphtools: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scprep: 
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

      mamba install magic-impute

   and update with::

      mamba update magic-impute

  To create a new environment, run::

      mamba create --name myenvname magic-impute

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/magic-impute:<tag>

   (see `magic-impute/tags`_ for valid values for ``<tag>``)


.. |downloads_magic-impute| image:: https://img.shields.io/conda/dn/bioconda/magic-impute.svg?style=flat
   :target: https://anaconda.org/bioconda/magic-impute
   :alt:   (downloads)
.. |docker_magic-impute| image:: https://quay.io/repository/biocontainers/magic-impute/status
   :target: https://quay.io/repository/biocontainers/magic-impute
.. _`magic-impute/tags`: https://quay.io/repository/biocontainers/magic-impute?tab=tags


.. raw:: html

    <script>
        var package = "magic-impute";
        var versions = ["3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magic-impute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magic-impute/README.html