:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mir-prefer'
.. highlight: bash

mir-prefer
==========

.. conda:recipe:: mir-prefer
   :replaces_section_title:
   :noindex:

   microRNA PREdiction From small RNA\-seq data

   :homepage: https://github.com/hangelwen/miR-PREFeR
   :license: GPL
   :recipe: /`mir-prefer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mir-prefer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mir-prefer/meta.yaml>`_

   microRNA PREdiction From small RNA\-seq data


.. conda:package:: mir-prefer

   |downloads_mir-prefer| |docker_mir-prefer|

   :versions:
      
      

      ``0.24-3``,  ``0.24-2``,  ``0.24-1``,  ``0.24-0``

      

   
   :depends bowtie: ``>=1.2.0``
   :depends python: ``<3``
   :depends samtools: ``>=0.1.15``
   :depends viennarna: ``>=1.8.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mir-prefer

   and update with::

      conda update mir-prefer

   or use the docker container::

      docker pull quay.io/biocontainers/mir-prefer:<tag>

   (see `mir-prefer/tags`_ for valid values for ``<tag>``)


.. |downloads_mir-prefer| image:: https://img.shields.io/conda/dn/bioconda/mir-prefer.svg?style=flat
   :target: https://anaconda.org/bioconda/mir-prefer
   :alt:   (downloads)
.. |docker_mir-prefer| image:: https://quay.io/repository/biocontainers/mir-prefer/status
   :target: https://quay.io/repository/biocontainers/mir-prefer
.. _`mir-prefer/tags`: https://quay.io/repository/biocontainers/mir-prefer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mir-prefer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mir-prefer/README.html