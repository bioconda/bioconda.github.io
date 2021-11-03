:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netprior'
.. highlight: bash

bioconductor-netprior
=====================

.. conda:recipe:: bioconductor-netprior
   :replaces_section_title:
   :noindex:

   A model for network\-based prioritisation of genes

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/netprioR.html
   :license: GPL-3
   :recipe: /`bioconductor-netprior <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netprior>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netprior/meta.yaml>`_

   A model for semi\-supervised prioritisation of genes integrating network data\, phenotypes and additional prior knowledge about TP and TN gene labels from the literature or experts.


.. conda:package:: bioconductor-netprior

   |downloads_bioconductor-netprior| |docker_bioconductor-netprior|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.1-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-proc: 
   :depends r-sparsemvn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netprior

   and update with::

      conda update bioconductor-netprior

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netprior:<tag>

   (see `bioconductor-netprior/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netprior| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netprior.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netprior
   :alt:   (downloads)
.. |docker_bioconductor-netprior| image:: https://quay.io/repository/biocontainers/bioconductor-netprior/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netprior
.. _`bioconductor-netprior/tags`: https://quay.io/repository/biocontainers/bioconductor-netprior?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netprior";
        var versions = ["1.20.0","1.18.0","1.16.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netprior/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netprior/README.html