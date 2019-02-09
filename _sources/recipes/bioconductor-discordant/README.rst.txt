.. title:: Package Recipe 'bioconductor-discordant'
.. highlight: bash


bioconductor-discordant
=======================

.. conda:recipe:: bioconductor-discordant
   :replaces_section_title:

   Discordant is a method to determine differential correlation of molecular feature pairs from \-omics data using mixture models. Algorithm is explained further in Siska et al.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/discordant.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-discordant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-discordant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-discordant/meta.yaml>`_

   


.. conda:package:: bioconductor-discordant

   |downloads_bioconductor-discordant| |docker_bioconductor-discordant|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biwt`  :conda:package:`r-gtools`  :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-discordant|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-discordant

   and update with::

      conda update bioconductor-discordant

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-discordant


.. |required_by_bioconductor-discordant| conda:required_by:: bioconductor-discordant
.. |downloads_bioconductor-discordant| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-discordant.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-discordant| image:: https://quay.io/repository/biocontainers/bioconductor-discordant/status
   :target: https://quay.io/repository/biocontainers/bioconductor-discordant







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-discordant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-discordant/README.html

