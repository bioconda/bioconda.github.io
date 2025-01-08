:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.hsapiens.ucsc.hg38.knowngene'
.. highlight: bash

bioconductor-txdb.hsapiens.ucsc.hg38.knowngene
==============================================

.. conda:recipe:: bioconductor-txdb.hsapiens.ucsc.hg38.knowngene
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/TxDb.Hsapiens.UCSC.hg38.knownGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.hsapiens.ucsc.hg38.knowngene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.hsapiens.ucsc.hg38.knowngene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.hsapiens.ucsc.hg38.knowngene/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.hsapiens.ucsc.hg38.knowngene

   |downloads_bioconductor-txdb.hsapiens.ucsc.hg38.knowngene| |docker_bioconductor-txdb.hsapiens.ucsc.hg38.knowngene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.20.0-0</code>,  <code>3.18.0-0</code>,  <code>3.17.0-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-1</code>,  <code>3.14.0-0</code>,  <code>3.13.0-0</code>,  <code>3.10.0-3</code>,  <code>3.10.0-2</code>,  </span></summary>
      

      ``3.20.0-0``,  ``3.18.0-0``,  ``3.17.0-0``,  ``3.16.0-0``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.13.0-0``,  ``3.10.0-3``,  ``3.10.0-2``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.4.6-1``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-1``,  ``3.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends curl: 
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

      mamba install bioconductor-txdb.hsapiens.ucsc.hg38.knowngene

   and update with::

      mamba update bioconductor-txdb.hsapiens.ucsc.hg38.knowngene

  To create a new environment, run::

      mamba create --name myenvname bioconductor-txdb.hsapiens.ucsc.hg38.knowngene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg38.knowngene:<tag>

   (see `bioconductor-txdb.hsapiens.ucsc.hg38.knowngene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.hsapiens.ucsc.hg38.knowngene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.hsapiens.ucsc.hg38.knowngene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.hsapiens.ucsc.hg38.knowngene
   :alt:   (downloads)
.. |docker_bioconductor-txdb.hsapiens.ucsc.hg38.knowngene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg38.knowngene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg38.knowngene
.. _`bioconductor-txdb.hsapiens.ucsc.hg38.knowngene/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg38.knowngene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.hsapiens.ucsc.hg38.knowngene";
        var versions = ["3.20.0","3.18.0","3.17.0","3.16.0","3.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.hsapiens.ucsc.hg38.knowngene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.hsapiens.ucsc.hg38.knowngene/README.html