:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varscan'
.. highlight: bash

varscan
=======

.. conda:recipe:: varscan
   :replaces_section_title:

   variant detection in massively parallel sequencing data

   :homepage: http://dkoboldt.github.io/varscan/
   :license: The Non-Profit Open Software License version 3.0 (NPOSL-3.0)
   :recipe: /`varscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varscan/meta.yaml>`_
   :links: biotools: :biotools:`varscan`

   


.. conda:package:: varscan

   |downloads_varscan| |docker_varscan|

   :versions: 2.4.3-1, 2.4.3-0, 2.4.2-2, 2.4.2-1, 2.4.2-0, 2.4.1-0, 2.4.0-1, 2.4.0-0, 2.3.7-2, 2.3.7-0
   
   :depends openjdk: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install varscan

   and update with::

      conda update varscan

   or use the docker container::

      docker pull quay.io/biocontainers/varscan:<tag>

   (see `varscan/tags`_ for valid values for ``<tag>``)


.. |downloads_varscan| image:: https://img.shields.io/conda/dn/bioconda/varscan.svg?style=flat
   :alt:   (downloads)
.. |docker_varscan| image:: https://quay.io/repository/biocontainers/varscan/status
   :target: https://quay.io/repository/biocontainers/varscan
.. _`varscan/tags`: https://quay.io/repository/biocontainers/varscan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varscan/README.html