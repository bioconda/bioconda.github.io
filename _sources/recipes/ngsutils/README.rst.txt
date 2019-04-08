:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngsutils'
.. highlight: bash

ngsutils
========

.. conda:recipe:: ngsutils
   :replaces_section_title:

   Tools for next\-generation sequencing analysis http\:\/\/ngsutils.org

   :homepage: http://ngsutils.org
   :license: BSD
   :recipe: /`ngsutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsutils/meta.yaml>`_
   :links: biotools: :biotools:`ngsutils`

   


.. conda:package:: ngsutils

   |downloads_ngsutils| |docker_ngsutils|

   :versions: 0.5.9-1, 0.5.9-0
   
   :depends coverage: 
   :depends cython: 
   :depends eta: 
   :depends pysam: 
   :depends python: >=2.7,<2.8.0a0
   :depends samtools: 
   :depends swalign: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngsutils

   and update with::

      conda update ngsutils

   or use the docker container::

      docker pull quay.io/biocontainers/ngsutils:<tag>

   (see `ngsutils/tags`_ for valid values for ``<tag>``)


.. |downloads_ngsutils| image:: https://img.shields.io/conda/dn/bioconda/ngsutils.svg?style=flat
   :alt:   (downloads)
.. |docker_ngsutils| image:: https://quay.io/repository/biocontainers/ngsutils/status
   :target: https://quay.io/repository/biocontainers/ngsutils
.. _`ngsutils/tags`: https://quay.io/repository/biocontainers/ngsutils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsutils/README.html