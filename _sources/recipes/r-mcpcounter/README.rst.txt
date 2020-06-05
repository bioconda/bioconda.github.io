:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mcpcounter'
.. highlight: bash

r-mcpcounter
============

.. conda:recipe:: r-mcpcounter
   :replaces_section_title:
   :noindex:

   Estimating tissue\-infiltrating immune and other stromal subpopulations abundances using gene expression

   :homepage: https://github.com/ebecht/MCPcounter
   :license: GPL / GPL-3
   :recipe: /`r-mcpcounter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mcpcounter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mcpcounter/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-016-1070-5`

   


.. conda:package:: r-mcpcounter

   |downloads_r-mcpcounter| |docker_r-mcpcounter|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-curl: ``>=2.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mcpcounter

   and update with::

      conda update r-mcpcounter

   or use the docker container::

      docker pull quay.io/biocontainers/r-mcpcounter:<tag>

   (see `r-mcpcounter/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mcpcounter| image:: https://img.shields.io/conda/dn/bioconda/r-mcpcounter.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mcpcounter
   :alt:   (downloads)
.. |docker_r-mcpcounter| image:: https://quay.io/repository/biocontainers/r-mcpcounter/status
   :target: https://quay.io/repository/biocontainers/r-mcpcounter
.. _`r-mcpcounter/tags`: https://quay.io/repository/biocontainers/r-mcpcounter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mcpcounter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mcpcounter/README.html