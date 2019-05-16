:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maqcexpression4plex'
.. highlight: bash

bioconductor-maqcexpression4plex
================================

.. conda:recipe:: bioconductor-maqcexpression4plex
   :replaces_section_title:

   Data from human \(HG18\) 4plex NimbleGen array. It has 24k genes with 3 60mer probes per gene.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/maqcExpression4plex.html
   :license: GPL
   :recipe: /`bioconductor-maqcexpression4plex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maqcexpression4plex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maqcexpression4plex/meta.yaml>`_

   


.. conda:package:: bioconductor-maqcexpression4plex

   |downloads_bioconductor-maqcexpression4plex| |docker_bioconductor-maqcexpression4plex|

   :versions: 1.28.0-0, 1.26.0-0
   
   :depends curl: >=7.64.1,<8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-maqcexpression4plex

   and update with::

      conda update bioconductor-maqcexpression4plex

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maqcexpression4plex:<tag>

   (see `bioconductor-maqcexpression4plex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maqcexpression4plex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maqcexpression4plex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maqcexpression4plex
   :alt:   (downloads)
.. |docker_bioconductor-maqcexpression4plex| image:: https://quay.io/repository/biocontainers/bioconductor-maqcexpression4plex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maqcexpression4plex
.. _`bioconductor-maqcexpression4plex/tags`: https://quay.io/repository/biocontainers/bioconductor-maqcexpression4plex?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maqcexpression4plex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maqcexpression4plex/README.html