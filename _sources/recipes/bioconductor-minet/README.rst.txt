:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-minet'
.. highlight: bash

bioconductor-minet
==================

.. conda:recipe:: bioconductor-minet
   :replaces_section_title:

   Mutual Information NETworks

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/minet.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minet/meta.yaml>`_
   :links: biotools: :biotools:`minet`, doi: :doi:`10.1186/1471-2105-9-461`

   This package implements various algorithms for inferring mutual information networks from data.


.. conda:package:: bioconductor-minet

   |downloads_bioconductor-minet| |docker_bioconductor-minet|

   :versions: 3.46.0-0, 3.44.0-0, 3.42.0-1, 3.42.0-0, 3.40.0-0, 3.38.0-0, 3.36.0-0
   
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-infotheo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-minet

   and update with::

      conda update bioconductor-minet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-minet:<tag>

   (see `bioconductor-minet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-minet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-minet
   :alt:   (downloads)
.. |docker_bioconductor-minet| image:: https://quay.io/repository/biocontainers/bioconductor-minet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minet
.. _`bioconductor-minet/tags`: https://quay.io/repository/biocontainers/bioconductor-minet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minet/README.html