:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sqldataframe'
.. highlight: bash

bioconductor-sqldataframe
=========================

.. conda:recipe:: bioconductor-sqldataframe
   :replaces_section_title:
   :noindex:

   Representation of SQL database in DataFrame metaphor

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SQLDataFrame.html
   :license: GPL-3
   :recipe: /`bioconductor-sqldataframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sqldataframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sqldataframe/meta.yaml>`_

   SQLDataFrame is developed to lazily represent and efficiently analyze SQL\-based tables in \_R\_. SQLDataFrame supports common and familiar \'DataFrame\' operations such as \'\[\' subsetting\, rbind\, cbind\, etc.. The internal implementation is based on the widely adopted dplyr grammar and SQL commands. In\-memory datasets or plain text files \(.txt\, .csv\, etc.\) could also be easily converted into SQLDataFrames objects \(which generates a new database on\-disk\).


.. conda:package:: bioconductor-sqldataframe

   |downloads_bioconductor-sqldataframe| |docker_bioconductor-sqldataframe|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-dbplyr: ``>=1.4.0``
   :depends r-dplyr: ``>=0.8.0.1``
   :depends r-lazyeval: 
   :depends r-rsqlite: 
   :depends r-tibble: 
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

      mamba install bioconductor-sqldataframe

   and update with::

      mamba update bioconductor-sqldataframe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sqldataframe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sqldataframe:<tag>

   (see `bioconductor-sqldataframe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sqldataframe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sqldataframe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sqldataframe
   :alt:   (downloads)
.. |docker_bioconductor-sqldataframe| image:: https://quay.io/repository/biocontainers/bioconductor-sqldataframe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sqldataframe
.. _`bioconductor-sqldataframe/tags`: https://quay.io/repository/biocontainers/bioconductor-sqldataframe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sqldataframe";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sqldataframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sqldataframe/README.html