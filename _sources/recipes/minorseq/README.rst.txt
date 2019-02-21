:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minorseq'
.. highlight: bash

minorseq
========

.. conda:recipe:: minorseq
   :replaces_section_title:

   Minor Variant Calling and Phasing Tools

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`minorseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minorseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minorseq/meta.yaml>`_

   


.. conda:package:: minorseq

   |downloads_minorseq| |docker_minorseq|

   :versions: 1.11.0-1, 1.11.0-0
   
   :depends blasr: 
   
   :depends pbccs: 
   
   :depends samtools: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minorseq

   and update with::

      conda update minorseq

   or use the docker container::

      docker pull quay.io/biocontainers/minorseq:<tag>

   (see `minorseq/tags`_ for valid values for ``<tag>``)


.. |downloads_minorseq| image:: https://img.shields.io/conda/dn/bioconda/minorseq.svg?style=flat
   :alt:   (downloads)
.. |docker_minorseq| image:: https://quay.io/repository/biocontainers/minorseq/status
   :target: https://quay.io/repository/biocontainers/minorseq
.. _`minorseq/tags`: https://quay.io/repository/biocontainers/minorseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minorseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minorseq/README.html