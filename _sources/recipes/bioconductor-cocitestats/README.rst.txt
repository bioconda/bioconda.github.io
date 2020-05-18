:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cocitestats'
.. highlight: bash

bioconductor-cocitestats
========================

.. conda:recipe:: bioconductor-cocitestats
   :replaces_section_title:

   Different test statistics based on co\-citation.

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/CoCiteStats.html
   :license: CPL
   :recipe: /`bioconductor-cocitestats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cocitestats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cocitestats/meta.yaml>`_

   A collection of software tools for dealing with co\-citation data.


.. conda:package:: bioconductor-cocitestats

   |downloads_bioconductor-cocitestats| |docker_bioconductor-cocitestats|

   :versions: 1.60.0-0, 1.58.0-0, 1.56.0-1, 1.54.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-org.hs.eg.db: >=3.11.0,<3.12.0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cocitestats

   and update with::

      conda update bioconductor-cocitestats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cocitestats:<tag>

   (see `bioconductor-cocitestats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cocitestats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cocitestats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cocitestats
   :alt:   (downloads)
.. |docker_bioconductor-cocitestats| image:: https://quay.io/repository/biocontainers/bioconductor-cocitestats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cocitestats
.. _`bioconductor-cocitestats/tags`: https://quay.io/repository/biocontainers/bioconductor-cocitestats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cocitestats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cocitestats/README.html