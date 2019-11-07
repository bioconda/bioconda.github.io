:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-keggprofile'
.. highlight: bash

bioconductor-keggprofile
========================

.. conda:recipe:: bioconductor-keggprofile
   :replaces_section_title:

   An annotation and visualization package for multi\-types and multi\-groups expression data in KEGG pathway

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/KEGGprofile.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-keggprofile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggprofile>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggprofile/meta.yaml>`_

   KEGGprofile is an annotation and visualization tool which integrated the expression profiles and the function annotation in KEGG pathway maps. The multi\-types and multi\-groups expression data can be visualized in one pathway map. KEGGprofile facilitated more detailed analysis about the specific function changes inner pathway or temporal correlations in different genes and samples.


.. conda:package:: bioconductor-keggprofile

   |downloads_bioconductor-keggprofile| |docker_bioconductor-keggprofile|

   :versions: 1.28.0-0, 1.26.0-1, 1.24.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biomart: >=2.42.0,<2.43.0
   :depends bioconductor-kegg.db: >=3.2.0,<3.3.0
   :depends bioconductor-keggrest: >=1.26.0,<1.27.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-ggplot2: 
   :depends r-png: 
   :depends r-rcurl: 
   :depends r-reshape2: 
   :depends r-teachingdemos: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-keggprofile

   and update with::

      conda update bioconductor-keggprofile

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-keggprofile:<tag>

   (see `bioconductor-keggprofile/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-keggprofile| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-keggprofile.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-keggprofile
   :alt:   (downloads)
.. |docker_bioconductor-keggprofile| image:: https://quay.io/repository/biocontainers/bioconductor-keggprofile/status
   :target: https://quay.io/repository/biocontainers/bioconductor-keggprofile
.. _`bioconductor-keggprofile/tags`: https://quay.io/repository/biocontainers/bioconductor-keggprofile?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-keggprofile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-keggprofile/README.html