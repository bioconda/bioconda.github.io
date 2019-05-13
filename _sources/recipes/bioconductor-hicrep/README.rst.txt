:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicrep'
.. highlight: bash

bioconductor-hicrep
===================

.. conda:recipe:: bioconductor-hicrep
   :replaces_section_title:

   Hi\-C is a powerful technology for studying genome\-wide chromatin interactions. However\, current methods for assessing Hi\-C data reproducibility can produce misleading results because they ignore spatial features in Hi\-C data\, such as domain structure and distance\-dependence. We present a novel reproducibility measure that systematically takes these features into consideration. This measure can assess pairwise differences between Hi\-C matrices under a wide range of settings\, and can be used to determine optimal sequencing depth. Compared to existing approaches\, it consistently shows higher accuracy in distinguishing subtle differences in reproducibility and depicting interrelationships of cell lineages than existing approaches. This R package \`hicrep\` implements our approach.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/hicrep.html
   :license: GPL (>= 2.0)
   :recipe: /`bioconductor-hicrep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicrep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicrep/meta.yaml>`_

   


.. conda:package:: bioconductor-hicrep

   |downloads_bioconductor-hicrep| |docker_bioconductor-hicrep|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.0-0, 1.0.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hicrep

   and update with::

      conda update bioconductor-hicrep

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicrep:<tag>

   (see `bioconductor-hicrep/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicrep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicrep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicrep
   :alt:   (downloads)
.. |docker_bioconductor-hicrep| image:: https://quay.io/repository/biocontainers/bioconductor-hicrep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicrep
.. _`bioconductor-hicrep/tags`: https://quay.io/repository/biocontainers/bioconductor-hicrep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicrep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicrep/README.html