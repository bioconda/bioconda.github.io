:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dedup'
.. highlight: bash

dedup
=====

.. conda:recipe:: dedup
   :replaces_section_title:

   DeDup is a tool for read deduplication in paired\-end read merging \(e.g. for ancient DNA experiments\).

   :homepage: https://github.com/apeltzer/dedup
   :license: GPLv3
   :recipe: /`dedup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dedup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dedup/meta.yaml>`_

   


.. conda:package:: dedup

   |downloads_dedup| |docker_dedup|

   :versions: 0.12.6-0, 0.12.5-1, 0.12.4-1, 0.12.3-1, 0.12.3-0
   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dedup

   and update with::

      conda update dedup

   or use the docker container::

      docker pull quay.io/biocontainers/dedup:<tag>

   (see `dedup/tags`_ for valid values for ``<tag>``)


.. |downloads_dedup| image:: https://img.shields.io/conda/dn/bioconda/dedup.svg?style=flat
   :target: https://anaconda.org/bioconda/dedup
   :alt:   (downloads)
.. |docker_dedup| image:: https://quay.io/repository/biocontainers/dedup/status
   :target: https://quay.io/repository/biocontainers/dedup
.. _`dedup/tags`: https://quay.io/repository/biocontainers/dedup?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dedup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dedup/README.html