:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowploidy'
.. highlight: bash

bioconductor-flowploidy
=======================

.. conda:recipe:: bioconductor-flowploidy
   :replaces_section_title:

   Determine sample ploidy via flow cytometry histogram analysis. Reads Flow Cytometry Standard \(FCS\) files via the flowCore bioconductor package\, and provides functions for determining the DNA ploidy of samples based on internal standards.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowPloidy.html
   :license: GPL-3
   :recipe: /`bioconductor-flowploidy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowploidy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowploidy/meta.yaml>`_
   :links: biotools: :biotools:`flowploidy`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-flowploidy

   |downloads_bioconductor-flowploidy| |docker_bioconductor-flowploidy|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.1-0
   
   :depends bioconductor-flowcore: >=1.48.0,<1.49.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-car: 
   
   :depends r-catools: 
   
   :depends r-knitr: 
   
   :depends r-minpack.lm: 
   
   :depends r-rmarkdown: 
   
   :depends r-shiny: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowploidy

   and update with::

      conda update bioconductor-flowploidy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowploidy:<tag>

   (see `bioconductor-flowploidy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowploidy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowploidy.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowploidy| image:: https://quay.io/repository/biocontainers/bioconductor-flowploidy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowploidy
.. _`bioconductor-flowploidy/tags`: https://quay.io/repository/biocontainers/bioconductor-flowploidy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowploidy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowploidy/README.html