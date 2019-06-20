:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cispath'
.. highlight: bash

bioconductor-cispath
====================

.. conda:recipe:: bioconductor-cispath
   :replaces_section_title:

   cisPath is an R package that uses web browsers to visualize and manage protein\-protein interaction networks.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/cisPath.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-cispath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cispath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cispath/meta.yaml>`_
   :links: biotools: :biotools:`cispath`, doi: :doi:`10.1186/1752-0509-9-s1-s1`

   


.. conda:package:: bioconductor-cispath

   |downloads_bioconductor-cispath| |docker_bioconductor-cispath|

   :versions: 1.24.0-0, 1.22.0-0, 1.20.0-0, 1.18.0-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cispath

   and update with::

      conda update bioconductor-cispath

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cispath:<tag>

   (see `bioconductor-cispath/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cispath| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cispath.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cispath
   :alt:   (downloads)
.. |docker_bioconductor-cispath| image:: https://quay.io/repository/biocontainers/bioconductor-cispath/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cispath
.. _`bioconductor-cispath/tags`: https://quay.io/repository/biocontainers/bioconductor-cispath?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cispath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cispath/README.html