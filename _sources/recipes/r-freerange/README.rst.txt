:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-freerange'
.. highlight: bash

r-freerange
===========

.. conda:recipe:: r-freerange
   :replaces_section_title:

   Generate and manipulate genomic ranges.

   :homepage: https://freerange.acidgenomics.com/
   :developer docs: https://github.com/acidgenomics/freerange
   :license: MIT
   :recipe: /`r-freerange <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-freerange>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-freerange/meta.yaml>`_

   


.. conda:package:: r-freerange

   |downloads_r-freerange| |docker_r-freerange|

   :versions: 0.2.5-0, 0.2.4-0, 0.2.3-0, 0.2.2-0, 0.2.1-0, 0.1.6-0
   
   :depends bioconductor-annotationhub: >=2.16
   :depends bioconductor-biocgenerics: >=0.30
   :depends bioconductor-ensembldb: >=2.8
   :depends bioconductor-genomeinfodb: >=1.20
   :depends bioconductor-genomicfeatures: >=1.36
   :depends bioconductor-genomicranges: >=1.36
   :depends bioconductor-iranges: >=2.18.2
   :depends bioconductor-s4vectors: >=0.22
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-brio: >=0.3.7
   :depends r-goalie: >=0.3.7
   :depends r-syntactic: >=0.2.3
   :depends r-transformer: >=0.2.6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-freerange

   and update with::

      conda update r-freerange

   or use the docker container::

      docker pull quay.io/biocontainers/r-freerange:<tag>

   (see `r-freerange/tags`_ for valid values for ``<tag>``)


.. |downloads_r-freerange| image:: https://img.shields.io/conda/dn/bioconda/r-freerange.svg?style=flat
   :target: https://anaconda.org/bioconda/r-freerange
   :alt:   (downloads)
.. |docker_r-freerange| image:: https://quay.io/repository/biocontainers/r-freerange/status
   :target: https://quay.io/repository/biocontainers/r-freerange
.. _`r-freerange/tags`: https://quay.io/repository/biocontainers/r-freerange?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-freerange/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-freerange/README.html