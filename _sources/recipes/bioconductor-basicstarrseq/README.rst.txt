:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basicstarrseq'
.. highlight: bash

bioconductor-basicstarrseq
==========================

.. conda:recipe:: bioconductor-basicstarrseq
   :replaces_section_title:
   :noindex:

   Basic peak calling on STARR\-seq data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/BasicSTARRseq.html
   :license: LGPL-3
   :recipe: /`bioconductor-basicstarrseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basicstarrseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basicstarrseq/meta.yaml>`_

   Basic peak calling on STARR\-seq data based on a method introduced in \"Genome\-Wide Quantitative Enhancer Activity Maps Identified by STARR\-seq\" Arnold et al. Science. 2013 Mar 1\;339\(6123\)\:1074\-7. doi\: 10.1126\/science. 1232542. Epub 2013 Jan 17.


.. conda:package:: bioconductor-basicstarrseq

   |downloads_bioconductor-basicstarrseq| |docker_bioconductor-basicstarrseq|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-1``,  ``1.10.0-0``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-basicstarrseq

   and update with::

      conda update bioconductor-basicstarrseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-basicstarrseq:<tag>

   (see `bioconductor-basicstarrseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-basicstarrseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basicstarrseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basicstarrseq
   :alt:   (downloads)
.. |docker_bioconductor-basicstarrseq| image:: https://quay.io/repository/biocontainers/bioconductor-basicstarrseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basicstarrseq
.. _`bioconductor-basicstarrseq/tags`: https://quay.io/repository/biocontainers/bioconductor-basicstarrseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basicstarrseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basicstarrseq/README.html