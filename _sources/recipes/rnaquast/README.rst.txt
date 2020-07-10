:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaquast'
.. highlight: bash

rnaquast
========

.. conda:recipe:: rnaquast
   :replaces_section_title:
   :noindex:

   rnaQUAST is a tool for evaluating RNA\-Seq assemblies using reference genome and gene database. In addition\, rnaQUAST is also capable of estimating gene database coverage by raw reads and de novo quality assessment using third\-party software.

   :homepage: http://cab.spbu.ru/software/rnaquast/
   :license: GPLv2
   :recipe: /`rnaquast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaquast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaquast/meta.yaml>`_

   


.. conda:package:: rnaquast

   |downloads_rnaquast| |docker_rnaquast|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.5.1-0``

      

   
   :depends blast: 
   :depends blat: 
   :depends busco: ``>=4``
   :depends emboss: 
   :depends gffutils: 
   :depends gmap: 
   :depends joblib: 
   :depends matplotlib-base: 
   :depends python: 
   :depends samtools: 
   :depends star: 
   :depends ucsc-pslsort: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnaquast

   and update with::

      conda update rnaquast

   or use the docker container::

      docker pull quay.io/biocontainers/rnaquast:<tag>

   (see `rnaquast/tags`_ for valid values for ``<tag>``)


.. |downloads_rnaquast| image:: https://img.shields.io/conda/dn/bioconda/rnaquast.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaquast
   :alt:   (downloads)
.. |docker_rnaquast| image:: https://quay.io/repository/biocontainers/rnaquast/status
   :target: https://quay.io/repository/biocontainers/rnaquast
.. _`rnaquast/tags`: https://quay.io/repository/biocontainers/rnaquast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaquast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaquast/README.html