:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-agimicrorna'
.. highlight: bash

bioconductor-agimicrorna
========================

.. conda:recipe:: bioconductor-agimicrorna
   :replaces_section_title:

   Processing and Analysis of Agilent microRNA data

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/AgiMicroRna.html
   :license: GPL-3
   :recipe: /`bioconductor-agimicrorna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agimicrorna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agimicrorna/meta.yaml>`_

   


.. conda:package:: bioconductor-agimicrorna

   |downloads_bioconductor-agimicrorna| |docker_bioconductor-agimicrorna|

   :versions: 2.32.0-1, 2.32.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   :depends bioconductor-affycoretools: >=1.54.0,<1.55.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-agimicrorna

   and update with::

      conda update bioconductor-agimicrorna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-agimicrorna:<tag>

   (see `bioconductor-agimicrorna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-agimicrorna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-agimicrorna.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-agimicrorna| image:: https://quay.io/repository/biocontainers/bioconductor-agimicrorna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-agimicrorna
.. _`bioconductor-agimicrorna/tags`: https://quay.io/repository/biocontainers/bioconductor-agimicrorna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-agimicrorna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-agimicrorna/README.html