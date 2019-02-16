:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pairix'
.. highlight: bash

pairix
======

.. conda:recipe:: pairix
   :replaces_section_title:

   2D indexing on bgzipped text files of paired genomic coordinates

   :homepage: https://github.com/4dn-dcic/pairix
   :license: MIT / MIT
   :recipe: /`pairix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairix/meta.yaml>`_

   


.. conda:package:: pairix

   |downloads_pairix| |docker_pairix|

   :versions: 0.3.6-4, 0.3.6-2, 0.3.6-1, 0.3.6-0, 0.3.5-0, 0.3.3-0, 0.3.2-0, 0.3.1-0, 0.3.0-0, 0.2.5-0, 0.2.4-0, 0.1.6-0
   
   :depends htslib: 
   
   :depends libgcc-ng: >=7.3.0
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pairix

   and update with::

      conda update pairix

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pairix:<tag>

   (see `pairix/tags`_ for valid values for ``<tag>``)


.. |downloads_pairix| image:: https://img.shields.io/conda/dn/bioconda/pairix.svg?style=flat
   :alt:   (downloads)
.. |docker_pairix| image:: https://quay.io/repository/biocontainers/pairix/status
   :target: https://quay.io/repository/biocontainers/pairix
.. _`pairix/tags`: https://quay.io/repository/biocontainers/pairix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pairix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pairix/README.html