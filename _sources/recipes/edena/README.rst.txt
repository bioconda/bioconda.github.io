:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'edena'
.. highlight: bash

edena
=====

.. conda:recipe:: edena
   :replaces_section_title:
   :noindex:

   de novo short reads assembler

   :homepage: http://www.genomic.ch/edena.php
   :license: GPL3
   :recipe: /`edena <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edena>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/edena/meta.yaml>`_
   :links: biotools: :biotools:`edena`

   


.. conda:package:: edena

   |downloads_edena| |docker_edena|

   :versions:
      
      

      ``3.131028-1``,  ``3.131028-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install edena

   and update with::

      conda update edena

   or use the docker container::

      docker pull quay.io/biocontainers/edena:<tag>

   (see `edena/tags`_ for valid values for ``<tag>``)


.. |downloads_edena| image:: https://img.shields.io/conda/dn/bioconda/edena.svg?style=flat
   :target: https://anaconda.org/bioconda/edena
   :alt:   (downloads)
.. |docker_edena| image:: https://quay.io/repository/biocontainers/edena/status
   :target: https://quay.io/repository/biocontainers/edena
.. _`edena/tags`: https://quay.io/repository/biocontainers/edena?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/edena/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/edena/README.html