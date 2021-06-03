:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mkmisc'
.. highlight: bash

r-mkmisc
========

.. conda:recipe:: r-mkmisc
   :replaces_section_title:
   :noindex:

   Contains several functions for statistical data analysis\; e.g. for sample size and power calculations\, computation of confidence intervals and tests\, and generation of similarity matrices.

   :homepage: http://www.stamats.de/
   :license: LGPL / LGPL-3
   :recipe: /`r-mkmisc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mkmisc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mkmisc/meta.yaml>`_

   


.. conda:package:: r-mkmisc

   |downloads_r-mkmisc| |docker_r-mkmisc|

   :versions:
      
      

      ``1.6-3``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      

   
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-rcolorbrewer: 
   :depends r-robustbase: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mkmisc

   and update with::

      conda update r-mkmisc

   or use the docker container::

      docker pull quay.io/biocontainers/r-mkmisc:<tag>

   (see `r-mkmisc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mkmisc| image:: https://img.shields.io/conda/dn/bioconda/r-mkmisc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mkmisc
   :alt:   (downloads)
.. |docker_r-mkmisc| image:: https://quay.io/repository/biocontainers/r-mkmisc/status
   :target: https://quay.io/repository/biocontainers/r-mkmisc
.. _`r-mkmisc/tags`: https://quay.io/repository/biocontainers/r-mkmisc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mkmisc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mkmisc/README.html