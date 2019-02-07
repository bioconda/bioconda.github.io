.. title:: Package Recipe 'bioconductor-metams'
.. highlight: bash


bioconductor-metams
===================

.. conda:recipe:: bioconductor-metams
   :replaces_section_title:

   MS\-based metabolomics data processing and compound annotation pipeline.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/metaMS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-metams <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metams>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metams/meta.yaml>`_
   :links: biotools: :biotools:`metams`

   


.. conda:package:: bioconductor-metams

   |downloads_bioconductor-metams| |docker_bioconductor-metams|

   :versions: 1.18.1, 1.14.0, 1.12.0, 1.8.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-camera` >=1.38.0,<1.39.0 :conda:package:`bioconductor-xcms` >=3.4.0,<3.5.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrix`  :conda:package:`r-robustbase`  

   :required~by: |required_by_bioconductor-metams|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metams

   and update with::

      conda update bioconductor-metams

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-metams


.. |required_by_bioconductor-metams| conda:required_by:: bioconductor-metams
.. |downloads_bioconductor-metams| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metams.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-metams| image:: https://quay.io/repository/biocontainers/bioconductor-metams/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metams







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metams/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metams/README.html

