:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ricecdf'
.. highlight: bash

bioconductor-ricecdf
====================

.. conda:recipe:: bioconductor-ricecdf
   :replaces_section_title:

   A package containing an environment representing the Rice.cdf file.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/ricecdf.html
   :license: LGPL
   :recipe: /`bioconductor-ricecdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ricecdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ricecdf/meta.yaml>`_

   


.. conda:package:: bioconductor-ricecdf

   |downloads_bioconductor-ricecdf| |docker_bioconductor-ricecdf|

   :versions: 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ricecdf

   and update with::

      conda update bioconductor-ricecdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ricecdf:<tag>

   (see `bioconductor-ricecdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ricecdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ricecdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ricecdf
   :alt:   (downloads)
.. |docker_bioconductor-ricecdf| image:: https://quay.io/repository/biocontainers/bioconductor-ricecdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ricecdf
.. _`bioconductor-ricecdf/tags`: https://quay.io/repository/biocontainers/bioconductor-ricecdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ricecdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ricecdf/README.html