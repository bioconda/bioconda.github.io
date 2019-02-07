.. title:: Package Recipe 'bioconductor-rontotools'
.. highlight: bash


bioconductor-rontotools
=======================

.. conda:recipe:: bioconductor-rontotools
   :replaces_section_title:

   Suite of tools for functional analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ROntoTools.html
   :license: CC BY-NC-ND 4.0 + file LICENSE
   :recipe: /`bioconductor-rontotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rontotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rontotools/meta.yaml>`_
   :links: biotools: :biotools:`rontotools`, doi: :doi:`10.1109/JPROC.2016.2531000`

   


.. conda:package:: bioconductor-rontotools

   |downloads_bioconductor-rontotools| |docker_bioconductor-rontotools|

   :versions: 2.10.0, 2.8.0, 2.6.0, 2.4.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-kegggraph` >=1.42.0,<1.43.0 :conda:package:`bioconductor-keggrest` >=1.22.0,<1.23.0 :conda:package:`bioconductor-rgraphviz` >=2.26.0,<2.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-boot`  

   :required~by: |required_by_bioconductor-rontotools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rontotools

   and update with::

      conda update bioconductor-rontotools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rontotools


.. |required_by_bioconductor-rontotools| conda:required_by:: bioconductor-rontotools
.. |downloads_bioconductor-rontotools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rontotools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rontotools| image:: https://quay.io/repository/biocontainers/bioconductor-rontotools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rontotools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rontotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rontotools/README.html

