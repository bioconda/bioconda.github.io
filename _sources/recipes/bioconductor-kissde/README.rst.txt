:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kissde'
.. highlight: bash

bioconductor-kissde
===================

.. conda:recipe:: bioconductor-kissde
   :replaces_section_title:
   :noindex:

   Retrieves Condition\-Specific Variants in RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/kissDE.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-kissde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kissde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kissde/meta.yaml>`_

   Retrieves condition\-specific variants in RNA\-seq data \(SNVs\, alternative\-splicings\, indels\). It has been developed as a post\-treatment of \'KisSplice\' but can also be used with user\'s own data.


.. conda:package:: bioconductor-kissde

   |downloads_bioconductor-kissde| |docker_bioconductor-kissde|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-dss: ``>=2.38.0,<2.39.0``
   :depends r-aod: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-kissde

   and update with::

      conda update bioconductor-kissde

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kissde:<tag>

   (see `bioconductor-kissde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kissde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kissde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kissde
   :alt:   (downloads)
.. |docker_bioconductor-kissde| image:: https://quay.io/repository/biocontainers/bioconductor-kissde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kissde
.. _`bioconductor-kissde/tags`: https://quay.io/repository/biocontainers/bioconductor-kissde?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kissde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kissde/README.html