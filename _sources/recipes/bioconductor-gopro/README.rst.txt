:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gopro'
.. highlight: bash

bioconductor-gopro
==================

.. conda:recipe:: bioconductor-gopro
   :replaces_section_title:

   Find the most characteristic gene ontology terms for groups of human genes. This package was created as a part of the thesis which was developed under the auspices of MI\^2 Group \(http\:\/\/mi2.mini.pw.edu.pl\/\, https\:\/\/github.com\/geneticsMiNIng\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GOpro.html
   :license: GPL-3
   :recipe: /`bioconductor-gopro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gopro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gopro/meta.yaml>`_

   


.. conda:package:: bioconductor-gopro

   |downloads_bioconductor-gopro| |docker_bioconductor-gopro|

   :versions: 1.8.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-go.db: >=3.7.0,<3.8.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-multiassayexperiment: >=1.8.0,<1.9.0
   :depends bioconductor-org.hs.eg.db: >=3.7.0,<3.8.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bh: 
   :depends r-dendextend: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gopro

   and update with::

      conda update bioconductor-gopro

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gopro:<tag>

   (see `bioconductor-gopro/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gopro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gopro.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gopro| image:: https://quay.io/repository/biocontainers/bioconductor-gopro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gopro
.. _`bioconductor-gopro/tags`: https://quay.io/repository/biocontainers/bioconductor-gopro?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gopro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gopro/README.html