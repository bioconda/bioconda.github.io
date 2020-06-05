:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp-mutator'
.. highlight: bash

snp-mutator
===========

.. conda:recipe:: snp-mutator
   :replaces_section_title:
   :noindex:

   Generate mutated sequence files from a reference genome.

   :homepage: https://github.com/CFSAN-Biostatistics/snp-mutator
   :license: BSD / BSD
   :recipe: /`snp-mutator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-mutator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-mutator/meta.yaml>`_

   


.. conda:package:: snp-mutator

   |downloads_snp-mutator| |docker_snp-mutator|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snp-mutator

   and update with::

      conda update snp-mutator

   or use the docker container::

      docker pull quay.io/biocontainers/snp-mutator:<tag>

   (see `snp-mutator/tags`_ for valid values for ``<tag>``)


.. |downloads_snp-mutator| image:: https://img.shields.io/conda/dn/bioconda/snp-mutator.svg?style=flat
   :target: https://anaconda.org/bioconda/snp-mutator
   :alt:   (downloads)
.. |docker_snp-mutator| image:: https://quay.io/repository/biocontainers/snp-mutator/status
   :target: https://quay.io/repository/biocontainers/snp-mutator
.. _`snp-mutator/tags`: https://quay.io/repository/biocontainers/snp-mutator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-mutator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-mutator/README.html