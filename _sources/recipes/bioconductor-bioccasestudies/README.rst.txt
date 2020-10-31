:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioccasestudies'
.. highlight: bash

bioconductor-bioccasestudies
============================

.. conda:recipe:: bioconductor-bioccasestudies
   :replaces_section_title:
   :noindex:

   BiocCaseStudies\: Support for the Case Studies Monograph

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/BiocCaseStudies.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bioccasestudies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioccasestudies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioccasestudies/meta.yaml>`_

   Software and data to support the case studies.


.. conda:package:: bioconductor-bioccasestudies

   |downloads_bioconductor-bioccasestudies| |docker_bioconductor-bioccasestudies|

   :versions:
      
      

      ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-1``,  ``1.44.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bioccasestudies

   and update with::

      conda update bioconductor-bioccasestudies

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bioccasestudies:<tag>

   (see `bioconductor-bioccasestudies/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioccasestudies| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioccasestudies.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bioccasestudies
   :alt:   (downloads)
.. |docker_bioconductor-bioccasestudies| image:: https://quay.io/repository/biocontainers/bioconductor-bioccasestudies/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioccasestudies
.. _`bioconductor-bioccasestudies/tags`: https://quay.io/repository/biocontainers/bioconductor-bioccasestudies?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioccasestudies/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioccasestudies/README.html