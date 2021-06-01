:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cll'
.. highlight: bash

bioconductor-cll
================

.. conda:recipe:: bioconductor-cll
   :replaces_section_title:
   :noindex:

   A Package for CLL Gene Expression Data

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/CLL.html
   :license: LGPL
   :recipe: /`bioconductor-cll <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cll>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cll/meta.yaml>`_

   The CLL package contains the chronic lymphocytic leukemia \(CLL\) gene expression data.  The CLL data had 24 samples that were either classified as progressive or stable in regards to disease progression.  The data came from Dr. Sabina Chiaretti at Division of Hematology\, Department of Cellular Biotechnologies and Hematology\, University La Sapienza\, Rome\, Italy and Dr. Jerome Ritz at Department of Medicine\, Brigham and Women\'s Hospital\, Harvard Medical School\, Boston\, Massachusetts.


.. conda:package:: bioconductor-cll

   |downloads_bioconductor-cll| |docker_bioconductor-cll|

   :versions:
      
      

      ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      

   
   :depends bioconductor-affy: ``>=1.70.0,<1.71.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cll

   and update with::

      conda update bioconductor-cll

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cll:<tag>

   (see `bioconductor-cll/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cll| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cll.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cll
   :alt:   (downloads)
.. |docker_bioconductor-cll| image:: https://quay.io/repository/biocontainers/bioconductor-cll/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cll
.. _`bioconductor-cll/tags`: https://quay.io/repository/biocontainers/bioconductor-cll?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cll/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cll/README.html