:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq'
.. highlight: bash

bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq
=================================================

.. conda:recipe:: bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/TxDb.Rnorvegicus.UCSC.rn6.ncbiRefSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq

   |downloads_bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq| |docker_bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq|

   :versions:
      
      

      ``3.12.0-7``,  ``3.12.0-6``,  ``3.12.0-5``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-1``,  ``3.12.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq

   and update with::

      mamba update bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq:<tag>

   (see `bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq
   :alt:   (downloads)
.. |docker_bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq
.. _`bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq";
        var versions = ["3.12.0","3.12.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq/README.html