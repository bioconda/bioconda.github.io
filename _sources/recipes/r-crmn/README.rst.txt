:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-crmn'
.. highlight: bash

r-crmn
======

.. conda:recipe:: r-crmn
   :replaces_section_title:
   :noindex:

   Implements the Cross\-contribution Compensating Multiple standard Normalization \(CCMN\) method described in Redestig et al. \(2009\) Analytical Chemistry \<doi\:10.1021\/ac901143w\> and other normalization algorithms.

   :homepage: https://github.com/hredestig/crmn
   :license: GPL3 / GPL-3
   :recipe: /`r-crmn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crmn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crmn/meta.yaml>`_

   


.. conda:package:: r-crmn

   |downloads_r-crmn| |docker_r-crmn|

   :versions:
      
      

      ``0.0.21-2``,  ``0.0.21-1``,  ``0.0.21-0``

      

   
   :depends bioconductor-biobase: 
   :depends bioconductor-pcamethods: ``>=1.56.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-crmn

   and update with::

      conda update r-crmn

   or use the docker container::

      docker pull quay.io/biocontainers/r-crmn:<tag>

   (see `r-crmn/tags`_ for valid values for ``<tag>``)


.. |downloads_r-crmn| image:: https://img.shields.io/conda/dn/bioconda/r-crmn.svg?style=flat
   :target: https://anaconda.org/bioconda/r-crmn
   :alt:   (downloads)
.. |docker_r-crmn| image:: https://quay.io/repository/biocontainers/r-crmn/status
   :target: https://quay.io/repository/biocontainers/r-crmn
.. _`r-crmn/tags`: https://quay.io/repository/biocontainers/r-crmn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-crmn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-crmn/README.html