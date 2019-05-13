:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-inspect'
.. highlight: bash

bioconductor-inspect
====================

.. conda:recipe:: bioconductor-inspect
   :replaces_section_title:

   INSPEcT \(INference of Synthesis\, Processing and dEgradation rates in Time\-Course experiments\) analyses 4sU\-seq and RNA\-seq time\-course data in order to evaluate synthesis\, processing and degradation rates and asses via modeling the rates that determines changes in mature mRNA levels.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/INSPEcT.html
   :license: GPL-2
   :recipe: /`bioconductor-inspect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inspect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inspect/meta.yaml>`_
   :links: biotools: :biotools:`inspect`

   


.. conda:package:: bioconductor-inspect

   |downloads_bioconductor-inspect| |docker_bioconductor-inspect|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-desolve: 
   :depends r-proc: 
   :depends r-rootsolve: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-inspect

   and update with::

      conda update bioconductor-inspect

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-inspect:<tag>

   (see `bioconductor-inspect/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-inspect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-inspect.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-inspect
   :alt:   (downloads)
.. |docker_bioconductor-inspect| image:: https://quay.io/repository/biocontainers/bioconductor-inspect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-inspect
.. _`bioconductor-inspect/tags`: https://quay.io/repository/biocontainers/bioconductor-inspect?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-inspect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-inspect/README.html