:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dehomopolymerate'
.. highlight: bash

dehomopolymerate
================

.. conda:recipe:: dehomopolymerate
   :replaces_section_title:
   :noindex:

   Collapse homopolymer runs in FASTQ files

   :homepage: https://github.com/tseemann/dehomopolymerate
   :license: GPL3
   :recipe: /`dehomopolymerate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dehomopolymerate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dehomopolymerate/meta.yaml>`_

   


.. conda:package:: dehomopolymerate

   |downloads_dehomopolymerate| |docker_dehomopolymerate|

   :versions:
      
      

      ``0.4.0-1``,  ``0.4.0-0``,  ``0.3-0``

      

   
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dehomopolymerate

   and update with::

      conda update dehomopolymerate

   or use the docker container::

      docker pull quay.io/biocontainers/dehomopolymerate:<tag>

   (see `dehomopolymerate/tags`_ for valid values for ``<tag>``)


.. |downloads_dehomopolymerate| image:: https://img.shields.io/conda/dn/bioconda/dehomopolymerate.svg?style=flat
   :target: https://anaconda.org/bioconda/dehomopolymerate
   :alt:   (downloads)
.. |docker_dehomopolymerate| image:: https://quay.io/repository/biocontainers/dehomopolymerate/status
   :target: https://quay.io/repository/biocontainers/dehomopolymerate
.. _`dehomopolymerate/tags`: https://quay.io/repository/biocontainers/dehomopolymerate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dehomopolymerate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dehomopolymerate/README.html