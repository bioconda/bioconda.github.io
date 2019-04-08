:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goenrichment'
.. highlight: bash

goenrichment
============

.. conda:recipe:: goenrichment
   :replaces_section_title:

   GOEnrichment analyses a set of gene products for GO term enrichment

   :homepage: https://github.com/DanFaria/GOEnrichment
   :license: Apache License 2.0
   :recipe: /`goenrichment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goenrichment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goenrichment/meta.yaml>`_

   


.. conda:package:: goenrichment

   |downloads_goenrichment| |docker_goenrichment|

   :versions: 2.0.1-0
   
   :depends openjdk: >=8
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install goenrichment

   and update with::

      conda update goenrichment

   or use the docker container::

      docker pull quay.io/biocontainers/goenrichment:<tag>

   (see `goenrichment/tags`_ for valid values for ``<tag>``)


.. |downloads_goenrichment| image:: https://img.shields.io/conda/dn/bioconda/goenrichment.svg?style=flat
   :alt:   (downloads)
.. |docker_goenrichment| image:: https://quay.io/repository/biocontainers/goenrichment/status
   :target: https://quay.io/repository/biocontainers/goenrichment
.. _`goenrichment/tags`: https://quay.io/repository/biocontainers/goenrichment?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goenrichment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goenrichment/README.html