:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tigre'
.. highlight: bash

bioconductor-tigre
==================

.. conda:recipe:: bioconductor-tigre
   :replaces_section_title:

   The tigre package implements our methodology of Gaussian process differential equation models for analysis of gene expression time series from single input motif networks. The package can be used for inferring unobserved transcription factor \(TF\) protein concentrations from expression measurements of known target genes\, or for ranking candidate targets of a TF.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/tigre.html
   :license: AGPL-3
   :recipe: /`bioconductor-tigre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tigre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tigre/meta.yaml>`_
   :links: biotools: :biotools:`tigre`

   


.. conda:package:: bioconductor-tigre

   |downloads_bioconductor-tigre| |docker_bioconductor-tigre|

   :versions: 1.36.0-0, 1.34.0-0, 1.32.0-0, 1.30.0-0
   
   :depends bioconductor-annotate: >=1.60.0,<1.61.0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dbi: 
   
   :depends r-gplots: 
   
   :depends r-rsqlite: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tigre

   and update with::

      conda update bioconductor-tigre

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tigre:<tag>

   (see `bioconductor-tigre/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tigre| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tigre.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tigre| image:: https://quay.io/repository/biocontainers/bioconductor-tigre/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tigre
.. _`bioconductor-tigre/tags`: https://quay.io/repository/biocontainers/bioconductor-tigre?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tigre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tigre/README.html