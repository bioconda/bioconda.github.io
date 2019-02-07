.. title:: Package Recipe 'bioconductor-mdgsa'
.. highlight: bash


bioconductor-mdgsa
==================

.. conda:recipe:: bioconductor-mdgsa
   :replaces_section_title:

   Functions to preform a Gene Set Analysis in several genomic dimensions. Including methods for miRNAs.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/mdgsa.html
   :license: GPL
   :recipe: /`bioconductor-mdgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdgsa/meta.yaml>`_
   :links: biotools: :biotools:`mdgsa`

   


.. conda:package:: bioconductor-mdgsa

   |downloads_bioconductor-mdgsa| |docker_bioconductor-mdgsa|

   :versions: 1.14.0, 1.12.1, 1.10.0, 1.8.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-kegg.db` >=3.2.0,<3.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-dbi`  :conda:package:`r-matrix`  

   :required~by: |required_by_bioconductor-mdgsa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mdgsa

   and update with::

      conda update bioconductor-mdgsa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mdgsa


.. |required_by_bioconductor-mdgsa| conda:required_by:: bioconductor-mdgsa
.. |downloads_bioconductor-mdgsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mdgsa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mdgsa| image:: https://quay.io/repository/biocontainers/bioconductor-mdgsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mdgsa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mdgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mdgsa/README.html

