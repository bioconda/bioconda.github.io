:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fastreer'
.. highlight: bash

bioconductor-fastreer
=====================

.. conda:recipe:: bioconductor-fastreer
   :replaces_section_title:
   :noindex:

   Phylogenetic\, Distance and Other Calculations on VCF and Fasta Files

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/fastreeR.html
   :license: GPL-3
   :recipe: /`bioconductor-fastreer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastreer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastreer/meta.yaml>`_

   Calculate distances\, build phylogenetic trees or perform hierarchical clustering between the samples of a VCF or FASTA file. Functions are implemented in Java and called via rJava. Parallel implementation that operates directly on the VCF or FASTA file for fast execution.


.. conda:package:: bioconductor-fastreer

   |downloads_bioconductor-fastreer| |docker_bioconductor-fastreer|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends openjdk: 
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dynamictreecut: 
   :depends r-r.utils: 
   :depends r-rjava: 
   :depends r-stringr: 
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

      mamba install bioconductor-fastreer

   and update with::

      mamba update bioconductor-fastreer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fastreer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fastreer:<tag>

   (see `bioconductor-fastreer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fastreer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fastreer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fastreer
   :alt:   (downloads)
.. |docker_bioconductor-fastreer| image:: https://quay.io/repository/biocontainers/bioconductor-fastreer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fastreer
.. _`bioconductor-fastreer/tags`: https://quay.io/repository/biocontainers/bioconductor-fastreer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fastreer";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fastreer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fastreer/README.html