:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-consensusov'
.. highlight: bash

bioconductor-consensusov
========================

.. conda:recipe:: bioconductor-consensusov
   :replaces_section_title:
   :noindex:

   Gene expression\-based subtype classification for high\-grade serous ovarian cancer

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/consensusOV.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-consensusov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusov/meta.yaml>`_

   This package implements four major subtype classifiers for high\-grade serous \(HGS\) ovarian cancer as described by Helland et al. \(PLoS One\, 2011\)\, Bentink et al. \(PLoS One\, 2012\)\, Verhaak et al. \(J Clin Invest\, 2013\)\, and Konecny et al. \(J Natl Cancer Inst\, 2014\). In addition\, the package implements a consensus classifier\, which consolidates and improves on the robustness of the proposed subtype classifiers\, thereby providing reliable stratification of patients with HGS ovarian tumors of clearly defined subtype.


.. conda:package:: bioconductor-consensusov

   |downloads_bioconductor-consensusov| |docker_bioconductor-consensusov|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-genefu: ``>=2.20.0,<2.21.0``
   :depends bioconductor-gsva: ``>=1.36.0,<1.37.0``
   :depends bioconductor-limma: ``>=3.44.0,<3.45.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gdata: 
   :depends r-matrixstats: 
   :depends r-randomforest: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-consensusov

   and update with::

      conda update bioconductor-consensusov

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-consensusov:<tag>

   (see `bioconductor-consensusov/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-consensusov| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-consensusov.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-consensusov
   :alt:   (downloads)
.. |docker_bioconductor-consensusov| image:: https://quay.io/repository/biocontainers/bioconductor-consensusov/status
   :target: https://quay.io/repository/biocontainers/bioconductor-consensusov
.. _`bioconductor-consensusov/tags`: https://quay.io/repository/biocontainers/bioconductor-consensusov?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-consensusov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-consensusov/README.html