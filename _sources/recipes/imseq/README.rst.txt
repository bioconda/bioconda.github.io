:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'imseq'
.. highlight: bash

imseq
=====

.. conda:recipe:: imseq
   :replaces_section_title:

   IMSEQ is a fast\, PCR and sequencing error aware tool to analyze high throughput data from recombined T\-cell receptor or immunoglobulin gene sequencing experiments


   :homepage: http://www.imtools.org/
   :license: GPLv2
   :recipe: /`imseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imseq/meta.yaml>`_

   


.. conda:package:: imseq

   |downloads_imseq| |docker_imseq|

   :versions: 1.1.0-2, 1.1.0-1, 1.1.0-0
   
   :depends libstdcxx-ng: >=4.9
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install imseq

   and update with::

      conda update imseq

   or use the docker container::

      docker pull quay.io/biocontainers/imseq:<tag>

   (see `imseq/tags`_ for valid values for ``<tag>``)


.. |downloads_imseq| image:: https://img.shields.io/conda/dn/bioconda/imseq.svg?style=flat
   :alt:   (downloads)
.. |docker_imseq| image:: https://quay.io/repository/biocontainers/imseq/status
   :target: https://quay.io/repository/biocontainers/imseq
.. _`imseq/tags`: https://quay.io/repository/biocontainers/imseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imseq/README.html