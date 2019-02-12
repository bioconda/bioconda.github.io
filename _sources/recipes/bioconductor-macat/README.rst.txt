:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macat'
.. highlight: bash

bioconductor-macat
==================

.. conda:recipe:: bioconductor-macat
   :replaces_section_title:

   This library contains functions to investigate links between differential gene expression and the chromosomal localization of the genes. MACAT is motivated by the common observation of phenomena involving large chromosomal regions in tumor cells. MACAT is the implementation of a statistical approach for identifying significantly differentially expressed chromosome regions. The functions have been tested on a publicly available data set about acute lymphoblastic leukemia \(Yeoh et al.Cancer Cell 2002\)\, which is provided in the library \'stjudem\'.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/macat.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-macat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macat/meta.yaml>`_
   :links: biotools: :biotools:`macat`

   


.. conda:package:: bioconductor-macat

   |downloads_bioconductor-macat| |docker_bioconductor-macat|

   :versions: 1.56.0-0, 1.54.0-0, 1.52.0-0, 1.50.0-0
   
   :depends bioconductor-annotate: >=1.60.0,<1.61.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-macat

   and update with::

      conda update bioconductor-macat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-macat:<tag>

   (see `bioconductor-macat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macat.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-macat| image:: https://quay.io/repository/biocontainers/bioconductor-macat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macat
.. _`bioconductor-macat/tags`: https://quay.io/repository/biocontainers/bioconductor-macat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macat/README.html