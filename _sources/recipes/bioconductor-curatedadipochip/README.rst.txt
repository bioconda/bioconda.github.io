:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedadipochip'
.. highlight: bash

bioconductor-curatedadipochip
=============================

.. conda:recipe:: bioconductor-curatedadipochip
   :replaces_section_title:

   A Curated ChIP\-Seq Dataset of MDI\-induced Differentiated Adipocytes \(3T3\-L1\)

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/curatedAdipoChIP.html
   :license: GPL-3
   :recipe: /`bioconductor-curatedadipochip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedadipochip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedadipochip/meta.yaml>`_

   A curated dataset of publicly available ChIP\-sequencing of transcription factors\, chromatin remodelers and histone modifications in the 3T3\-L1 pre\-adipocyte cell line. The package document the data collection\, pre\-processing and processing of the data. In addition to the documentation\, the package contains the scripts that was used to generated the data.


.. conda:package:: bioconductor-curatedadipochip

   |downloads_bioconductor-curatedadipochip| |docker_bioconductor-curatedadipochip|

   :versions: 1.4.0-0, 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-experimenthub: >=1.14.0,<1.15.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-curatedadipochip

   and update with::

      conda update bioconductor-curatedadipochip

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-curatedadipochip:<tag>

   (see `bioconductor-curatedadipochip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-curatedadipochip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedadipochip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedadipochip
   :alt:   (downloads)
.. |docker_bioconductor-curatedadipochip| image:: https://quay.io/repository/biocontainers/bioconductor-curatedadipochip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedadipochip
.. _`bioconductor-curatedadipochip/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedadipochip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedadipochip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedadipochip/README.html