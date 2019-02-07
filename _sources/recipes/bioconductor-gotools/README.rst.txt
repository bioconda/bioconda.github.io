.. title:: Package Recipe 'bioconductor-gotools'
.. highlight: bash


bioconductor-gotools
====================

.. conda:recipe:: bioconductor-gotools
   :replaces_section_title:

   Wraper functions for description\/comparison of oligo ID list using Gene Ontology database

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/goTools.html
   :license: GPL-2
   :recipe: /`bioconductor-gotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gotools/meta.yaml>`_
   :links: biotools: :biotools:`gotools`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-gotools

   |downloads_bioconductor-gotools| |docker_bioconductor-gotools|

   :versions: 1.56.0, 1.54.0, 1.52.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-gotools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gotools

   and update with::

      conda update bioconductor-gotools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gotools


.. |required_by_bioconductor-gotools| conda:required_by:: bioconductor-gotools
.. |downloads_bioconductor-gotools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gotools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gotools| image:: https://quay.io/repository/biocontainers/bioconductor-gotools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gotools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gotools/README.html

