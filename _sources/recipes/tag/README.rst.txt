:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tag'
.. highlight: bash

tag
===

.. conda:recipe:: tag
   :replaces_section_title:

   Genome annotation data analysis and management implemented in pure Python.

   :homepage: https://github.com/standage/tag/
   :license: BSD / BSD License
   :recipe: /`tag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tag/meta.yaml>`_

   


.. conda:package:: tag

   |downloads_tag| |docker_tag|

   :versions: 0.5-1, 0.5-0, 0.4-0
   
   :depends intervaltree: >=3.0
   :depends networkx: >=2.0
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tag

   and update with::

      conda update tag

   or use the docker container::

      docker pull quay.io/biocontainers/tag:<tag>

   (see `tag/tags`_ for valid values for ``<tag>``)


.. |downloads_tag| image:: https://img.shields.io/conda/dn/bioconda/tag.svg?style=flat
   :target: https://anaconda.org/bioconda/tag
   :alt:   (downloads)
.. |docker_tag| image:: https://quay.io/repository/biocontainers/tag/status
   :target: https://quay.io/repository/biocontainers/tag
.. _`tag/tags`: https://quay.io/repository/biocontainers/tag?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tag/README.html