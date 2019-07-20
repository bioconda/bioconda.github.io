:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-empiricalbrownsmethod'
.. highlight: bash

bioconductor-empiricalbrownsmethod
==================================

.. conda:recipe:: bioconductor-empiricalbrownsmethod
   :replaces_section_title:

   Combining P\-values from multiple statistical tests is common in bioinformatics. However\, this procedure is non\-trivial for dependent P\-values. This package implements an empirical adaptation of Brown’s Method \(an extension of Fisher’s Method\) for combining dependent P\-values which is appropriate for highly correlated data sets found in high\-throughput biological experiments.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/EmpiricalBrownsMethod.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-empiricalbrownsmethod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-empiricalbrownsmethod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-empiricalbrownsmethod/meta.yaml>`_
   :links: biotools: :biotools:`empiricalbrownsmethod`, doi: :doi:`10.1093/bioinformatics/btw438`

   


.. conda:package:: bioconductor-empiricalbrownsmethod

   |downloads_bioconductor-empiricalbrownsmethod| |docker_bioconductor-empiricalbrownsmethod|

   :versions: 1.12.0-1, 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-empiricalbrownsmethod

   and update with::

      conda update bioconductor-empiricalbrownsmethod

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-empiricalbrownsmethod:<tag>

   (see `bioconductor-empiricalbrownsmethod/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-empiricalbrownsmethod| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-empiricalbrownsmethod.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-empiricalbrownsmethod
   :alt:   (downloads)
.. |docker_bioconductor-empiricalbrownsmethod| image:: https://quay.io/repository/biocontainers/bioconductor-empiricalbrownsmethod/status
   :target: https://quay.io/repository/biocontainers/bioconductor-empiricalbrownsmethod
.. _`bioconductor-empiricalbrownsmethod/tags`: https://quay.io/repository/biocontainers/bioconductor-empiricalbrownsmethod?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-empiricalbrownsmethod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-empiricalbrownsmethod/README.html