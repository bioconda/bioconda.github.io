:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gpaexample'
.. highlight: bash

bioconductor-gpaexample
=======================

.. conda:recipe:: bioconductor-gpaexample
   :replaces_section_title:
   :noindex:

   Example data for the GPA package \(Genetic analysis incorporating Pleiotropy and Annotation\)

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/gpaExample.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gpaexample <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpaexample>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpaexample/meta.yaml>`_

   Example data for the GPA package\, consisting of the p\-values of 1\,219\,805 SNPs for five psychiatric disorder GWAS from the psychiatric GWAS consortium \(PGC\)\, with the annotation data using genes preferentially expressed in the central nervous system \(CNS\).


.. conda:package:: bioconductor-gpaexample

   |downloads_bioconductor-gpaexample| |docker_bioconductor-gpaexample|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gpaexample

   and update with::

      conda update bioconductor-gpaexample

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gpaexample:<tag>

   (see `bioconductor-gpaexample/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gpaexample| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gpaexample.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gpaexample
   :alt:   (downloads)
.. |docker_bioconductor-gpaexample| image:: https://quay.io/repository/biocontainers/bioconductor-gpaexample/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gpaexample
.. _`bioconductor-gpaexample/tags`: https://quay.io/repository/biocontainers/bioconductor-gpaexample?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gpaexample/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gpaexample/README.html