:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene'
.. highlight: bash

bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene
===============================================

.. conda:recipe:: bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/TxDb.Mmulatta.UCSC.rheMac8.refGene.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene

   |downloads_bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene| |docker_bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-8</code>,  <code>3.12.0-7</code>,  <code>3.12.0-6</code>,  <code>3.12.0-5</code>,  <code>3.12.0-4</code>,  <code>3.12.0-3</code>,  <code>3.12.0-2</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  </span></summary>
      

      ``3.12.0-8``,  ``3.12.0-7``,  ``3.12.0-6``,  ``3.12.0-5``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.0-0``,  ``3.10.0-0``,  ``3.4.6-1``,  ``3.4.4-0``

      
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

      mamba install bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene

   and update with::

      mamba update bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene

  To create a new environment, run::

      mamba create --name myenvname bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene:<tag>

   (see `bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene
   :alt:   (downloads)
.. |docker_bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene
.. _`bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene";
        var versions = ["3.12.0","3.12.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.mmulatta.ucsc.rhemac8.refgene/README.html