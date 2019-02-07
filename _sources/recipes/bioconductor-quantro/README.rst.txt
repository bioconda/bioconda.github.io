.. title:: Package Recipe 'bioconductor-quantro'
.. highlight: bash


bioconductor-quantro
====================

.. conda:recipe:: bioconductor-quantro
   :replaces_section_title:

   A data\-driven test for the assumptions of quantile normalization using raw data such as objects that inherit eSets \(e.g. ExpressionSet\, MethylSet\). Group level information about each sample \(such as Tumor \/ Normal status\) must also be provided because the test assesses if there are global differences in the distributions between the user\-defined groups.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/quantro.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-quantro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quantro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quantro/meta.yaml>`_
   :links: biotools: :biotools:`quantro`

   


.. conda:package:: bioconductor-quantro

   |downloads_bioconductor-quantro| |docker_bioconductor-quantro|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-doparallel`  :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-iterators`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-quantro|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-quantro

   and update with::

      conda update bioconductor-quantro

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-quantro


.. |required_by_bioconductor-quantro| conda:required_by:: bioconductor-quantro
.. |downloads_bioconductor-quantro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-quantro.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-quantro| image:: https://quay.io/repository/biocontainers/bioconductor-quantro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-quantro







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-quantro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-quantro/README.html

