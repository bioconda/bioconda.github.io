:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'argutils'
.. highlight: bash

argutils
========

.. conda:recipe:: argutils
   :replaces_section_title:

   Functions to build matched argument parsers and config files

   :homepage: https://github.com/eclarke/argutils
   :license: GNU General Public License v2 or later (GPLv2+)
   :recipe: /`argutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argutils/meta.yaml>`_

   


.. conda:package:: argutils

   |downloads_argutils| |docker_argutils|

   :versions: 0.3.2-1, 0.3.2-0
   
   :depends python: >=2.7,<2.8.0a0
   :depends pyyaml: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install argutils

   and update with::

      conda update argutils

   or use the docker container::

      docker pull quay.io/biocontainers/argutils:<tag>

   (see `argutils/tags`_ for valid values for ``<tag>``)


.. |downloads_argutils| image:: https://img.shields.io/conda/dn/bioconda/argutils.svg?style=flat
   :alt:   (downloads)
.. |docker_argutils| image:: https://quay.io/repository/biocontainers/argutils/status
   :target: https://quay.io/repository/biocontainers/argutils
.. _`argutils/tags`: https://quay.io/repository/biocontainers/argutils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/argutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/argutils/README.html