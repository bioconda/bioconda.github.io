:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-opweight'
.. highlight: bash

bioconductor-opweight
=====================

.. conda:recipe:: bioconductor-opweight
   :replaces_section_title:
   :noindex:

   Optimal p\-value weighting with independent information

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/OPWeight.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-opweight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opweight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opweight/meta.yaml>`_

   This package perform weighted\-pvalue based multiple hypothesis test and provides corresponding information such as ranking probability\, weight\, significant tests\, etc . To conduct this testing procedure\, the testing method apply a probabilistic relationship between the test rank and the corresponding test effect size.


.. conda:package:: bioconductor-opweight

   |downloads_bioconductor-opweight| |docker_bioconductor-opweight|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-qvalue: ``>=2.24.0,<2.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-mass: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-opweight

   and update with::

      conda update bioconductor-opweight

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-opweight:<tag>

   (see `bioconductor-opweight/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-opweight| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-opweight.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-opweight
   :alt:   (downloads)
.. |docker_bioconductor-opweight| image:: https://quay.io/repository/biocontainers/bioconductor-opweight/status
   :target: https://quay.io/repository/biocontainers/bioconductor-opweight
.. _`bioconductor-opweight/tags`: https://quay.io/repository/biocontainers/bioconductor-opweight?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-opweight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-opweight/README.html