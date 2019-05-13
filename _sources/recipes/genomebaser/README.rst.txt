:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomebaser'
.. highlight: bash

genomebaser
===========

.. conda:recipe:: genomebaser
   :replaces_section_title:

   GenomeBaser manages complete \(bacterial\) genomes from NCBI

   :homepage: http://github.com/mscook/GenomeBaser
   :license: ECL 2.0
   :recipe: /`genomebaser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomebaser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomebaser/meta.yaml>`_

   


.. conda:package:: genomebaser

   |downloads_genomebaser| |docker_genomebaser|

   :versions: 0.1.2-1, 0.1.2-0
   
   :depends biopython: 
   :depends click: 
   :depends python: 2.7*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomebaser

   and update with::

      conda update genomebaser

   or use the docker container::

      docker pull quay.io/biocontainers/genomebaser:<tag>

   (see `genomebaser/tags`_ for valid values for ``<tag>``)


.. |downloads_genomebaser| image:: https://img.shields.io/conda/dn/bioconda/genomebaser.svg?style=flat
   :target: https://anaconda.org/bioconda/genomebaser
   :alt:   (downloads)
.. |docker_genomebaser| image:: https://quay.io/repository/biocontainers/genomebaser/status
   :target: https://quay.io/repository/biocontainers/genomebaser
.. _`genomebaser/tags`: https://quay.io/repository/biocontainers/genomebaser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomebaser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomebaser/README.html