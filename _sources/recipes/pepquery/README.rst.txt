:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pepquery'
.. highlight: bash

pepquery
========

.. conda:recipe:: pepquery
   :replaces_section_title:
   :noindex:

   PepQuery is a peptide\-centric search engine for novel peptide identification and validation.

   :homepage: https://github.com/bzhanglab/PepQuery
   :license: GPL-3
   :recipe: /`pepquery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepquery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepquery/meta.yaml>`_

   


.. conda:package:: pepquery

   |downloads_pepquery| |docker_pepquery|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.0-0``

      

   
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pepquery

   and update with::

      conda update pepquery

   or use the docker container::

      docker pull quay.io/biocontainers/pepquery:<tag>

   (see `pepquery/tags`_ for valid values for ``<tag>``)


.. |downloads_pepquery| image:: https://img.shields.io/conda/dn/bioconda/pepquery.svg?style=flat
   :target: https://anaconda.org/bioconda/pepquery
   :alt:   (downloads)
.. |docker_pepquery| image:: https://quay.io/repository/biocontainers/pepquery/status
   :target: https://quay.io/repository/biocontainers/pepquery
.. _`pepquery/tags`: https://quay.io/repository/biocontainers/pepquery?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pepquery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pepquery/README.html