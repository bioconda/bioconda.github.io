:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcan'
.. highlight: bash

bioconductor-pcan
=================

.. conda:recipe:: bioconductor-pcan
   :replaces_section_title:
   :noindex:

   Phenotype Consensus ANalysis \(PCAN\)

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/PCAN.html
   :license: CC BY-NC-ND 4.0
   :recipe: /`bioconductor-pcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcan/meta.yaml>`_
   :links: biotools: :biotools:`pcan`

   Phenotypes comparison based on a pathway consensus approach. Assess the relationship between candidate genes and a set of phenotypes based on additional genes related to the candidate \(e.g. Pathways or network neighbors\).


.. conda:package:: bioconductor-pcan

   |downloads_bioconductor-pcan| |docker_bioconductor-pcan|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pcan

   and update with::

      conda update bioconductor-pcan

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pcan:<tag>

   (see `bioconductor-pcan/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pcan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pcan
   :alt:   (downloads)
.. |docker_bioconductor-pcan| image:: https://quay.io/repository/biocontainers/bioconductor-pcan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcan
.. _`bioconductor-pcan/tags`: https://quay.io/repository/biocontainers/bioconductor-pcan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcan/README.html