:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomic_regions'
.. highlight: bash

genomic_regions
===============

.. conda:recipe:: genomic_regions
   :replaces_section_title:
   :noindex:

   Consistently handle genomic regions

   :homepage: https://github.com/vaquerizaslab/genomic_regions
   :documentation: https://vaquerizaslab.github.io/genomic_regions
   
   :license: MIT
   :recipe: /`genomic_regions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomic_regions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomic_regions/meta.yaml>`_

   


.. conda:package:: genomic_regions

   |downloads_genomic_regions| |docker_genomic_regions|

   :versions:
      
      

      ``0.0.9-0``

      

   
   :depends future: 
   :depends intervaltree: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: ``>=0.8.0``
   :depends pybigwig: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomic_regions

   and update with::

      conda update genomic_regions

   or use the docker container::

      docker pull quay.io/biocontainers/genomic_regions:<tag>

   (see `genomic_regions/tags`_ for valid values for ``<tag>``)


.. |downloads_genomic_regions| image:: https://img.shields.io/conda/dn/bioconda/genomic_regions.svg?style=flat
   :target: https://anaconda.org/bioconda/genomic_regions
   :alt:   (downloads)
.. |docker_genomic_regions| image:: https://quay.io/repository/biocontainers/genomic_regions/status
   :target: https://quay.io/repository/biocontainers/genomic_regions
.. _`genomic_regions/tags`: https://quay.io/repository/biocontainers/genomic_regions?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomic_regions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomic_regions/README.html