:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-recountmethylation'
.. highlight: bash

bioconductor-recountmethylation
===============================

.. conda:recipe:: bioconductor-recountmethylation
   :replaces_section_title:
   :noindex:

   Access and Analyze DNA Methylation Array Databases

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/recountmethylation.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-recountmethylation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recountmethylation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recountmethylation/meta.yaml>`_

   Access cross\-study compilations of DNA methylation array databases. Database files can be downloaded and accessed using provided functions. Background about database file types \(HDF5 and HDF5\-SummarizedExperiment\)\, SummarizedExperiment classes\, and examples for data handling\, validation\, and analyses\, can be found in the package vignettes. Note the disclaimer on package load\, and consult the main manuscript for further info.


.. conda:package:: bioconductor-recountmethylation

   |downloads_bioconductor-recountmethylation| |docker_bioconductor-recountmethylation|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocfilecache: ``>=1.14.0,<1.15.0``
   :depends bioconductor-hdf5array: ``>=1.18.0,<1.19.0``
   :depends bioconductor-minfi: ``>=1.36.0,<1.37.0``
   :depends bioconductor-rhdf5: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-r.utils: 
   :depends r-rcurl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-recountmethylation

   and update with::

      conda update bioconductor-recountmethylation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-recountmethylation:<tag>

   (see `bioconductor-recountmethylation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-recountmethylation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-recountmethylation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-recountmethylation
   :alt:   (downloads)
.. |docker_bioconductor-recountmethylation| image:: https://quay.io/repository/biocontainers/bioconductor-recountmethylation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-recountmethylation
.. _`bioconductor-recountmethylation/tags`: https://quay.io/repository/biocontainers/bioconductor-recountmethylation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-recountmethylation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-recountmethylation/README.html