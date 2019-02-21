:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'forked-path'
.. highlight: bash

forked-path
===========

.. conda:recipe:: forked-path
   :replaces_section_title:

   An object oriented file path module

   :homepage: http://github.com/Singletoned/forked-path
   :license: Public Domain
   :recipe: /`forked-path <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forked-path>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forked-path/meta.yaml>`_

   


.. conda:package:: forked-path

   |downloads_forked-path| |docker_forked-path|

   :versions: 0.2.3-2, 0.2.3-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install forked-path

   and update with::

      conda update forked-path

   or use the docker container::

      docker pull quay.io/biocontainers/forked-path:<tag>

   (see `forked-path/tags`_ for valid values for ``<tag>``)


.. |downloads_forked-path| image:: https://img.shields.io/conda/dn/bioconda/forked-path.svg?style=flat
   :alt:   (downloads)
.. |docker_forked-path| image:: https://quay.io/repository/biocontainers/forked-path/status
   :target: https://quay.io/repository/biocontainers/forked-path
.. _`forked-path/tags`: https://quay.io/repository/biocontainers/forked-path?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/forked-path/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/forked-path/README.html