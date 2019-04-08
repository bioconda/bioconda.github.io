:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bovinecdf'
.. highlight: bash

bioconductor-bovinecdf
======================

.. conda:recipe:: bioconductor-bovinecdf
   :replaces_section_title:

   A package containing an environment representing the Bovine.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/bovinecdf.html
   :license: LGPL
   :recipe: /`bioconductor-bovinecdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bovinecdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bovinecdf/meta.yaml>`_

   


.. conda:package:: bioconductor-bovinecdf

   |downloads_bioconductor-bovinecdf| |docker_bioconductor-bovinecdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bovinecdf

   and update with::

      conda update bioconductor-bovinecdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bovinecdf:<tag>

   (see `bioconductor-bovinecdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bovinecdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bovinecdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bovinecdf| image:: https://quay.io/repository/biocontainers/bioconductor-bovinecdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bovinecdf
.. _`bioconductor-bovinecdf/tags`: https://quay.io/repository/biocontainers/bioconductor-bovinecdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bovinecdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bovinecdf/README.html