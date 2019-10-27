:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genonets'
.. highlight: bash

genonets
========

.. conda:recipe:: genonets
   :replaces_section_title:

   Framework for creating and analyzing genotype networks from data.

   :homepage: https://github.com/fkhalid/genonets
   :license: MIT / MIT License
   :recipe: /`genonets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genonets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genonets/meta.yaml>`_
   :links: biotools: :biotools:`genonets`, doi: :doi:`10.1093/nar/gkw313`

   


.. conda:package:: genonets

   |downloads_genonets| |docker_genonets|

   :versions: 1.1.6-2, 1.1.6-1, 1.1.6-0
   
   :depends numpy: >=1.8.2
   :depends python: 
   :depends python-igraph: >=0.6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genonets

   and update with::

      conda update genonets

   or use the docker container::

      docker pull quay.io/biocontainers/genonets:<tag>

   (see `genonets/tags`_ for valid values for ``<tag>``)


.. |downloads_genonets| image:: https://img.shields.io/conda/dn/bioconda/genonets.svg?style=flat
   :target: https://anaconda.org/bioconda/genonets
   :alt:   (downloads)
.. |docker_genonets| image:: https://quay.io/repository/biocontainers/genonets/status
   :target: https://quay.io/repository/biocontainers/genonets
.. _`genonets/tags`: https://quay.io/repository/biocontainers/genonets?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genonets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genonets/README.html