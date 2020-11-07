:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tbx20bamsubset'
.. highlight: bash

bioconductor-tbx20bamsubset
===========================

.. conda:recipe:: bioconductor-tbx20bamsubset
   :replaces_section_title:
   :noindex:

   Subset of BAM files from the \"TBX20\" experiment

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/TBX20BamSubset.html
   :license: LGPL
   :recipe: /`bioconductor-tbx20bamsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tbx20bamsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tbx20bamsubset/meta.yaml>`_

   Dual transcriptional activator and repressor roles of TBX20 regulate adult cardiac structure and function. A subset of the RNA\-Seq data.


.. conda:package:: bioconductor-tbx20bamsubset

   |downloads_bioconductor-tbx20bamsubset| |docker_bioconductor-tbx20bamsubset|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      

   
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tbx20bamsubset

   and update with::

      conda update bioconductor-tbx20bamsubset

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tbx20bamsubset:<tag>

   (see `bioconductor-tbx20bamsubset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tbx20bamsubset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tbx20bamsubset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tbx20bamsubset
   :alt:   (downloads)
.. |docker_bioconductor-tbx20bamsubset| image:: https://quay.io/repository/biocontainers/bioconductor-tbx20bamsubset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tbx20bamsubset
.. _`bioconductor-tbx20bamsubset/tags`: https://quay.io/repository/biocontainers/bioconductor-tbx20bamsubset?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tbx20bamsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tbx20bamsubset/README.html