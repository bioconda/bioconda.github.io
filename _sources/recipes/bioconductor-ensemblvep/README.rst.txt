:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ensemblvep'
.. highlight: bash

bioconductor-ensemblvep
=======================

.. conda:recipe:: bioconductor-ensemblvep
   :replaces_section_title:
   :noindex:

   R Interface to Ensembl Variant Effect Predictor

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ensemblVEP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ensemblvep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensemblvep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensemblvep/meta.yaml>`_
   :links: biotools: :biotools:`ensemblvep`, doi: :doi:`10.1186/s13059-016-0974-4`

   Query the Ensembl Variant Effect Predictor via the perl API.


.. conda:package:: bioconductor-ensemblvep

   |downloads_bioconductor-ensemblvep| |docker_bioconductor-ensemblvep|

   :versions:
      
      

      ``1.34.0-0``,  ``1.32.1-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-variantannotation: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ensemblvep

   and update with::

      conda update bioconductor-ensemblvep

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ensemblvep:<tag>

   (see `bioconductor-ensemblvep/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ensemblvep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ensemblvep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ensemblvep
   :alt:   (downloads)
.. |docker_bioconductor-ensemblvep| image:: https://quay.io/repository/biocontainers/bioconductor-ensemblvep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ensemblvep
.. _`bioconductor-ensemblvep/tags`: https://quay.io/repository/biocontainers/bioconductor-ensemblvep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ensemblvep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ensemblvep/README.html