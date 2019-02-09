.. title:: Package Recipe 'bioconductor-rebet'
.. highlight: bash


bioconductor-rebet
==================

.. conda:recipe:: bioconductor-rebet
   :replaces_section_title:

   There is an increasing focus to investigate the association between rare variants and diseases. The REBET package implements the subREgion\-based BurdEn Test which is a powerful burden test that simultaneously identifies susceptibility loci and sub\-regions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/REBET.html
   :license: GPL-2
   :recipe: /`bioconductor-rebet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rebet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rebet/meta.yaml>`_

   


.. conda:package:: bioconductor-rebet

   |downloads_bioconductor-rebet| |docker_bioconductor-rebet|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-asset` >=2.0.0,<2.1.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-rebet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rebet

   and update with::

      conda update bioconductor-rebet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rebet


.. |required_by_bioconductor-rebet| conda:required_by:: bioconductor-rebet
.. |downloads_bioconductor-rebet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rebet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rebet| image:: https://quay.io/repository/biocontainers/bioconductor-rebet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rebet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rebet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rebet/README.html

