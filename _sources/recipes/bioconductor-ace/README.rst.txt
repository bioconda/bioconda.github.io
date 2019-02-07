.. title:: Package Recipe 'bioconductor-ace'
.. highlight: bash


bioconductor-ace
================

.. conda:recipe:: bioconductor-ace
   :replaces_section_title:

   Uses segmented copy number data to estimate tumor cell percentage and produce copy number plots displaying absolute copy numbers.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ACE.html
   :license: GPL-2
   :recipe: /`bioconductor-ace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ace/meta.yaml>`_

   


.. conda:package:: bioconductor-ace

   |downloads_bioconductor-ace| |docker_bioconductor-ace|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-qdnaseq` >=1.18.0,<1.19.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  

   :required~by: |required_by_bioconductor-ace|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ace

   and update with::

      conda update bioconductor-ace

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ace


.. |required_by_bioconductor-ace| conda:required_by:: bioconductor-ace
.. |downloads_bioconductor-ace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ace.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ace| image:: https://quay.io/repository/biocontainers/bioconductor-ace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ace







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ace/README.html

