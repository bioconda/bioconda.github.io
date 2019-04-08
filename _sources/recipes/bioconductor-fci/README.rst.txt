:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fci'
.. highlight: bash

bioconductor-fci
================

.. conda:recipe:: bioconductor-fci
   :replaces_section_title:

   \(f\-divergence Cutoff Index\)\, is to find DEGs in the transcriptomic \& proteomic data\, and identify DEGs by computing the difference between the distribution of fold\-changes for the control\-control and remaining \(non\-differential\) case\-control gene expression ratio data. fCI provides several advantages compared to existing methods.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/fCI.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-fci <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fci>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fci/meta.yaml>`_

   


.. conda:package:: bioconductor-fci

   |downloads_bioconductor-fci| |docker_bioconductor-fci|

   :versions: 1.12.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-fnn: 
   :depends r-gtools: 
   :depends r-psych: 
   :depends r-rgl: 
   :depends r-venndiagram: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fci

   and update with::

      conda update bioconductor-fci

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fci:<tag>

   (see `bioconductor-fci/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fci| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fci.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fci| image:: https://quay.io/repository/biocontainers/bioconductor-fci/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fci
.. _`bioconductor-fci/tags`: https://quay.io/repository/biocontainers/bioconductor-fci?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fci/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fci/README.html