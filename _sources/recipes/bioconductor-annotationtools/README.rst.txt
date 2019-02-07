.. title:: Package Recipe 'bioconductor-annotationtools'
.. highlight: bash


bioconductor-annotationtools
============================

.. conda:recipe:: bioconductor-annotationtools
   :replaces_section_title:

   Functions to annotate microarrays\, find orthologs\, and integrate heterogeneous gene expression profiles using annotation and other molecular biology information available as flat file database \(plain text files\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/annotationTools.html
   :license: GPL
   :recipe: /`bioconductor-annotationtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationtools/meta.yaml>`_
   :links: biotools: :biotools:`annotationtools`

   


.. conda:package:: bioconductor-annotationtools

   |downloads_bioconductor-annotationtools| |docker_bioconductor-annotationtools|

   :versions: 1.56.0, 1.54.0, 1.52.0, 1.50.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-annotationtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annotationtools

   and update with::

      conda update bioconductor-annotationtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-annotationtools


.. |required_by_bioconductor-annotationtools| conda:required_by:: bioconductor-annotationtools
.. |downloads_bioconductor-annotationtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationtools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-annotationtools| image:: https://quay.io/repository/biocontainers/bioconductor-annotationtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationtools/README.html

