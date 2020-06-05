:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphlan'
.. highlight: bash

graphlan
========

.. conda:recipe:: graphlan
   :replaces_section_title:
   :noindex:

   GraPhlAn is a software tool for producing high\-quality circular representations of taxonomic and phylogenetic trees.

   :homepage: https://github.com/biobakery/graphlan/wiki
   :license: MIT / MIT License
   :recipe: /`graphlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphlan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphlan/meta.yaml>`_

   


.. conda:package:: graphlan

   |downloads_graphlan| |docker_graphlan|

   :versions:
      
      

      ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends biopython: ``>=1.6``
   :depends matplotlib-base: ``>=1.1``
   :depends python: ``<3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graphlan

   and update with::

      conda update graphlan

   or use the docker container::

      docker pull quay.io/biocontainers/graphlan:<tag>

   (see `graphlan/tags`_ for valid values for ``<tag>``)


.. |downloads_graphlan| image:: https://img.shields.io/conda/dn/bioconda/graphlan.svg?style=flat
   :target: https://anaconda.org/bioconda/graphlan
   :alt:   (downloads)
.. |docker_graphlan| image:: https://quay.io/repository/biocontainers/graphlan/status
   :target: https://quay.io/repository/biocontainers/graphlan
.. _`graphlan/tags`: https://quay.io/repository/biocontainers/graphlan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphlan/README.html