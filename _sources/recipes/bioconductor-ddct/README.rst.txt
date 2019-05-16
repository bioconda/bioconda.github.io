:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ddct'
.. highlight: bash

bioconductor-ddct
=================

.. conda:recipe:: bioconductor-ddct
   :replaces_section_title:

   The Delta\-Delta\-Ct \(ddCt\) Algorithm is an approximation method to determine relative gene expression with quantitative real\-time PCR \(qRT\-PCR\) experiments. Compared to other approaches\, it requires no standard curve for each primer\-target pair\, therefore reducing the working load and yet returning accurate enough results as long as the assumptions of the amplification efficiency hold. The ddCt package implements a pipeline to collect\, analyse and visualize qRT\-PCR results\, for example those from TaqMan SDM software\, mainly using the ddCt method. The pipeline can be either invoked by a script in command\-line or through the API consisting of S4\-Classes\, methods and functions.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ddCt.html
   :license: LGPL-3
   :recipe: /`bioconductor-ddct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ddct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ddct/meta.yaml>`_
   :links: biotools: :biotools:`ddct`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-ddct

   |downloads_bioconductor-ddct| |docker_bioconductor-ddct|

   :versions: 1.38.0-0, 1.36.0-0, 1.34.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-lattice: 
   :depends r-rcolorbrewer: >=0.1-3
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ddct

   and update with::

      conda update bioconductor-ddct

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ddct:<tag>

   (see `bioconductor-ddct/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ddct| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ddct.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ddct
   :alt:   (downloads)
.. |docker_bioconductor-ddct| image:: https://quay.io/repository/biocontainers/bioconductor-ddct/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ddct
.. _`bioconductor-ddct/tags`: https://quay.io/repository/biocontainers/bioconductor-ddct?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ddct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ddct/README.html