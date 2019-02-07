.. title:: Package Recipe 'bioconductor-netprior'
.. highlight: bash


bioconductor-netprior
=====================

.. conda:recipe:: bioconductor-netprior
   :replaces_section_title:

   A model for semi\-supervised prioritisation of genes integrating network data\, phenotypes and additional prior knowledge about TP and TN gene labels from the literature or experts.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/netprioR.html
   :license: GPL-3
   :recipe: /`bioconductor-netprior <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netprior>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netprior/meta.yaml>`_

   


.. conda:package:: bioconductor-netprior

   |downloads_bioconductor-netprior| |docker_bioconductor-netprior|

   :versions: 1.8.1

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-doparallel`  :conda:package:`r-dplyr`  :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-matrix`  :conda:package:`r-proc`  :conda:package:`r-sparsemvn`  

   :required~by: |required_by_bioconductor-netprior|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netprior

   and update with::

      conda update bioconductor-netprior

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-netprior


.. |required_by_bioconductor-netprior| conda:required_by:: bioconductor-netprior
.. |downloads_bioconductor-netprior| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netprior.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-netprior| image:: https://quay.io/repository/biocontainers/bioconductor-netprior/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netprior







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netprior/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netprior/README.html

