:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multimed'
.. highlight: bash

bioconductor-multimed
=====================

.. conda:recipe:: bioconductor-multimed
   :replaces_section_title:

   Implements methods for testing multiple mediators

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MultiMed.html
   :license: GPL (>= 2) + file LICENSE
   :recipe: /`bioconductor-multimed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimed/meta.yaml>`_
   :links: biotools: :biotools:`multimed`, doi: :doi:`10.1093/bioinformatics/btt633`

   


.. conda:package:: bioconductor-multimed

   |downloads_bioconductor-multimed| |docker_bioconductor-multimed|

   :versions: 2.6.0-0, 2.4.0-0, 2.2.0-0, 1.12.0-0, 1.10.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multimed

   and update with::

      conda update bioconductor-multimed

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multimed:<tag>

   (see `bioconductor-multimed/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multimed| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multimed.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multimed
   :alt:   (downloads)
.. |docker_bioconductor-multimed| image:: https://quay.io/repository/biocontainers/bioconductor-multimed/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multimed
.. _`bioconductor-multimed/tags`: https://quay.io/repository/biocontainers/bioconductor-multimed?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multimed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multimed/README.html