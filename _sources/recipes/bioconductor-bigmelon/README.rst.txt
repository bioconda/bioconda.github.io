.. title:: Package Recipe 'bioconductor-bigmelon'
.. highlight: bash


bioconductor-bigmelon
=====================

.. conda:recipe:: bioconductor-bigmelon
   :replaces_section_title:

   Methods for working with Illumina arrays using gdsfmt.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/bigmelon.html
   :license: GPL-3
   :recipe: /`bioconductor-bigmelon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bigmelon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bigmelon/meta.yaml>`_

   


.. conda:package:: bioconductor-bigmelon

   |downloads_bioconductor-bigmelon| |docker_bioconductor-bigmelon|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-gdsfmt` >=1.18.0,<1.19.0 :conda:package:`bioconductor-geoquery` >=2.50.0,<2.51.0 :conda:package:`bioconductor-methylumi` >=2.28.0,<2.29.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`bioconductor-watermelon` >=1.26.0,<1.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-bigmelon|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bigmelon

   and update with::

      conda update bioconductor-bigmelon

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bigmelon


.. |required_by_bioconductor-bigmelon| conda:required_by:: bioconductor-bigmelon
.. |downloads_bioconductor-bigmelon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bigmelon.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bigmelon| image:: https://quay.io/repository/biocontainers/bioconductor-bigmelon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bigmelon







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bigmelon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bigmelon/README.html

