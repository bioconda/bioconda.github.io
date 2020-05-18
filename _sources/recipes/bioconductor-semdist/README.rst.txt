:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-semdist'
.. highlight: bash

bioconductor-semdist
====================

.. conda:recipe:: bioconductor-semdist
   :replaces_section_title:

   Information Accretion\-based Function Predictor Evaluation

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/SemDist.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-semdist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-semdist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-semdist/meta.yaml>`_
   :links: biotools: :biotools:`semdist`, doi: :doi:`10.1038/nmeth.3252`

   This package implements methods to calculate information accretion for a given version of the gene ontology and uses this data to calculate remaining uncertainty\, misinformation\, and semantic similarity for given sets of predicted annotations and true annotations from a protein function predictor.


.. conda:package:: bioconductor-semdist

   |downloads_bioconductor-semdist| |docker_bioconductor-semdist|

   :versions: 1.22.0-0, 1.20.0-0, 1.18.0-1, 1.16.0-1, 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-annotate: >=1.66.0,<1.67.0
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-go.db: >=3.11.0,<3.12.0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-semdist

   and update with::

      conda update bioconductor-semdist

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-semdist:<tag>

   (see `bioconductor-semdist/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-semdist| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-semdist.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-semdist
   :alt:   (downloads)
.. |docker_bioconductor-semdist| image:: https://quay.io/repository/biocontainers/bioconductor-semdist/status
   :target: https://quay.io/repository/biocontainers/bioconductor-semdist
.. _`bioconductor-semdist/tags`: https://quay.io/repository/biocontainers/bioconductor-semdist?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-semdist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-semdist/README.html