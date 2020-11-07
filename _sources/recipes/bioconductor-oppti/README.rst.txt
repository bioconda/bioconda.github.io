:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oppti'
.. highlight: bash

bioconductor-oppti
==================

.. conda:recipe:: bioconductor-oppti
   :replaces_section_title:
   :noindex:

   Outlier Protein and Phosphosite Target Identifier

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/oppti.html
   :license: MIT
   :recipe: /`bioconductor-oppti <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oppti>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oppti/meta.yaml>`_

   The aim of oppti is to analyze protein \(and phosphosite\) expressions to find outlying markers for each sample in the given cohort\(s\) for the discovery of personalized actionable targets.


.. conda:package:: bioconductor-oppti

   |downloads_bioconductor-oppti| |docker_bioconductor-oppti|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-devtools: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-reshape: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oppti

   and update with::

      conda update bioconductor-oppti

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oppti:<tag>

   (see `bioconductor-oppti/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oppti| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oppti.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oppti
   :alt:   (downloads)
.. |docker_bioconductor-oppti| image:: https://quay.io/repository/biocontainers/bioconductor-oppti/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oppti
.. _`bioconductor-oppti/tags`: https://quay.io/repository/biocontainers/bioconductor-oppti?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oppti/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oppti/README.html