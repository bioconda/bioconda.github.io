:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsar'
.. highlight: bash

bioconductor-gsar
=================

.. conda:recipe:: bioconductor-gsar
   :replaces_section_title:

   Gene set analysis using specific alternative hypotheses. Tests for differential expression\, scale and net correlation structure.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GSAR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-gsar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsar/meta.yaml>`_

   


.. conda:package:: bioconductor-gsar

   |downloads_bioconductor-gsar| |docker_bioconductor-gsar|

   :versions: 1.18.0-0, 1.16.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-igraph: >=0.7.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsar

   and update with::

      conda update bioconductor-gsar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsar:<tag>

   (see `bioconductor-gsar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gsar| image:: https://quay.io/repository/biocontainers/bioconductor-gsar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsar
.. _`bioconductor-gsar/tags`: https://quay.io/repository/biocontainers/bioconductor-gsar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsar/README.html