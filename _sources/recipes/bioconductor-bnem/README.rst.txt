:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bnem'
.. highlight: bash

bioconductor-bnem
=================

.. conda:recipe:: bioconductor-bnem
   :replaces_section_title:
   :noindex:

   Training of logical models from indirect measurements of perturbation experiments

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/bnem.html
   :license: GPL-3
   :recipe: /`bioconductor-bnem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bnem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bnem/meta.yaml>`_

   bnem combines the use of indirect measurements of Nested Effects Models \(package mnem\) with the Boolean networks of CellNOptR. Perturbation experiments of signalling nodes in cells are analysed for their effect on the global gene expression profile. Those profiles give evidence for the Boolean regulation of down\-stream nodes in the network\, e.g.\, whether two parents activate their child independently \(OR\-gate\) or jointly \(AND\-gate\).


.. conda:package:: bioconductor-bnem

   |downloads_bioconductor-bnem| |docker_bioconductor-bnem|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-affy: ``>=1.70.0,<1.71.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-cellnoptr: ``>=1.38.0,<1.39.0``
   :depends bioconductor-epinem: ``>=1.16.0,<1.17.0``
   :depends bioconductor-graph: ``>=1.70.0,<1.71.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-mnem: ``>=1.8.0,<1.9.0``
   :depends bioconductor-rgraphviz: ``>=2.36.0,<2.37.0``
   :depends bioconductor-sva: ``>=3.40.0,<3.41.0``
   :depends bioconductor-vsn: ``>=3.60.0,<3.61.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-binom: 
   :depends r-cluster: 
   :depends r-flexclust: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :depends r-rmarkdown: 
   :depends r-snowfall: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bnem

   and update with::

      conda update bioconductor-bnem

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bnem:<tag>

   (see `bioconductor-bnem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bnem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bnem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bnem
   :alt:   (downloads)
.. |docker_bioconductor-bnem| image:: https://quay.io/repository/biocontainers/bioconductor-bnem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bnem
.. _`bioconductor-bnem/tags`: https://quay.io/repository/biocontainers/bioconductor-bnem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bnem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bnem/README.html