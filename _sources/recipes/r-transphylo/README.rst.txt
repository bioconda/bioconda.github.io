:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-transphylo'
.. highlight: bash

r-transphylo
============

.. conda:recipe:: r-transphylo
   :replaces_section_title:

   Reconstruction of transmission trees using genomic data

   :homepage: https://xavierdidelot.github.io/TransPhylo
   :license: GPL2
   :recipe: /`r-transphylo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-transphylo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-transphylo/meta.yaml>`_
   :links: biotools: :biotools:`TransPhylo`, doi: :doi:`10.1093/molbev/msw275`

   


.. conda:package:: r-transphylo

   |downloads_r-transphylo| |docker_r-transphylo|

   :versions: 1.4.0-0, 1.3.2-0, 1.3-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-ape: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-transphylo

   and update with::

      conda update r-transphylo

   or use the docker container::

      docker pull quay.io/biocontainers/r-transphylo:<tag>

   (see `r-transphylo/tags`_ for valid values for ``<tag>``)


.. |downloads_r-transphylo| image:: https://img.shields.io/conda/dn/bioconda/r-transphylo.svg?style=flat
   :target: https://anaconda.org/bioconda/r-transphylo
   :alt:   (downloads)
.. |docker_r-transphylo| image:: https://quay.io/repository/biocontainers/r-transphylo/status
   :target: https://quay.io/repository/biocontainers/r-transphylo
.. _`r-transphylo/tags`: https://quay.io/repository/biocontainers/r-transphylo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-transphylo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-transphylo/README.html