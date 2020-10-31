:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-primeviewprobe'
.. highlight: bash

bioconductor-primeviewprobe
===========================

.. conda:recipe:: bioconductor-primeviewprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type primeview

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/primeviewprobe.html
   :license: LGPL
   :recipe: /`bioconductor-primeviewprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-primeviewprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-primeviewprobe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was PrimeView\\\_probe\\\_tab.


.. conda:package:: bioconductor-primeviewprobe

   |downloads_bioconductor-primeviewprobe| |docker_bioconductor-primeviewprobe|

   :versions:
      
      

      ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-primeviewprobe

   and update with::

      conda update bioconductor-primeviewprobe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-primeviewprobe:<tag>

   (see `bioconductor-primeviewprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-primeviewprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-primeviewprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-primeviewprobe
   :alt:   (downloads)
.. |docker_bioconductor-primeviewprobe| image:: https://quay.io/repository/biocontainers/bioconductor-primeviewprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-primeviewprobe
.. _`bioconductor-primeviewprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-primeviewprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-primeviewprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-primeviewprobe/README.html