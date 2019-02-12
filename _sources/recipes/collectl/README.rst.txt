:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'collectl'
.. highlight: bash

collectl
========

.. conda:recipe:: collectl
   :replaces_section_title:

   collectl monitoring tool

   :homepage: http://collectl.sourceforge.net/
   :license: Artistic License
   :recipe: /`collectl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collectl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collectl/meta.yaml>`_

   


.. conda:package:: collectl

   |downloads_collectl| |docker_collectl|

   :versions: 4.0.4-3, 4.0.4-2, 4.0.4-1, 4.0.4-0
   
   :depends perl: 5.22.0*
   
   :depends zlib: 1.2.11*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install collectl

   and update with::

      conda update collectl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/collectl:<tag>

   (see `collectl/tags`_ for valid values for ``<tag>``)


.. |downloads_collectl| image:: https://img.shields.io/conda/dn/bioconda/collectl.svg?style=flat
   :alt:   (downloads)
.. |docker_collectl| image:: https://quay.io/repository/biocontainers/collectl/status
   :target: https://quay.io/repository/biocontainers/collectl
.. _`collectl/tags`: https://quay.io/repository/biocontainers/collectl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/collectl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/collectl/README.html