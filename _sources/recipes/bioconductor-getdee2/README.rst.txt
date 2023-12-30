:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-getdee2'
.. highlight: bash

bioconductor-getdee2
====================

.. conda:recipe:: bioconductor-getdee2
   :replaces_section_title:
   :noindex:

   Programmatic access to the DEE2 RNA expression dataset

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/getDEE2.html
   :license: GPL-3
   :recipe: /`bioconductor-getdee2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-getdee2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-getdee2/meta.yaml>`_

   Digital Expression Explorer 2 \(or DEE2 for short\) is a repository of processed RNA\-seq data in the form of counts. It was designed so that researchers could undertake re\-analysis and meta\-analysis of published RNA\-seq studies quickly and easily. As of April 2020\, over 1 million SRA datasets have been processed. This package provides an R interface to access these expression data. More information about the DEE2 project can be found at the project homepage \(http\:\/\/dee2.io\) and main publication \(https\:\/\/doi.org\/10.1093\/gigascience\/giz022\).


.. conda:package:: bioconductor-getdee2

   |downloads_bioconductor-getdee2| |docker_bioconductor-getdee2|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.7.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-htm2txt: 
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

      mamba install bioconductor-getdee2

   and update with::

      mamba update bioconductor-getdee2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-getdee2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-getdee2:<tag>

   (see `bioconductor-getdee2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-getdee2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-getdee2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-getdee2
   :alt:   (downloads)
.. |docker_bioconductor-getdee2| image:: https://quay.io/repository/biocontainers/bioconductor-getdee2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-getdee2
.. _`bioconductor-getdee2/tags`: https://quay.io/repository/biocontainers/bioconductor-getdee2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-getdee2";
        var versions = ["1.12.0","1.10.0","1.7.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-getdee2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-getdee2/README.html