:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stemhypoxia'
.. highlight: bash

bioconductor-stemhypoxia
========================

.. conda:recipe:: bioconductor-stemhypoxia
   :replaces_section_title:

   Expression profiling using microarray technology to prove if \'Hypoxia Promotes Efficient Differentiation of Human Embryonic Stem Cells to Functional Endothelium\' by Prado\-Lopez et al. \(2010\) Stem Cells 28\:407\-418. Full data available at Gene Expression Omnibus series GSE37761.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/stemHypoxia.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-stemhypoxia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stemhypoxia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stemhypoxia/meta.yaml>`_

   


.. conda:package:: bioconductor-stemhypoxia

   |downloads_bioconductor-stemhypoxia| |docker_bioconductor-stemhypoxia|

   :versions: 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-stemhypoxia

   and update with::

      conda update bioconductor-stemhypoxia

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stemhypoxia:<tag>

   (see `bioconductor-stemhypoxia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stemhypoxia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stemhypoxia.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-stemhypoxia| image:: https://quay.io/repository/biocontainers/bioconductor-stemhypoxia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stemhypoxia
.. _`bioconductor-stemhypoxia/tags`: https://quay.io/repository/biocontainers/bioconductor-stemhypoxia?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stemhypoxia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stemhypoxia/README.html