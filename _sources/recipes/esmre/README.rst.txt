:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'esmre'
.. highlight: bash

esmre
=====

.. conda:recipe:: esmre
   :replaces_section_title:

   Regular expression accelerator

   :homepage: http://code.google.com/p/esmre/
   :license: GNU Library or Lesser General Public License (LGPL)
   :recipe: /`esmre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esmre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/esmre/meta.yaml>`_

   


.. conda:package:: esmre

   |downloads_esmre| |docker_esmre|

   :versions: 0.3.1-1, 0.3.1-0
   
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install esmre

   and update with::

      conda update esmre

   or use the docker container::

      docker pull quay.io/biocontainers/esmre:<tag>

   (see `esmre/tags`_ for valid values for ``<tag>``)


.. |downloads_esmre| image:: https://img.shields.io/conda/dn/bioconda/esmre.svg?style=flat
   :alt:   (downloads)
.. |docker_esmre| image:: https://quay.io/repository/biocontainers/esmre/status
   :target: https://quay.io/repository/biocontainers/esmre
.. _`esmre/tags`: https://quay.io/repository/biocontainers/esmre?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/esmre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/esmre/README.html