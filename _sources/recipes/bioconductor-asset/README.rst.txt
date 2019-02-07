.. title:: Package Recipe 'bioconductor-asset'
.. highlight: bash


bioconductor-asset
==================

.. conda:recipe:: bioconductor-asset
   :replaces_section_title:

   An R package for subset\-based analysis of heterogeneous traits and subtypes

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ASSET.html
   :license: GPL-2 + file LICENSE
   :recipe: /`bioconductor-asset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asset/meta.yaml>`_

   


.. conda:package:: bioconductor-asset

   |downloads_bioconductor-asset| |docker_bioconductor-asset|

   :versions: 2.0.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  :conda:package:`r-msm`  :conda:package:`r-rmeta`  

   :required~by: |required_by_bioconductor-asset|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-asset

   and update with::

      conda update bioconductor-asset

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-asset


.. |required_by_bioconductor-asset| conda:required_by:: bioconductor-asset
.. |downloads_bioconductor-asset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-asset.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-asset| image:: https://quay.io/repository/biocontainers/bioconductor-asset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asset







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asset/README.html

