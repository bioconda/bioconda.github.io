:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hcaexplorer'
.. highlight: bash

bioconductor-hcaexplorer
========================

.. conda:recipe:: bioconductor-hcaexplorer
   :replaces_section_title:

   Browse the Human Cell Atlas data portal

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/HCAExplorer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hcaexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hcaexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hcaexplorer/meta.yaml>`_

   Search\, browse\, reference\, and download resources from the Human Cell Atlas data portal. Development of this package is supported through funds from the Chan \/ Zuckerberg initiative.


.. conda:package:: bioconductor-hcaexplorer

   |downloads_bioconductor-hcaexplorer| |docker_bioconductor-hcaexplorer|

   :versions: 1.0.0-0
   
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-curl: 
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidygraph: 
   :depends r-vctrs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hcaexplorer

   and update with::

      conda update bioconductor-hcaexplorer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hcaexplorer:<tag>

   (see `bioconductor-hcaexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hcaexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hcaexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hcaexplorer
   :alt:   (downloads)
.. |docker_bioconductor-hcaexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-hcaexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hcaexplorer
.. _`bioconductor-hcaexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-hcaexplorer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hcaexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hcaexplorer/README.html