:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-minems2'
.. highlight: bash

r-minems2
=========

.. conda:recipe:: r-minems2
   :replaces_section_title:

   Mine MS\-MS spectra using a frequent usbgraph mining approach.

   :homepage: https://github.com/adelabriere/mineMS2
   :license: GPL-3.0
   :recipe: /`r-minems2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-minems2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-minems2/meta.yaml>`_

   


.. conda:package:: r-minems2

   |downloads_r-minems2| |docker_r-minems2|

   :versions: 0.9.3-1, 0.9.3-0, 0.9.2-0, 0.9.1-0, 0.9-0
   
   :depends bioconductor-msnbase: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-rcpp: >=0.12.13
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-minems2

   and update with::

      conda update r-minems2

   or use the docker container::

      docker pull quay.io/biocontainers/r-minems2:<tag>

   (see `r-minems2/tags`_ for valid values for ``<tag>``)


.. |downloads_r-minems2| image:: https://img.shields.io/conda/dn/bioconda/r-minems2.svg?style=flat
   :target: https://anaconda.org/bioconda/r-minems2
   :alt:   (downloads)
.. |docker_r-minems2| image:: https://quay.io/repository/biocontainers/r-minems2/status
   :target: https://quay.io/repository/biocontainers/r-minems2
.. _`r-minems2/tags`: https://quay.io/repository/biocontainers/r-minems2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-minems2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-minems2/README.html