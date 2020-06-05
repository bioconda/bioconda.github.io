:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'diamond_add_taxonomy'
.. highlight: bash

diamond_add_taxonomy
====================

.. conda:recipe:: diamond_add_taxonomy
   :replaces_section_title:
   :noindex:

   Utility to work with NCBI taxonomy database including tool to annotate DIAMOND results with taxonomy lineage

   :homepage: https://github.com/pvanheus/diamond_add_taxonomy
   :license: MIT
   :recipe: /`diamond_add_taxonomy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diamond_add_taxonomy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diamond_add_taxonomy/meta.yaml>`_

   


.. conda:package:: diamond_add_taxonomy

   |downloads_diamond_add_taxonomy| |docker_diamond_add_taxonomy|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.0-0``

      

   
   :depends click: 
   :depends ete3: 
   :depends python: ``>=3.6,<3.7.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install diamond_add_taxonomy

   and update with::

      conda update diamond_add_taxonomy

   or use the docker container::

      docker pull quay.io/biocontainers/diamond_add_taxonomy:<tag>

   (see `diamond_add_taxonomy/tags`_ for valid values for ``<tag>``)


.. |downloads_diamond_add_taxonomy| image:: https://img.shields.io/conda/dn/bioconda/diamond_add_taxonomy.svg?style=flat
   :target: https://anaconda.org/bioconda/diamond_add_taxonomy
   :alt:   (downloads)
.. |docker_diamond_add_taxonomy| image:: https://quay.io/repository/biocontainers/diamond_add_taxonomy/status
   :target: https://quay.io/repository/biocontainers/diamond_add_taxonomy
.. _`diamond_add_taxonomy/tags`: https://quay.io/repository/biocontainers/diamond_add_taxonomy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/diamond_add_taxonomy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/diamond_add_taxonomy/README.html