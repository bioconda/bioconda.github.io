:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tdrmapper'
.. highlight: bash

tdrmapper
=========

.. conda:recipe:: tdrmapper
   :replaces_section_title:

   tRNA detection and quantification

   :homepage: https://github.com/sararselitsky/tDRmapper
   :license: academic
   :recipe: /`tdrmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tdrmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tdrmapper/meta.yaml>`_

   


.. conda:package:: tdrmapper

   |downloads_tdrmapper| |docker_tdrmapper|

   :versions: 1.1-3, 1.1-2, 1.1-1, 1.0-1
   
   :depends perl: >=5.26.2,<5.27.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tdrmapper

   and update with::

      conda update tdrmapper

   or use the docker container::

      docker pull quay.io/biocontainers/tdrmapper:<tag>

   (see `tdrmapper/tags`_ for valid values for ``<tag>``)


.. |downloads_tdrmapper| image:: https://img.shields.io/conda/dn/bioconda/tdrmapper.svg?style=flat
   :alt:   (downloads)
.. |docker_tdrmapper| image:: https://quay.io/repository/biocontainers/tdrmapper/status
   :target: https://quay.io/repository/biocontainers/tdrmapper
.. _`tdrmapper/tags`: https://quay.io/repository/biocontainers/tdrmapper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tdrmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tdrmapper/README.html