:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapdia'
.. highlight: bash

mapdia
======

.. conda:recipe:: mapdia
   :replaces_section_title:

   Performs essential data preprocessing\, including novel retention time\-based normalization method and a sequence of peptide\/fragment selection steps\, and more importantly\, hierarchical model\-based statistical significance analysis for multi\-group comparisons under representative experimental designs.

   :homepage: http://sourceforge.net/projects/mapdia/.
   :license: file
   :recipe: /`mapdia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapdia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapdia/meta.yaml>`_
   :links: biotools: :biotools:`MAPDIA`, doi: :doi:`10.1016/j.jprot.2015.09.013`

   


.. conda:package:: mapdia

   |downloads_mapdia| |docker_mapdia|

   :versions: 3.1.0-0, 1.0-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mapdia

   and update with::

      conda update mapdia

   or use the docker container::

      docker pull quay.io/biocontainers/mapdia:<tag>

   (see `mapdia/tags`_ for valid values for ``<tag>``)


.. |downloads_mapdia| image:: https://img.shields.io/conda/dn/bioconda/mapdia.svg?style=flat
   :target: https://anaconda.org/bioconda/mapdia
   :alt:   (downloads)
.. |docker_mapdia| image:: https://quay.io/repository/biocontainers/mapdia/status
   :target: https://quay.io/repository/biocontainers/mapdia
.. _`mapdia/tags`: https://quay.io/repository/biocontainers/mapdia?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapdia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapdia/README.html