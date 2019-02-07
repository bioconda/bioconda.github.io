.. title:: Package Recipe 'bioconductor-compartmap'
.. highlight: bash


bioconductor-compartmap
=======================

.. conda:recipe:: bioconductor-compartmap
   :replaces_section_title:

   Compartmap performs shrunken A\/B compartment inference from ATAC\-seq and methylation arrays.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/compartmap.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-compartmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compartmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compartmap/meta.yaml>`_

   


.. conda:package:: bioconductor-compartmap

   |downloads_bioconductor-compartmap| |docker_bioconductor-compartmap|

   :versions: 1.0.2

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-homo.sapiens` >=1.3.0,<1.4.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`bioconductor-mixomics` >=6.6.0,<6.7.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gtools`  

   :required~by: |required_by_bioconductor-compartmap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-compartmap

   and update with::

      conda update bioconductor-compartmap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-compartmap


.. |required_by_bioconductor-compartmap| conda:required_by:: bioconductor-compartmap
.. |downloads_bioconductor-compartmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compartmap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-compartmap| image:: https://quay.io/repository/biocontainers/bioconductor-compartmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compartmap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compartmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compartmap/README.html

