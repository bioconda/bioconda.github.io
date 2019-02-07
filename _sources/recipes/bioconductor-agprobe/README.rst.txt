.. title:: Package Recipe 'bioconductor-agprobe'
.. highlight: bash


bioconductor-agprobe
====================

.. conda:recipe:: bioconductor-agprobe
   :replaces_section_title:

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was AG\\\_probe\\\_tab.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/agprobe.html
   :license: LGPL
   :recipe: /`bioconductor-agprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agprobe/meta.yaml>`_

   


.. conda:package:: bioconductor-agprobe

   |downloads_bioconductor-agprobe| |docker_bioconductor-agprobe|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-agprobe|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-agprobe

   and update with::

      conda update bioconductor-agprobe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-agprobe


.. |required_by_bioconductor-agprobe| conda:required_by:: bioconductor-agprobe
.. |downloads_bioconductor-agprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-agprobe.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-agprobe| image:: https://quay.io/repository/biocontainers/bioconductor-agprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-agprobe







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-agprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-agprobe/README.html

