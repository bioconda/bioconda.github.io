:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rblast'
.. highlight: bash

bioconductor-rblast
===================

.. conda:recipe:: bioconductor-rblast
   :replaces_section_title:
   :noindex:

   R Interface for the Basic Local Alignment Search Tool

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rBLAST.html
   :license: GPL-3
   :recipe: /`bioconductor-rblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rblast/meta.yaml>`_

   Seamlessly interfaces the Basic Local Alignment Search Tool \(BLAST\) to search genetic sequence data bases. This work was partially supported by grant no. R21HG005912 from the National Human Genome Research Institute.


.. conda:package:: bioconductor-rblast

   |downloads_bioconductor-rblast| |docker_bioconductor-rblast|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-rblast

   and update with::

      mamba update bioconductor-rblast

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rblast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rblast:<tag>

   (see `bioconductor-rblast/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rblast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rblast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rblast
   :alt:   (downloads)
.. |docker_bioconductor-rblast| image:: https://quay.io/repository/biocontainers/bioconductor-rblast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rblast
.. _`bioconductor-rblast/tags`: https://quay.io/repository/biocontainers/bioconductor-rblast?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rblast";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rblast/README.html