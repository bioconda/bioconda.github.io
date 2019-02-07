.. title:: Package Recipe 'bioconductor-cellmapper'
.. highlight: bash


bioconductor-cellmapper
=======================

.. conda:recipe:: bioconductor-cellmapper
   :replaces_section_title:

   Infers cell type\-specific expression based on co\-expression similarity with known cell type marker genes. Can make accurate predictions using publicly available expression data\, even when a cell type has not been isolated before.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CellMapper.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cellmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmapper/meta.yaml>`_
   :links: biotools: :biotools:`cellmapper`

   


.. conda:package:: bioconductor-cellmapper

   |downloads_bioconductor-cellmapper| |docker_bioconductor-cellmapper|

   :versions: 1.8.0, 1.6.0, 1.4.0, 1.2.0

   :depends: :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-cellmapper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellmapper

   and update with::

      conda update bioconductor-cellmapper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cellmapper


.. |required_by_bioconductor-cellmapper| conda:required_by:: bioconductor-cellmapper
.. |downloads_bioconductor-cellmapper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellmapper.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cellmapper| image:: https://quay.io/repository/biocontainers/bioconductor-cellmapper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellmapper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellmapper/README.html

