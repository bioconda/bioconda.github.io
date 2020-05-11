:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ocplus'
.. highlight: bash

bioconductor-ocplus
===================

.. conda:recipe:: bioconductor-ocplus
   :replaces_section_title:

   Operating characteristics plus sample size and local fdr for microarray experiments

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/OCplus.html
   :license: LGPL
   :recipe: /`bioconductor-ocplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ocplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ocplus/meta.yaml>`_

   This package allows to characterize the operating characteristics of a microarray experiment\, i.e. the trade\-off between false discovery rate and the power to detect truly regulated genes. The package includes tools both for planned experiments \(for sample size assessment\) and for already collected data \(identification of differentially expressed genes\).


.. conda:package:: bioconductor-ocplus

   |downloads_bioconductor-ocplus| |docker_bioconductor-ocplus|

   :versions: 1.62.0-0, 1.60.0-0, 1.58.0-1, 1.56.0-0
   
   :depends bioconductor-multtest: >=2.44.0,<2.45.0
   :depends r-akima: 
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ocplus

   and update with::

      conda update bioconductor-ocplus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ocplus:<tag>

   (see `bioconductor-ocplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ocplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ocplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ocplus
   :alt:   (downloads)
.. |docker_bioconductor-ocplus| image:: https://quay.io/repository/biocontainers/bioconductor-ocplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ocplus
.. _`bioconductor-ocplus/tags`: https://quay.io/repository/biocontainers/bioconductor-ocplus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ocplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ocplus/README.html