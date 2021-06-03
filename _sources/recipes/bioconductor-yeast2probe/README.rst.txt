:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yeast2probe'
.. highlight: bash

bioconductor-yeast2probe
========================

.. conda:recipe:: bioconductor-yeast2probe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type yeast2

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/yeast2probe.html
   :license: LGPL
   :recipe: /`bioconductor-yeast2probe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeast2probe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeast2probe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Yeast\\\_2\\\_probe\\\_tab.


.. conda:package:: bioconductor-yeast2probe

   |downloads_bioconductor-yeast2probe| |docker_bioconductor-yeast2probe|

   :versions:
      
      

      ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-1``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yeast2probe

   and update with::

      conda update bioconductor-yeast2probe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yeast2probe:<tag>

   (see `bioconductor-yeast2probe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yeast2probe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yeast2probe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yeast2probe
   :alt:   (downloads)
.. |docker_bioconductor-yeast2probe| image:: https://quay.io/repository/biocontainers/bioconductor-yeast2probe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yeast2probe
.. _`bioconductor-yeast2probe/tags`: https://quay.io/repository/biocontainers/bioconductor-yeast2probe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yeast2probe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yeast2probe/README.html