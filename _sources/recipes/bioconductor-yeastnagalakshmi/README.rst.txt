:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yeastnagalakshmi'
.. highlight: bash

bioconductor-yeastnagalakshmi
=============================

.. conda:recipe:: bioconductor-yeastnagalakshmi
   :replaces_section_title:
   :noindex:

   Yeast genome RNA sequencing data based on Nagalakshmi et. al.

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/yeastNagalakshmi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-yeastnagalakshmi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastnagalakshmi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastnagalakshmi/meta.yaml>`_

   The yeast genome data was retrieved from the sequence read archive\, aligned with bwa\, and converted to BAM format with samtools.


.. conda:package:: bioconductor-yeastnagalakshmi

   |downloads_bioconductor-yeastnagalakshmi| |docker_bioconductor-yeastnagalakshmi|

   :versions:
      
      

      ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yeastnagalakshmi

   and update with::

      conda update bioconductor-yeastnagalakshmi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yeastnagalakshmi:<tag>

   (see `bioconductor-yeastnagalakshmi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yeastnagalakshmi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yeastnagalakshmi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yeastnagalakshmi
   :alt:   (downloads)
.. |docker_bioconductor-yeastnagalakshmi| image:: https://quay.io/repository/biocontainers/bioconductor-yeastnagalakshmi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yeastnagalakshmi
.. _`bioconductor-yeastnagalakshmi/tags`: https://quay.io/repository/biocontainers/bioconductor-yeastnagalakshmi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yeastnagalakshmi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yeastnagalakshmi/README.html