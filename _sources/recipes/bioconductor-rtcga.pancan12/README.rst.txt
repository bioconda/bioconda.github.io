:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.pancan12'
.. highlight: bash

bioconductor-rtcga.pancan12
===========================

.. conda:recipe:: bioconductor-rtcga.pancan12
   :replaces_section_title:

   PanCan 12 from Genome Cancer Browser

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/RTCGA.PANCAN12.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.pancan12 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.pancan12>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.pancan12/meta.yaml>`_

   Package provides clinical\, expression\, cnv and mutation data from Genome Cancer Browser.


.. conda:package:: bioconductor-rtcga.pancan12

   |downloads_bioconductor-rtcga.pancan12| |docker_bioconductor-rtcga.pancan12|

   :versions: 1.16.0-0, 1.14.0-0, 1.12.0-1, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-rtcga: >=1.18.0,<1.19.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtcga.pancan12

   and update with::

      conda update bioconductor-rtcga.pancan12

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcga.pancan12:<tag>

   (see `bioconductor-rtcga.pancan12/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcga.pancan12| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.pancan12.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.pancan12
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.pancan12| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.pancan12/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.pancan12
.. _`bioconductor-rtcga.pancan12/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.pancan12?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.pancan12/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.pancan12/README.html