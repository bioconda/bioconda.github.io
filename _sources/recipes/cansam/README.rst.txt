:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cansam'
.. highlight: bash

cansam
======

.. conda:recipe:: cansam
   :replaces_section_title:

   C\+\+ binding for SAM\/BAM files

   :homepage: https://github.com/jmarshall/cansam/
   :license: BSD / BSD-3-Clause
   :recipe: /`cansam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansam/meta.yaml>`_

   


.. conda:package:: cansam

   |downloads_cansam| |docker_cansam|

   :versions: 21d64bb-2, 21d64bb-1, 21d64bb-0
   
   :depends boost: >=1.66.0,<1.66.1.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cansam

   and update with::

      conda update cansam

   or use the docker container::

      docker pull quay.io/biocontainers/cansam:<tag>

   (see `cansam/tags`_ for valid values for ``<tag>``)


.. |downloads_cansam| image:: https://img.shields.io/conda/dn/bioconda/cansam.svg?style=flat
   :alt:   (downloads)
.. |docker_cansam| image:: https://quay.io/repository/biocontainers/cansam/status
   :target: https://quay.io/repository/biocontainers/cansam
.. _`cansam/tags`: https://quay.io/repository/biocontainers/cansam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cansam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cansam/README.html