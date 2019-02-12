:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lowmacaannotation'
.. highlight: bash

bioconductor-lowmacaannotation
==============================

.. conda:recipe:: bioconductor-lowmacaannotation
   :replaces_section_title:

   A package containing the data to run LowMACA package.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/LowMACAAnnotation.html
   :license: GPL-3
   :recipe: /`bioconductor-lowmacaannotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lowmacaannotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lowmacaannotation/meta.yaml>`_

   


.. conda:package:: bioconductor-lowmacaannotation

   |downloads_bioconductor-lowmacaannotation| |docker_bioconductor-lowmacaannotation|

   :versions: 0.99.3-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lowmacaannotation

   and update with::

      conda update bioconductor-lowmacaannotation

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lowmacaannotation:<tag>

   (see `bioconductor-lowmacaannotation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lowmacaannotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lowmacaannotation.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lowmacaannotation| image:: https://quay.io/repository/biocontainers/bioconductor-lowmacaannotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lowmacaannotation
.. _`bioconductor-lowmacaannotation/tags`: https://quay.io/repository/biocontainers/bioconductor-lowmacaannotation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lowmacaannotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lowmacaannotation/README.html