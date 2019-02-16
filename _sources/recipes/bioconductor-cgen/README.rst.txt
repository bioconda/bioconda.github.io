:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cgen'
.. highlight: bash

bioconductor-cgen
=================

.. conda:recipe:: bioconductor-cgen
   :replaces_section_title:

   An R package for analysis of case\-control studies in genetic epidemiology.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CGEN.html
   :license: GPL-2 + file LICENSE
   :recipe: /`bioconductor-cgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cgen/meta.yaml>`_

   


.. conda:package:: bioconductor-cgen

   |downloads_bioconductor-cgen| |docker_bioconductor-cgen|

   :versions: 3.18.0-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libgfortran-ng: >=7,<8.0a0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-mvtnorm: 
   
   :depends r-survival: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cgen

   and update with::

      conda update bioconductor-cgen

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cgen:<tag>

   (see `bioconductor-cgen/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cgen| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cgen.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cgen| image:: https://quay.io/repository/biocontainers/bioconductor-cgen/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cgen
.. _`bioconductor-cgen/tags`: https://quay.io/repository/biocontainers/bioconductor-cgen?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cgen/README.html