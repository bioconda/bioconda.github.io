:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hiiragi2013'
.. highlight: bash

bioconductor-hiiragi2013
========================

.. conda:recipe:: bioconductor-hiiragi2013
   :replaces_section_title:

   This package contains the experimental data and a complete executable transcript \(vignette\) of the statistical analysis presented in the paper \"Cell\-to\-cell expression variability followed by signal reinforcement progressively segregates early mouse lineages\" by Y. Ohnishi\, W. Huber\, A. Tsumura\, M. Kang\, P. Xenopoulos\, K. Kurimoto\, A. K. Oles\, M. J. Arauzo\-Bravo\, M. Saitou\, A.\-K. Hadjantonakis and T. Hiiragi\; Nature Cell Biology \(2014\) 16\(1\)\: 27\-37. doi\: 10.1038\/ncb2881.\"

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/Hiiragi2013.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hiiragi2013 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiiragi2013>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiiragi2013/meta.yaml>`_

   


.. conda:package:: bioconductor-hiiragi2013

   |downloads_bioconductor-hiiragi2013| |docker_bioconductor-hiiragi2013|

   :versions: 1.21.0-0, 1.20.0-1, 1.18.0-0
   
   :depends bioconductor-affy: >=1.64.0,<1.65.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-genefilter: >=1.68.0,<1.69.0
   :depends bioconductor-geneplotter: >=1.64.0,<1.65.0
   :depends bioconductor-keggrest: >=1.26.0,<1.27.0
   :depends bioconductor-mouse4302.db: >=3.2.0,<3.3.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-boot: 
   :depends r-clue: 
   :depends r-cluster: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-mass: 
   :depends r-rcolorbrewer: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hiiragi2013

   and update with::

      conda update bioconductor-hiiragi2013

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hiiragi2013:<tag>

   (see `bioconductor-hiiragi2013/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hiiragi2013| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hiiragi2013.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hiiragi2013
   :alt:   (downloads)
.. |docker_bioconductor-hiiragi2013| image:: https://quay.io/repository/biocontainers/bioconductor-hiiragi2013/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hiiragi2013
.. _`bioconductor-hiiragi2013/tags`: https://quay.io/repository/biocontainers/bioconductor-hiiragi2013?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hiiragi2013/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hiiragi2013/README.html