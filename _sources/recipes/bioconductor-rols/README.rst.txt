:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rols'
.. highlight: bash

bioconductor-rols
=================

.. conda:recipe:: bioconductor-rols
   :replaces_section_title:

   The rols package is an interface to the Ontology Lookup Service \(OLS\) to access and query hundred of ontolgies directly from R.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rols.html
   :license: GPL-2
   :recipe: /`bioconductor-rols <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rols>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rols/meta.yaml>`_
   :links: biotools: :biotools:`rols`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rols

   |downloads_bioconductor-rols| |docker_bioconductor-rols|

   :versions: 2.10.1-0, 2.10.0-0, 2.8.2-0, 2.6.0-0, 2.4.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-progress: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rols

   and update with::

      conda update bioconductor-rols

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rols:<tag>

   (see `bioconductor-rols/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rols| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rols.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rols| image:: https://quay.io/repository/biocontainers/bioconductor-rols/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rols
.. _`bioconductor-rols/tags`: https://quay.io/repository/biocontainers/bioconductor-rols?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rols/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rols/README.html