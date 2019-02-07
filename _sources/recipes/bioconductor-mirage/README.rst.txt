.. title:: Package Recipe 'bioconductor-mirage'
.. highlight: bash


bioconductor-mirage
===================

.. conda:recipe:: bioconductor-mirage
   :replaces_section_title:

   The package contains functions for inferece of target gene regulation by miRNA\, based on only target gene expression profile.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MiRaGE.html
   :license: GPL
   :recipe: /`bioconductor-mirage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirage/meta.yaml>`_
   :links: biotools: :biotools:`mirage`

   


.. conda:package:: bioconductor-mirage

   |downloads_bioconductor-mirage| |docker_bioconductor-mirage|

   :versions: 1.24.0, 1.22.0, 1.20.0, 1.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  

   :required~by: |required_by_bioconductor-mirage|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirage

   and update with::

      conda update bioconductor-mirage

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mirage


.. |required_by_bioconductor-mirage| conda:required_by:: bioconductor-mirage
.. |downloads_bioconductor-mirage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirage.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mirage| image:: https://quay.io/repository/biocontainers/bioconductor-mirage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirage







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirage/README.html

