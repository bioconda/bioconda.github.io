:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zeroc-ice'
.. highlight: bash

zeroc-ice
=========

.. conda:recipe:: zeroc-ice
   :replaces_section_title:

   Ice is a comprehensive RPC framework that helps you network your software with minimal effort.

   :homepage: https://github.com/zeroc-ice
   :license: GPL v2 with exceptions
   :recipe: /`zeroc-ice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zeroc-ice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zeroc-ice/meta.yaml>`_

   


.. conda:package:: zeroc-ice

   |downloads_zeroc-ice| |docker_zeroc-ice|

   :versions: 3.7.1-1, 3.7.1-0, 3.6.3-1, 3.6.3-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends libcxx: >=4.0.1
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install zeroc-ice

   and update with::

      conda update zeroc-ice

   or use the docker container::

      docker pull quay.io/biocontainers/zeroc-ice:<tag>

   (see `zeroc-ice/tags`_ for valid values for ``<tag>``)


.. |downloads_zeroc-ice| image:: https://img.shields.io/conda/dn/bioconda/zeroc-ice.svg?style=flat
   :alt:   (downloads)
.. |docker_zeroc-ice| image:: https://quay.io/repository/biocontainers/zeroc-ice/status
   :target: https://quay.io/repository/biocontainers/zeroc-ice
.. _`zeroc-ice/tags`: https://quay.io/repository/biocontainers/zeroc-ice?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zeroc-ice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zeroc-ice/README.html