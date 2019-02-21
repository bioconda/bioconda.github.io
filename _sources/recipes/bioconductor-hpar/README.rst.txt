:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hpar'
.. highlight: bash

bioconductor-hpar
=================

.. conda:recipe:: bioconductor-hpar
   :replaces_section_title:

   The hpar package provides a simple R interface to and data from the Human Protein Atlas project.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/hpar.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hpar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpar/meta.yaml>`_
   :links: biotools: :biotools:`hpar`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-hpar

   |downloads_bioconductor-hpar| |docker_bioconductor-hpar|

   :versions: 1.24.0-0, 1.22.2-0, 1.20.0-0, 1.18.1-0, 1.15.0-0, 1.14.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hpar

   and update with::

      conda update bioconductor-hpar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hpar:<tag>

   (see `bioconductor-hpar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hpar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hpar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hpar| image:: https://quay.io/repository/biocontainers/bioconductor-hpar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hpar
.. _`bioconductor-hpar/tags`: https://quay.io/repository/biocontainers/bioconductor-hpar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hpar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hpar/README.html