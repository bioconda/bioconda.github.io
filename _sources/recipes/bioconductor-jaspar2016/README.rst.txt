:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-jaspar2016'
.. highlight: bash

bioconductor-jaspar2016
=======================

.. conda:recipe:: bioconductor-jaspar2016
   :replaces_section_title:

   Data package for JASPAR 2016

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/JASPAR2016.html
   :license: GPL-2
   :recipe: /`bioconductor-jaspar2016 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2016>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2016/meta.yaml>`_

   Data package for JASPAR 2016. To search this databases\, please use the package TFBSTools \(\>\= 1.8.1\).


.. conda:package:: bioconductor-jaspar2016

   |downloads_bioconductor-jaspar2016| |docker_bioconductor-jaspar2016|

   :versions: 1.16.0-0, 1.14.0-0, 1.12.0-1, 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-1, 1.6.0-0, 1.4.0-0
   
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-jaspar2016

   and update with::

      conda update bioconductor-jaspar2016

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-jaspar2016:<tag>

   (see `bioconductor-jaspar2016/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-jaspar2016| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jaspar2016.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-jaspar2016
   :alt:   (downloads)
.. |docker_bioconductor-jaspar2016| image:: https://quay.io/repository/biocontainers/bioconductor-jaspar2016/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jaspar2016
.. _`bioconductor-jaspar2016/tags`: https://quay.io/repository/biocontainers/bioconductor-jaspar2016?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jaspar2016/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jaspar2016/README.html