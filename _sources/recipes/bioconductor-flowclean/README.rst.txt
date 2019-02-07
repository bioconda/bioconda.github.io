.. title:: Package Recipe 'bioconductor-flowclean'
.. highlight: bash


bioconductor-flowclean
======================

.. conda:recipe:: bioconductor-flowclean
   :replaces_section_title:

   A quality control tool for flow cytometry data based on compositional data analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowClean.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowclean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowclean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowclean/meta.yaml>`_
   :links: biotools: :biotools:`flowclean`

   


.. conda:package:: bioconductor-flowclean

   |downloads_bioconductor-flowclean| |docker_bioconductor-flowclean|

   :versions: 1.20.0, 1.18.0, 1.16.0

   :depends: :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bit`  :conda:package:`r-changepoint`  :conda:package:`r-sfsmisc`  

   :required~by: |required_by_bioconductor-flowclean|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowclean

   and update with::

      conda update bioconductor-flowclean

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowclean


.. |required_by_bioconductor-flowclean| conda:required_by:: bioconductor-flowclean
.. |downloads_bioconductor-flowclean| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowclean.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowclean| image:: https://quay.io/repository/biocontainers/bioconductor-flowclean/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowclean







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowclean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowclean/README.html

