:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adaptest'
.. highlight: bash

bioconductor-adaptest
=====================

.. conda:recipe:: bioconductor-adaptest
   :replaces_section_title:
   :noindex:

   Data\-Adaptive Statistics for High\-Dimensional Multiple Testing

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/adaptest.html
   :license: GPL-2
   :recipe: /`bioconductor-adaptest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adaptest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adaptest/meta.yaml>`_

   Data\-adaptive test statistics represent a general methodology for performing multiple hypothesis testing on effects sizes while maintaining honest statistical inference when operating in high\-dimensional settings \(\<doi here\>\). The utilities provided here extend the use of this general methodology to many common data analytic challenges that arise in modern computational and genomic biology.


.. conda:package:: bioconductor-adaptest

   |downloads_bioconductor-adaptest| |docker_bioconductor-adaptest|

   :versions:
      
      

      ``1.7.1-0``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-calibrate: 
   :depends r-origami: ``>=1.0.0``
   :depends r-tmle: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-adaptest

   and update with::

      conda update bioconductor-adaptest

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adaptest:<tag>

   (see `bioconductor-adaptest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adaptest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adaptest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adaptest
   :alt:   (downloads)
.. |docker_bioconductor-adaptest| image:: https://quay.io/repository/biocontainers/bioconductor-adaptest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adaptest
.. _`bioconductor-adaptest/tags`: https://quay.io/repository/biocontainers/bioconductor-adaptest?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adaptest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adaptest/README.html