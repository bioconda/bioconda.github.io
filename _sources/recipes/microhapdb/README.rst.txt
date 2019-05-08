:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microhapdb'
.. highlight: bash

microhapdb
==========

.. conda:recipe:: microhapdb
   :replaces_section_title:

   Data package providing convenient programmatic access to published microhaplotype data.

   :homepage: https://github.com/bioforensics/MicroHapDB/
   :license: BSD / BSD License
   :recipe: /`microhapdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microhapdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microhapdb/meta.yaml>`_

   


.. conda:package:: microhapdb

   |downloads_microhapdb| |docker_microhapdb|

   :versions: 0.3-0, 0.2-0
   
   :depends pandas: 
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install microhapdb

   and update with::

      conda update microhapdb

   or use the docker container::

      docker pull quay.io/biocontainers/microhapdb:<tag>

   (see `microhapdb/tags`_ for valid values for ``<tag>``)


.. |downloads_microhapdb| image:: https://img.shields.io/conda/dn/bioconda/microhapdb.svg?style=flat
   :alt:   (downloads)
.. |docker_microhapdb| image:: https://quay.io/repository/biocontainers/microhapdb/status
   :target: https://quay.io/repository/biocontainers/microhapdb
.. _`microhapdb/tags`: https://quay.io/repository/biocontainers/microhapdb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microhapdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microhapdb/README.html