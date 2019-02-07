.. title:: Package Recipe 'bioconductor-metagxpancreas'
.. highlight: bash


bioconductor-metagxpancreas
===========================

.. conda:recipe:: bioconductor-metagxpancreas
   :replaces_section_title:

   A collection of pancreatic Cancer transcriptomic datasets that are part of the MetaGxData package compendium.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/MetaGxPancreas.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metagxpancreas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxpancreas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagxpancreas/meta.yaml>`_

   


.. conda:package:: bioconductor-metagxpancreas

   |downloads_bioconductor-metagxpancreas| |docker_bioconductor-metagxpancreas|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`bioconductor-impute` >=1.56.0,<1.57.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-metagxpancreas|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metagxpancreas

   and update with::

      conda update bioconductor-metagxpancreas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-metagxpancreas


.. |required_by_bioconductor-metagxpancreas| conda:required_by:: bioconductor-metagxpancreas
.. |downloads_bioconductor-metagxpancreas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagxpancreas.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-metagxpancreas| image:: https://quay.io/repository/biocontainers/bioconductor-metagxpancreas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagxpancreas







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagxpancreas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagxpancreas/README.html

