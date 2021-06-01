:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-indeed'
.. highlight: bash

bioconductor-indeed
===================

.. conda:recipe:: bioconductor-indeed
   :replaces_section_title:
   :noindex:

   Interactive Visualization of Integrated Differential Expression and Differential Network Analysis for Biomarker Candidate Selection Package

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/INDEED.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-indeed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-indeed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-indeed/meta.yaml>`_

   An R package for integrated differential expression and differential network analysis based on omic data for cancer biomarker discovery. Both correlation and partial correlation can be used to generate differential network to aid the traditional differential expression analysis to identify changes between biomolecules on both their expression and pairwise association levels. A detailed description of the methodology has been published in Methods journal \(PMID\: 27592383\). An interactive visualization feature allows for the exploration and selection of candidate biomarkers.


.. conda:package:: bioconductor-indeed

   |downloads_bioconductor-indeed| |docker_bioconductor-indeed|

   :versions:
      
      

      ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-devtools: ``>=1.13.0``
   :depends r-glasso: ``>=1.8``
   :depends r-igraph: ``>=1.2.4``
   :depends r-visnetwork: ``>=2.0.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-indeed

   and update with::

      conda update bioconductor-indeed

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-indeed:<tag>

   (see `bioconductor-indeed/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-indeed| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-indeed.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-indeed
   :alt:   (downloads)
.. |docker_bioconductor-indeed| image:: https://quay.io/repository/biocontainers/bioconductor-indeed/status
   :target: https://quay.io/repository/biocontainers/bioconductor-indeed
.. _`bioconductor-indeed/tags`: https://quay.io/repository/biocontainers/bioconductor-indeed?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-indeed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-indeed/README.html