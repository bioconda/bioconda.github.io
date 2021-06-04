:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coregx'
.. highlight: bash

bioconductor-coregx
===================

.. conda:recipe:: bioconductor-coregx
   :replaces_section_title:
   :noindex:

   Classes and Functions to Serve as the Basis for Other \'Gx\' Packages

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/CoreGx.html
   :license: GPL-3
   :recipe: /`bioconductor-coregx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coregx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coregx/meta.yaml>`_

   A collection of functions and classes which serve as the foundation for our lab\'s suite of R packages\, such as \'PharmacoGx\' and \'RadioGx\'. This package was created to abstract shared functionality from other lab package releases to increase ease of maintainability and reduce code repetition in current and future \'Gx\' suite programs. Major features include a \'CoreSet\' class\, from which \'RadioSet\' and \'PharmacoSet\' are derived\, along with get and set methods for each respective slot. Additional functions related to fitting and plotting dose response curves\, quantifying statistical correlation and calculating area under the curve \(AUC\) or survival fraction \(SF\) are included. For more details please see the included documentation\, as well as\: Smirnov\, P.\, Safikhani\, Z.\, El\-Hachem\, N.\, Wang\, D.\, She\, A.\, Olsen\, C.\, Freeman\, M.\, Selby\, H.\, Gendoo\, D.\, Grossman\, P.\, Beck\, A.\, Aerts\, H.\, Lupien\, M.\, Goldenberg\, A. \(2015\) \<doi\:10.1093\/bioinformatics\/btv723\>. Manem\, V.\, Labie\, M.\, Smirnov\, P.\, Kofia\, V.\, Freeman\, M.\, Koritzinksy\, M.\, Abazeed\, M.\, Haibe\-Kains\, B.\, Bratman\, S. \(2018\) \<doi\:10.1101\/449793\>.


.. conda:package:: bioconductor-coregx

   |downloads_bioconductor-coregx| |docker_bioconductor-coregx|

   :versions:
      
      

      ``1.4.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-matrixgenerics: ``>=1.4.0,<1.5.0``
   :depends bioconductor-multiassayexperiment: ``>=1.18.0,<1.19.0``
   :depends bioconductor-piano: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-crayon: 
   :depends r-data.table: 
   :depends r-glue: 
   :depends r-lsa: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-coregx

   and update with::

      conda update bioconductor-coregx

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-coregx:<tag>

   (see `bioconductor-coregx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-coregx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coregx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-coregx
   :alt:   (downloads)
.. |docker_bioconductor-coregx| image:: https://quay.io/repository/biocontainers/bioconductor-coregx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coregx
.. _`bioconductor-coregx/tags`: https://quay.io/repository/biocontainers/bioconductor-coregx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coregx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coregx/README.html