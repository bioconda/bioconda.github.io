:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tesorter'
.. highlight: bash

tesorter
========

.. conda:recipe:: tesorter
   :replaces_section_title:
   :noindex:

   Lineage\-level classification of transposable elements using conserved protein domains.

   :homepage: https://github.com/zhangrengang/TEsorter
   :license: GPL / GPLv3
   :recipe: /`tesorter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tesorter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tesorter/meta.yaml>`_

   


.. conda:package:: tesorter

   |downloads_tesorter| |docker_tesorter|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.5.2-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends drmaa: 
   :depends hmmer: 
   :depends pp: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tesorter

   and update with::

      conda update tesorter

   or use the docker container::

      docker pull quay.io/biocontainers/tesorter:<tag>

   (see `tesorter/tags`_ for valid values for ``<tag>``)


.. |downloads_tesorter| image:: https://img.shields.io/conda/dn/bioconda/tesorter.svg?style=flat
   :target: https://anaconda.org/bioconda/tesorter
   :alt:   (downloads)
.. |docker_tesorter| image:: https://quay.io/repository/biocontainers/tesorter/status
   :target: https://quay.io/repository/biocontainers/tesorter
.. _`tesorter/tags`: https://quay.io/repository/biocontainers/tesorter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tesorter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tesorter/README.html