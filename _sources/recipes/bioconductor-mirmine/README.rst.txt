:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirmine'
.. highlight: bash

bioconductor-mirmine
====================

.. conda:recipe:: bioconductor-mirmine
   :replaces_section_title:
   :noindex:

   Data package with miRNA\-seq datasets from miRmine database as RangedSummarizedExperiment

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/miRmine.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-mirmine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirmine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirmine/meta.yaml>`_

   miRmine database is a collection of expression profiles from different publicly available miRNA\-seq datasets\, Panwar et al \(2017\) miRmine\: A Database of Human miRNA Expression\, prepared with this data package as RangedSummarizedExperiment.


.. conda:package:: bioconductor-mirmine

   |downloads_bioconductor-mirmine| |docker_bioconductor-mirmine|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirmine

   and update with::

      conda update bioconductor-mirmine

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirmine:<tag>

   (see `bioconductor-mirmine/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirmine| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirmine.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirmine
   :alt:   (downloads)
.. |docker_bioconductor-mirmine| image:: https://quay.io/repository/biocontainers/bioconductor-mirmine/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirmine
.. _`bioconductor-mirmine/tags`: https://quay.io/repository/biocontainers/bioconductor-mirmine?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirmine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirmine/README.html