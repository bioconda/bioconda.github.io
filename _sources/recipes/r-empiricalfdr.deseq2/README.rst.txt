:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-empiricalfdr.deseq2'
.. highlight: bash

r-empiricalfdr.deseq2
=====================

.. conda:recipe:: r-empiricalfdr.deseq2
   :replaces_section_title:
   :noindex:

   Auxiliary functions for the DESeq2 package to simulate read counts according to the null hypothesis \(i.e.\, with empirical sample size factors\, per\-gene total counts and dispersions\, but without effects of predictor variables\) and to compute the empirical false discovery rate.

   :homepage: https://CRAN.R-project.org/package=empiricalFDR.DESeq2
   :license: GPL3 / GPL-3
   :recipe: /`r-empiricalfdr.deseq2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-empiricalfdr.deseq2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-empiricalfdr.deseq2/meta.yaml>`_

   


.. conda:package:: r-empiricalfdr.deseq2

   |downloads_r-empiricalfdr.deseq2| |docker_r-empiricalfdr.deseq2|

   :versions:
      
      

      ``1.0.3-8``,  ``1.0.3-7``,  ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-0``

      

   
   :depends bioconductor-deseq2: 
   :depends bioconductor-genomicranges: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-empiricalfdr.deseq2

   and update with::

      conda update r-empiricalfdr.deseq2

   or use the docker container::

      docker pull quay.io/biocontainers/r-empiricalfdr.deseq2:<tag>

   (see `r-empiricalfdr.deseq2/tags`_ for valid values for ``<tag>``)


.. |downloads_r-empiricalfdr.deseq2| image:: https://img.shields.io/conda/dn/bioconda/r-empiricalfdr.deseq2.svg?style=flat
   :target: https://anaconda.org/bioconda/r-empiricalfdr.deseq2
   :alt:   (downloads)
.. |docker_r-empiricalfdr.deseq2| image:: https://quay.io/repository/biocontainers/r-empiricalfdr.deseq2/status
   :target: https://quay.io/repository/biocontainers/r-empiricalfdr.deseq2
.. _`r-empiricalfdr.deseq2/tags`: https://quay.io/repository/biocontainers/r-empiricalfdr.deseq2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-empiricalfdr.deseq2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-empiricalfdr.deseq2/README.html