:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bgeecall'
.. highlight: bash

bioconductor-bgeecall
=====================

.. conda:recipe:: bioconductor-bgeecall
   :replaces_section_title:
   :noindex:

   Automatic RNA\-Seq present\/absent gene expression calls generation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BgeeCall.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-bgeecall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgeecall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgeecall/meta.yaml>`_

   BgeeCall allows to generate present\/absent gene expression calls without using an arbitrary cutoff like TPM\<1. Calls are generated based on reference intergenic sequences. These sequences are generated based on expression of all RNA\-Seq libraries of each species integrated in Bgee \(https\:\/\/bgee.org\).


.. conda:package:: bioconductor-bgeecall

   |downloads_bioconductor-bgeecall| |docker_bioconductor-bgeecall|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-tximport: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-jsonlite: 
   :depends r-rslurm: 
   :depends r-sjmisc: 
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

      mamba install bioconductor-bgeecall

   and update with::

      mamba update bioconductor-bgeecall

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bgeecall

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bgeecall:<tag>

   (see `bioconductor-bgeecall/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bgeecall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bgeecall.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bgeecall
   :alt:   (downloads)
.. |docker_bioconductor-bgeecall| image:: https://quay.io/repository/biocontainers/bioconductor-bgeecall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bgeecall
.. _`bioconductor-bgeecall/tags`: https://quay.io/repository/biocontainers/bioconductor-bgeecall?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bgeecall";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bgeecall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bgeecall/README.html