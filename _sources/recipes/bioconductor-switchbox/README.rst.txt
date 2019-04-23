:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-switchbox'
.. highlight: bash

bioconductor-switchbox
======================

.. conda:recipe:: bioconductor-switchbox
   :replaces_section_title:

   The package offer different classifiers based on comparisons of pair of features \(TSP\)\, using various decision rules \(e.g.\, majority wins principle\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/switchBox.html
   :license: GPL-2
   :recipe: /`bioconductor-switchbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-switchbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-switchbox/meta.yaml>`_
   :links: biotools: :biotools:`switchbox`

   


.. conda:package:: bioconductor-switchbox

   |downloads_bioconductor-switchbox| |docker_bioconductor-switchbox|

   :versions: 1.18.0-0, 1.16.0-0, 1.14.0-0, 1.12.0-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-gplots: 
   :depends r-proc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-switchbox

   and update with::

      conda update bioconductor-switchbox

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-switchbox:<tag>

   (see `bioconductor-switchbox/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-switchbox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-switchbox.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-switchbox| image:: https://quay.io/repository/biocontainers/bioconductor-switchbox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-switchbox
.. _`bioconductor-switchbox/tags`: https://quay.io/repository/biocontainers/bioconductor-switchbox?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-switchbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-switchbox/README.html