:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gep2pep'
.. highlight: bash

bioconductor-gep2pep
====================

.. conda:recipe:: bioconductor-gep2pep
   :replaces_section_title:
   :noindex:

   Creation and Analysis of Pathway Expression Profiles \(PEPs\)

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/gep2pep.html
   :license: GPL-3
   :recipe: /`bioconductor-gep2pep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gep2pep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gep2pep/meta.yaml>`_

   Pathway Expression Profiles \(PEPs\) are based on the expression of pathways \(defined as sets of genes\) as opposed to individual genes. This package converts gene expression profiles to PEPs and performs enrichment analysis of both pathways and experimental conditions\, such as \"drug set enrichment analysis\" and \"gene2drug\" drug discovery analysis respectively.


.. conda:package:: bioconductor-gep2pep

   |downloads_bioconductor-gep2pep| |docker_bioconductor-gep2pep|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-gseabase: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rhdf5: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-digest: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-repo: ``>=2.1.1``
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gep2pep

   and update with::

      conda update bioconductor-gep2pep

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gep2pep:<tag>

   (see `bioconductor-gep2pep/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gep2pep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gep2pep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gep2pep
   :alt:   (downloads)
.. |docker_bioconductor-gep2pep| image:: https://quay.io/repository/biocontainers/bioconductor-gep2pep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gep2pep
.. _`bioconductor-gep2pep/tags`: https://quay.io/repository/biocontainers/bioconductor-gep2pep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gep2pep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gep2pep/README.html