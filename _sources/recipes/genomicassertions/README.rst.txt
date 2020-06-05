:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomicassertions'
.. highlight: bash

genomicassertions
=================

.. conda:recipe:: genomicassertions
   :replaces_section_title:
   :noindex:

   A package to test common files in genomics \(.vcf.gz\, .bam\)

   :homepage: https://github.com/dakl/genomicassertions
   :license: MIT
   :recipe: /`genomicassertions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomicassertions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomicassertions/meta.yaml>`_

   


.. conda:package:: genomicassertions

   |downloads_genomicassertions| |docker_genomicassertions|

   :versions:
      
      

      ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.5-0``

      

   
   :depends pysam: 
   :depends python: 
   :depends pyvcf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomicassertions

   and update with::

      conda update genomicassertions

   or use the docker container::

      docker pull quay.io/biocontainers/genomicassertions:<tag>

   (see `genomicassertions/tags`_ for valid values for ``<tag>``)


.. |downloads_genomicassertions| image:: https://img.shields.io/conda/dn/bioconda/genomicassertions.svg?style=flat
   :target: https://anaconda.org/bioconda/genomicassertions
   :alt:   (downloads)
.. |docker_genomicassertions| image:: https://quay.io/repository/biocontainers/genomicassertions/status
   :target: https://quay.io/repository/biocontainers/genomicassertions
.. _`genomicassertions/tags`: https://quay.io/repository/biocontainers/genomicassertions?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomicassertions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomicassertions/README.html