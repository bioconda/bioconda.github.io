:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-minfidataepic'
.. highlight: bash

bioconductor-minfidataepic
==========================

.. conda:recipe:: bioconductor-minfidataepic
   :replaces_section_title:
   :noindex:

   Example data for the Illumina Methylation EPIC array

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/minfiDataEPIC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minfidataepic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfidataepic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfidataepic/meta.yaml>`_

   Data from 3 technical replicates of the cell line GM12878 from the EPIC methylation array.


.. conda:package:: bioconductor-minfidataepic

   |downloads_bioconductor-minfidataepic| |docker_bioconductor-minfidataepic|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      

   
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylationepicmanifest: ``>=0.3.0,<0.4.0``
   :depends bioconductor-minfi: ``>=1.36.0,<1.37.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-minfidataepic

   and update with::

      conda update bioconductor-minfidataepic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-minfidataepic:<tag>

   (see `bioconductor-minfidataepic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-minfidataepic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minfidataepic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-minfidataepic
   :alt:   (downloads)
.. |docker_bioconductor-minfidataepic| image:: https://quay.io/repository/biocontainers/bioconductor-minfidataepic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minfidataepic
.. _`bioconductor-minfidataepic/tags`: https://quay.io/repository/biocontainers/bioconductor-minfidataepic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minfidataepic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minfidataepic/README.html