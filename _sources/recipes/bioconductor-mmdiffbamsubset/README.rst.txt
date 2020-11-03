:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmdiffbamsubset'
.. highlight: bash

bioconductor-mmdiffbamsubset
============================

.. conda:recipe:: bioconductor-mmdiffbamsubset
   :replaces_section_title:
   :noindex:

   Example ChIP\-Seq data for the MMDiff package

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/MMDiffBamSubset.html
   :license: LGPL
   :recipe: /`bioconductor-mmdiffbamsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmdiffbamsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmdiffbamsubset/meta.yaml>`_

   Subset of BAM files\, including WT\_2.bam\, Null\_2.bam\, Resc\_2.bam\, Input.bam from the \"Cfp1\" experiment \(see Clouaire et al.\, Genes Dev. 2012\). Data is available under ArrayExpress accession numbers E\-ERAD\-79. Additionally\, corresponding subset of peaks called by MACS


.. conda:package:: bioconductor-mmdiffbamsubset

   |downloads_bioconductor-mmdiffbamsubset| |docker_bioconductor-mmdiffbamsubset|

   :versions:
      
      

      ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mmdiffbamsubset

   and update with::

      conda update bioconductor-mmdiffbamsubset

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mmdiffbamsubset:<tag>

   (see `bioconductor-mmdiffbamsubset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mmdiffbamsubset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmdiffbamsubset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mmdiffbamsubset
   :alt:   (downloads)
.. |docker_bioconductor-mmdiffbamsubset| image:: https://quay.io/repository/biocontainers/bioconductor-mmdiffbamsubset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmdiffbamsubset
.. _`bioconductor-mmdiffbamsubset/tags`: https://quay.io/repository/biocontainers/bioconductor-mmdiffbamsubset?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmdiffbamsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmdiffbamsubset/README.html