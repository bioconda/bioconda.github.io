:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.mmusculus.ucsc.mm39.knowngene'
.. highlight: bash

bioconductor-txdb.mmusculus.ucsc.mm39.knowngene
===============================================

.. conda:recipe:: bioconductor-txdb.mmusculus.ucsc.mm39.knowngene
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/TxDb.Mmusculus.UCSC.mm39.knownGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.mmusculus.ucsc.mm39.knowngene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.mmusculus.ucsc.mm39.knowngene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.mmusculus.ucsc.mm39.knowngene/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.mmusculus.ucsc.mm39.knowngene

   |downloads_bioconductor-txdb.mmusculus.ucsc.mm39.knowngene| |docker_bioconductor-txdb.mmusculus.ucsc.mm39.knowngene|

   :versions:
      
      

      ``3.18.0-0``,  ``3.17.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-txdb.mmusculus.ucsc.mm39.knowngene

   and update with::

      mamba update bioconductor-txdb.mmusculus.ucsc.mm39.knowngene

  To create a new environment, run::

      mamba create --name myenvname bioconductor-txdb.mmusculus.ucsc.mm39.knowngene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm39.knowngene:<tag>

   (see `bioconductor-txdb.mmusculus.ucsc.mm39.knowngene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.mmusculus.ucsc.mm39.knowngene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.mmusculus.ucsc.mm39.knowngene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.mmusculus.ucsc.mm39.knowngene
   :alt:   (downloads)
.. |docker_bioconductor-txdb.mmusculus.ucsc.mm39.knowngene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm39.knowngene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm39.knowngene
.. _`bioconductor-txdb.mmusculus.ucsc.mm39.knowngene/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.mmusculus.ucsc.mm39.knowngene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.mmusculus.ucsc.mm39.knowngene";
        var versions = ["3.18.0","3.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.mmusculus.ucsc.mm39.knowngene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.mmusculus.ucsc.mm39.knowngene/README.html