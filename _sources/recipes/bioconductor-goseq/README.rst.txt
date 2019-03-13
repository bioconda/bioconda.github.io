:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-goseq'
.. highlight: bash

bioconductor-goseq
==================

.. conda:recipe:: bioconductor-goseq
   :replaces_section_title:

   Detects Gene Ontology and\/or other user defined categories which are over\/under represented in RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/goseq.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-goseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goseq/meta.yaml>`_
   :links: biotools: :biotools:`goseq`

   


.. conda:package:: bioconductor-goseq

   |downloads_bioconductor-goseq| |docker_bioconductor-goseq|

   :versions: 1.34.1-0, 1.34.0-0, 1.32.0-0, 1.30.0-0, 1.28.0-0, 1.26.0-0, 1.22.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-genelendatabase: >=1.18.0,<1.19.0
   
   :depends bioconductor-go.db: >=3.7.0,<3.8.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-biasedurn: 
   
   :depends r-mgcv: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-goseq

   and update with::

      conda update bioconductor-goseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-goseq:<tag>

   (see `bioconductor-goseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-goseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-goseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-goseq| image:: https://quay.io/repository/biocontainers/bioconductor-goseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-goseq
.. _`bioconductor-goseq/tags`: https://quay.io/repository/biocontainers/bioconductor-goseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-goseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-goseq/README.html