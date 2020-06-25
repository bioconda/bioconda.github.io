:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxonomy_ranks'
.. highlight: bash

taxonomy_ranks
==============

.. conda:recipe:: taxonomy_ranks
   :replaces_section_title:
   :noindex:

   To get taxonomy ranks information for taxid\, species name\, or higher ranks \(e.g.\, genus\, family\) with ETE3 from NCBI Taxonomy database.

   :homepage: https://github.com/linzhi2013/taxonomy_ranks
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`taxonomy_ranks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonomy_ranks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxonomy_ranks/meta.yaml>`_
   :links: biotools: :biotools:`taxonomy_ranks`

   


.. conda:package:: taxonomy_ranks

   |downloads_taxonomy_ranks| |docker_taxonomy_ranks|

   :versions:
      
      

      ``0.0.8-0``,  ``0.0.7-0``

      

   
   :depends ete3: 
   :depends python: ``>=2.7.15``
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install taxonomy_ranks

   and update with::

      conda update taxonomy_ranks

   or use the docker container::

      docker pull quay.io/biocontainers/taxonomy_ranks:<tag>

   (see `taxonomy_ranks/tags`_ for valid values for ``<tag>``)


.. |downloads_taxonomy_ranks| image:: https://img.shields.io/conda/dn/bioconda/taxonomy_ranks.svg?style=flat
   :target: https://anaconda.org/bioconda/taxonomy_ranks
   :alt:   (downloads)
.. |docker_taxonomy_ranks| image:: https://quay.io/repository/biocontainers/taxonomy_ranks/status
   :target: https://quay.io/repository/biocontainers/taxonomy_ranks
.. _`taxonomy_ranks/tags`: https://quay.io/repository/biocontainers/taxonomy_ranks?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxonomy_ranks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxonomy_ranks/README.html