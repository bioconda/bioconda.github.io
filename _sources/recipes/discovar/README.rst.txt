:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'discovar'
.. highlight: bash

discovar
========

.. conda:recipe:: discovar
   :replaces_section_title:
   :noindex:

   Suitable for variant calling with reference and de novo assembly of small genomes.

   :homepage: https://www.broadinstitute.org/software/discovar
   :license: MIT
   :recipe: /`discovar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discovar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discovar/meta.yaml>`_
   :links: biotools: :biotools:`discovar`, doi: :doi:`10.1038/ng.3121`

   


.. conda:package:: discovar

   |downloads_discovar| |docker_discovar|

   :versions:
      
      

      ``52488-1``,  ``52488-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install discovar

   and update with::

      conda update discovar

   or use the docker container::

      docker pull quay.io/biocontainers/discovar:<tag>

   (see `discovar/tags`_ for valid values for ``<tag>``)


.. |downloads_discovar| image:: https://img.shields.io/conda/dn/bioconda/discovar.svg?style=flat
   :target: https://anaconda.org/bioconda/discovar
   :alt:   (downloads)
.. |docker_discovar| image:: https://quay.io/repository/biocontainers/discovar/status
   :target: https://quay.io/repository/biocontainers/discovar
.. _`discovar/tags`: https://quay.io/repository/biocontainers/discovar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/discovar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/discovar/README.html