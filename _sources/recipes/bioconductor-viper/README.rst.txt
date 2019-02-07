.. title:: Package Recipe 'bioconductor-viper'
.. highlight: bash


bioconductor-viper
==================

.. conda:recipe:: bioconductor-viper
   :replaces_section_title:

   Inference of protein activity from gene expression data\, including the VIPER and msVIPER algorithms

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/viper.html
   :license: file LICENSE
   :recipe: /`bioconductor-viper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-viper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-viper/meta.yaml>`_
   :links: biotools: :biotools:`viper`

   


.. conda:package:: bioconductor-viper

   |downloads_bioconductor-viper| |docker_bioconductor-viper|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-e1071`  :conda:package:`r-kernsmooth`  :conda:package:`r-mixtools`  

   :required~by: |required_by_bioconductor-viper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-viper

   and update with::

      conda update bioconductor-viper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-viper


.. |required_by_bioconductor-viper| conda:required_by:: bioconductor-viper
.. |downloads_bioconductor-viper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-viper.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-viper| image:: https://quay.io/repository/biocontainers/bioconductor-viper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-viper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-viper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-viper/README.html

