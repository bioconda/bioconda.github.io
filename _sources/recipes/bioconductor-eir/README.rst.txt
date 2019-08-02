:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eir'
.. highlight: bash

bioconductor-eir
================

.. conda:recipe:: bioconductor-eir
   :replaces_section_title:

   The eiR package provides utilities for accelerated structure similarity searching of very large small molecule data sets using an embedding and indexing approach.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/eiR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-eir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eir/meta.yaml>`_

   


.. conda:package:: bioconductor-eir

   |downloads_bioconductor-eir| |docker_bioconductor-eir|

   :versions: 1.24.0-1, 1.22.0-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-chemminer: >=3.36.0,<3.37.0
   :depends bioconductor-gesper: >=1.16.0,<1.17.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dbi: 
   :depends r-digest: 
   :depends r-rcppannoy: >=0.0.9
   :depends r-rcurl: 
   :depends r-runit: 
   :depends r-snow: 
   :depends r-snowfall: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-eir

   and update with::

      conda update bioconductor-eir

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eir:<tag>

   (see `bioconductor-eir/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eir
   :alt:   (downloads)
.. |docker_bioconductor-eir| image:: https://quay.io/repository/biocontainers/bioconductor-eir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eir
.. _`bioconductor-eir/tags`: https://quay.io/repository/biocontainers/bioconductor-eir?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eir/README.html