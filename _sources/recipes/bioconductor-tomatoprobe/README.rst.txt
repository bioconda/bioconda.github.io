:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tomatoprobe'
.. highlight: bash

bioconductor-tomatoprobe
========================

.. conda:recipe:: bioconductor-tomatoprobe
   :replaces_section_title:

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was Tomato\\\_probe\\\_tab.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/tomatoprobe.html
   :license: LGPL
   :recipe: /`bioconductor-tomatoprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomatoprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomatoprobe/meta.yaml>`_

   


.. conda:package:: bioconductor-tomatoprobe

   |downloads_bioconductor-tomatoprobe| |docker_bioconductor-tomatoprobe|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tomatoprobe

   and update with::

      conda update bioconductor-tomatoprobe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tomatoprobe:<tag>

   (see `bioconductor-tomatoprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tomatoprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tomatoprobe.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tomatoprobe| image:: https://quay.io/repository/biocontainers/bioconductor-tomatoprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tomatoprobe
.. _`bioconductor-tomatoprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-tomatoprobe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tomatoprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tomatoprobe/README.html