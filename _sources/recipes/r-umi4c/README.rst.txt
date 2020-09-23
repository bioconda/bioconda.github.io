:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-umi4c'
.. highlight: bash

r-umi4c
=======

.. conda:recipe:: r-umi4c
   :replaces_section_title:
   :noindex:

   Process UMI\-4C data from scratch to produce nice plots.

   :homepage: https://tanaylab.github.io/umi4cpackage
   :license: GPL
   :recipe: /`r-umi4c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-umi4c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-umi4c/meta.yaml>`_

   


.. conda:package:: r-umi4c

   |downloads_r-umi4c| |docker_r-umi4c|

   :versions:
      
      

      ``0.0.0.9000-3``,  ``0.0.0.9000-2``,  ``0.0.0.9000-1``,  ``0.0.0.9000-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-misha: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-umi4c

   and update with::

      conda update r-umi4c

   or use the docker container::

      docker pull quay.io/biocontainers/r-umi4c:<tag>

   (see `r-umi4c/tags`_ for valid values for ``<tag>``)


.. |downloads_r-umi4c| image:: https://img.shields.io/conda/dn/bioconda/r-umi4c.svg?style=flat
   :target: https://anaconda.org/bioconda/r-umi4c
   :alt:   (downloads)
.. |docker_r-umi4c| image:: https://quay.io/repository/biocontainers/r-umi4c/status
   :target: https://quay.io/repository/biocontainers/r-umi4c
.. _`r-umi4c/tags`: https://quay.io/repository/biocontainers/r-umi4c?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-umi4c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-umi4c/README.html