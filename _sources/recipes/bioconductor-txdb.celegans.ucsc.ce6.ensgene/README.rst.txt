:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.celegans.ucsc.ce6.ensgene'
.. highlight: bash

bioconductor-txdb.celegans.ucsc.ce6.ensgene
===========================================

.. conda:recipe:: bioconductor-txdb.celegans.ucsc.ce6.ensgene
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/TxDb.Celegans.UCSC.ce6.ensGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.celegans.ucsc.ce6.ensgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.celegans.ucsc.ce6.ensgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.celegans.ucsc.ce6.ensgene/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.celegans.ucsc.ce6.ensgene

   |downloads_bioconductor-txdb.celegans.ucsc.ce6.ensgene| |docker_bioconductor-txdb.celegans.ucsc.ce6.ensgene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.2-17</code>,  <code>3.2.2-16</code>,  <code>3.2.2-15</code>,  <code>3.2.2-14</code>,  <code>3.2.2-13</code>,  <code>3.2.2-12</code>,  <code>3.2.2-11</code>,  <code>3.2.2-10</code>,  <code>3.2.2-9</code>,  </span></summary>
      

      ``3.2.2-17``,  ``3.2.2-16``,  ``3.2.2-15``,  ``3.2.2-14``,  ``3.2.2-13``,  ``3.2.2-12``,  ``3.2.2-11``,  ``3.2.2-10``,  ``3.2.2-9``,  ``3.2.2-8``,  ``3.2.2-7``,  ``3.2.2-6``,  ``3.2.2-4``,  ``3.2.2-3``,  ``3.2.2-1``,  ``3.2.2-0``

      
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

      mamba install bioconductor-txdb.celegans.ucsc.ce6.ensgene

   and update with::

      mamba update bioconductor-txdb.celegans.ucsc.ce6.ensgene

  To create a new environment, run::

      mamba create --name myenvname bioconductor-txdb.celegans.ucsc.ce6.ensgene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.celegans.ucsc.ce6.ensgene:<tag>

   (see `bioconductor-txdb.celegans.ucsc.ce6.ensgene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.celegans.ucsc.ce6.ensgene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.celegans.ucsc.ce6.ensgene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.celegans.ucsc.ce6.ensgene
   :alt:   (downloads)
.. |docker_bioconductor-txdb.celegans.ucsc.ce6.ensgene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.celegans.ucsc.ce6.ensgene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.celegans.ucsc.ce6.ensgene
.. _`bioconductor-txdb.celegans.ucsc.ce6.ensgene/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.celegans.ucsc.ce6.ensgene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.celegans.ucsc.ce6.ensgene";
        var versions = ["3.2.2","3.2.2","3.2.2","3.2.2","3.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.celegans.ucsc.ce6.ensgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.celegans.ucsc.ce6.ensgene/README.html