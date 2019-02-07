.. title:: Package Recipe 'bioconductor-clomial'
.. highlight: bash


bioconductor-clomial
====================

.. conda:recipe:: bioconductor-clomial
   :replaces_section_title:

   Clomial fits binomial distributions to counts obtained from Next Gen Sequencing data of multiple samples of the same tumor. The trained parameters can be interpreted to infer the clonal structure of the tumor.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Clomial.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-clomial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clomial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clomial/meta.yaml>`_
   :links: biotools: :biotools:`clomial`

   


.. conda:package:: bioconductor-clomial

   |downloads_bioconductor-clomial| |docker_bioconductor-clomial|

   :versions: 1.18.1, 1.16.0, 1.14.0, 1.12.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrixstats`  :conda:package:`r-permute`  

   :required~by: |required_by_bioconductor-clomial|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clomial

   and update with::

      conda update bioconductor-clomial

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-clomial


.. |required_by_bioconductor-clomial| conda:required_by:: bioconductor-clomial
.. |downloads_bioconductor-clomial| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clomial.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-clomial| image:: https://quay.io/repository/biocontainers/bioconductor-clomial/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clomial







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clomial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clomial/README.html

