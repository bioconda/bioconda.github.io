:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rename'
.. highlight: bash

rename
======

.. conda:recipe:: rename
   :replaces_section_title:

   Perl\-powered file rename script with many helpful built\-ins

   :homepage: http://plasmasturm.org/code/rename
   :license: GNU GPLv3
   :recipe: /`rename <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rename>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rename/meta.yaml>`_

   


.. conda:package:: rename

   |downloads_rename| |docker_rename|

   :versions: 1.600-1, 1.600-0
   
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rename

   and update with::

      conda update rename

   or use the docker container::

      docker pull quay.io/biocontainers/rename:<tag>

   (see `rename/tags`_ for valid values for ``<tag>``)


.. |downloads_rename| image:: https://img.shields.io/conda/dn/bioconda/rename.svg?style=flat
   :target: https://anaconda.org/bioconda/rename
   :alt:   (downloads)
.. |docker_rename| image:: https://quay.io/repository/biocontainers/rename/status
   :target: https://quay.io/repository/biocontainers/rename
.. _`rename/tags`: https://quay.io/repository/biocontainers/rename?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rename/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rename/README.html