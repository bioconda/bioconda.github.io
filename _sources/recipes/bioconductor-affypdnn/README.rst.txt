:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affypdnn'
.. highlight: bash

bioconductor-affypdnn
=====================

.. conda:recipe:: bioconductor-affypdnn
   :replaces_section_title:

   The package contains functions to perform the PDNN method described by Li Zhang et al.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/affypdnn.html
   :license: LGPL
   :recipe: /`bioconductor-affypdnn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affypdnn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affypdnn/meta.yaml>`_
   :links: biotools: :biotools:`affypdnn`

   


.. conda:package:: bioconductor-affypdnn

   |downloads_bioconductor-affypdnn| |docker_bioconductor-affypdnn|

   :versions: 1.56.0-0, 1.54.0-0, 1.52.0-0, 1.50.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affypdnn

   and update with::

      conda update bioconductor-affypdnn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affypdnn:<tag>

   (see `bioconductor-affypdnn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affypdnn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affypdnn.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-affypdnn| image:: https://quay.io/repository/biocontainers/bioconductor-affypdnn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affypdnn
.. _`bioconductor-affypdnn/tags`: https://quay.io/repository/biocontainers/bioconductor-affypdnn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affypdnn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affypdnn/README.html