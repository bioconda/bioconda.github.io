:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rdisop'
.. highlight: bash

bioconductor-rdisop
===================

.. conda:recipe:: bioconductor-rdisop
   :replaces_section_title:

   Identification of metabolites using high precision mass spectrometry. MS Peaks are used to derive a ranked list of sum formulae\, alternatively for a given sum formula the theoretical isotope distribution can be calculated to search in MS peak lists.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Rdisop.html
   :license: GPL-2
   :recipe: /`bioconductor-rdisop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rdisop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rdisop/meta.yaml>`_

   


.. conda:package:: bioconductor-rdisop

   |downloads_bioconductor-rdisop| |docker_bioconductor-rdisop|

   :versions: 1.44.0-1, 1.44.0-0, 1.42.1-0, 1.42.0-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rdisop

   and update with::

      conda update bioconductor-rdisop

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rdisop:<tag>

   (see `bioconductor-rdisop/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rdisop| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rdisop.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rdisop
   :alt:   (downloads)
.. |docker_bioconductor-rdisop| image:: https://quay.io/repository/biocontainers/bioconductor-rdisop/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rdisop
.. _`bioconductor-rdisop/tags`: https://quay.io/repository/biocontainers/bioconductor-rdisop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rdisop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rdisop/README.html