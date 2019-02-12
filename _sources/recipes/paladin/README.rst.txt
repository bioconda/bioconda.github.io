:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paladin'
.. highlight: bash

paladin
=======

.. conda:recipe:: paladin
   :replaces_section_title:

   Protein Alignment and Detection Interface

   :homepage: http://genomebio.org/paladin/
   :developer docs: https://github.com/twestbrookunh/paladin
   :license: MIT
   :recipe: /`paladin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paladin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paladin/meta.yaml>`_

   PALADIN is a protein sequence alignment tool designed for the accurate
   functional characterization of metagenomes.



.. conda:package:: paladin

   |downloads_paladin| |docker_paladin|

   :versions: 1.4.4-0, 1.3.1-2, 1.3.1-1, 1.3.1-0
   
   :depends curl: >=7.59.0,<8.0a0
   
   :depends libgcc-ng: >=4.9
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install paladin

   and update with::

      conda update paladin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/paladin:<tag>

   (see `paladin/tags`_ for valid values for ``<tag>``)


.. |downloads_paladin| image:: https://img.shields.io/conda/dn/bioconda/paladin.svg?style=flat
   :alt:   (downloads)
.. |docker_paladin| image:: https://quay.io/repository/biocontainers/paladin/status
   :target: https://quay.io/repository/biocontainers/paladin
.. _`paladin/tags`: https://quay.io/repository/biocontainers/paladin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paladin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paladin/README.html