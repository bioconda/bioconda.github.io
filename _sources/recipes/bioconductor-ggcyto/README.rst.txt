:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggcyto'
.. highlight: bash

bioconductor-ggcyto
===================

.. conda:recipe:: bioconductor-ggcyto
   :replaces_section_title:

   With the dedicated fortify method implemented for flowSet\, ncdfFlowSet and GatingSet classes\, both raw and gated flow cytometry data can be plotted directly with ggplot. ggcyto wrapper and some customed layers also make it easy to add gates and population statistics to the plot.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ggcyto.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggcyto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggcyto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggcyto/meta.yaml>`_
   :links: biotools: :biotools:`ggcyto`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-ggcyto

   |downloads_bioconductor-ggcyto| |docker_bioconductor-ggcyto|

   :versions: 1.10.2-0, 1.10.0-0, 1.8.2-0, 1.6.0-0, 1.4.1-0, 1.4.0-0
   
   :depends bioconductor-flowcore: >=1.48.0,<1.49.0
   :depends bioconductor-flowworkspace: >=3.30.0,<3.31.0
   :depends bioconductor-ncdfflow: >=2.28.0,<2.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: 
   :depends r-ggplot2: >=2.2.1.9000
   :depends r-gridextra: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ggcyto

   and update with::

      conda update bioconductor-ggcyto

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggcyto:<tag>

   (see `bioconductor-ggcyto/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggcyto| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggcyto.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggcyto
   :alt:   (downloads)
.. |docker_bioconductor-ggcyto| image:: https://quay.io/repository/biocontainers/bioconductor-ggcyto/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggcyto
.. _`bioconductor-ggcyto/tags`: https://quay.io/repository/biocontainers/bioconductor-ggcyto?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggcyto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggcyto/README.html