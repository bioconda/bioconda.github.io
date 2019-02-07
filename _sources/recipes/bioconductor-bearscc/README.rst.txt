.. title:: Package Recipe 'bioconductor-bearscc'
.. highlight: bash


bioconductor-bearscc
====================

.. conda:recipe:: bioconductor-bearscc
   :replaces_section_title:

   BEARscc is a noise estimation and injection tool that is designed to assess putative single\-cell RNA\-seq clusters in the context of experimental noise estimated by ERCC spike\-in controls.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BEARscc.html
   :license: GPL-3
   :recipe: /`bioconductor-bearscc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bearscc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bearscc/meta.yaml>`_

   


.. conda:package:: bioconductor-bearscc

   |downloads_bioconductor-bearscc| |docker_bioconductor-bearscc|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  

   :required~by: |required_by_bioconductor-bearscc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bearscc

   and update with::

      conda update bioconductor-bearscc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bearscc


.. |required_by_bioconductor-bearscc| conda:required_by:: bioconductor-bearscc
.. |downloads_bioconductor-bearscc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bearscc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bearscc| image:: https://quay.io/repository/biocontainers/bioconductor-bearscc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bearscc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bearscc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bearscc/README.html

