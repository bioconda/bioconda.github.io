:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.charm.hg18.example'
.. highlight: bash

bioconductor-pd.charm.hg18.example
==================================

.. conda:recipe:: bioconductor-pd.charm.hg18.example
   :replaces_section_title:

   Platform Design Info for NimbleGen charm\_hg18\_example

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/pd.charm.hg18.example.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.charm.hg18.example <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.charm.hg18.example>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.charm.hg18.example/meta.yaml>`_

   


.. conda:package:: bioconductor-pd.charm.hg18.example

   |downloads_bioconductor-pd.charm.hg18.example| |docker_bioconductor-pd.charm.hg18.example|

   :versions: 0.99.4-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-oligo: >=1.46.0,<1.47.0
   
   :depends bioconductor-oligoclasses: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dbi: 
   
   :depends r-rsqlite: >=0.7-1
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pd.charm.hg18.example

   and update with::

      conda update bioconductor-pd.charm.hg18.example

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.charm.hg18.example:<tag>

   (see `bioconductor-pd.charm.hg18.example/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.charm.hg18.example| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.charm.hg18.example.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pd.charm.hg18.example| image:: https://quay.io/repository/biocontainers/bioconductor-pd.charm.hg18.example/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.charm.hg18.example
.. _`bioconductor-pd.charm.hg18.example/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.charm.hg18.example?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.charm.hg18.example/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.charm.hg18.example/README.html