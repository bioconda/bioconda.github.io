:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts'
.. highlight: bash

bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts
========================================================

.. conda:recipe:: bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/TxDb.Hsapiens.UCSC.hg19.lincRNAsTranscripts.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts

   |downloads_bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts| |docker_bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.2-19</code>,  <code>3.2.2-18</code>,  <code>3.2.2-17</code>,  <code>3.2.2-16</code>,  <code>3.2.2-15</code>,  <code>3.2.2-14</code>,  <code>3.2.2-13</code>,  <code>3.2.2-12</code>,  <code>3.2.2-11</code>,  </span></summary>
      

      ``3.2.2-19``,  ``3.2.2-18``,  ``3.2.2-17``,  ``3.2.2-16``,  ``3.2.2-15``,  ``3.2.2-14``,  ``3.2.2-13``,  ``3.2.2-12``,  ``3.2.2-11``,  ``3.2.2-10``,  ``3.2.2-9``,  ``3.2.2-8``,  ``3.2.2-6``,  ``3.2.2-5``,  ``3.2.2-3``,  ``3.2.2-2``

      
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

      mamba install bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts

   and update with::

      mamba update bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts

  To create a new environment, run::

      mamba create --name myenvname bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts:<tag>

   (see `bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts
   :alt:   (downloads)
.. |docker_bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts
.. _`bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts";
        var versions = ["3.2.2","3.2.2","3.2.2","3.2.2","3.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.hsapiens.ucsc.hg19.lincrnastranscripts/README.html