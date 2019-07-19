:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-estrogen'
.. highlight: bash

bioconductor-estrogen
=====================

.. conda:recipe:: bioconductor-estrogen
   :replaces_section_title:

   Data from 8 Affymetrix genechips\, looking at a 2x2 factorial design \(with 2 repeats per level\).

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/estrogen.html
   :license: LGPL
   :recipe: /`bioconductor-estrogen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-estrogen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-estrogen/meta.yaml>`_

   


.. conda:package:: bioconductor-estrogen

   |downloads_bioconductor-estrogen| |docker_bioconductor-estrogen|

   :versions: 1.30.0-1, 1.30.0-0, 1.28.0-0
   
   :depends curl: >=7.65.2,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-estrogen

   and update with::

      conda update bioconductor-estrogen

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-estrogen:<tag>

   (see `bioconductor-estrogen/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-estrogen| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-estrogen.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-estrogen
   :alt:   (downloads)
.. |docker_bioconductor-estrogen| image:: https://quay.io/repository/biocontainers/bioconductor-estrogen/status
   :target: https://quay.io/repository/biocontainers/bioconductor-estrogen
.. _`bioconductor-estrogen/tags`: https://quay.io/repository/biocontainers/bioconductor-estrogen?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-estrogen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-estrogen/README.html