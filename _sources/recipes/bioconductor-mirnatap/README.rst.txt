:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirnatap'
.. highlight: bash

bioconductor-mirnatap
=====================

.. conda:recipe:: bioconductor-mirnatap
   :replaces_section_title:

   The package facilitates implementation of workflows requiring miRNA predictions\, it allows to integrate ranked miRNA target predictions from multiple sources available online and aggregate them with various methods which improves quality of predictions above any of the single sources. Currently predictions are available for Homo sapiens\, Mus musculus and Rattus norvegicus \(the last one through homology translation\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/miRNAtap.html
   :license: GPL-2
   :recipe: /`bioconductor-mirnatap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatap/meta.yaml>`_
   :links: biotools: :biotools:`mirnatap`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-mirnatap

   |downloads_bioconductor-mirnatap| |docker_bioconductor-mirnatap|

   :versions: 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dbi: 
   
   :depends r-plyr: 
   
   :depends r-rsqlite: 
   
   :depends r-sqldf: 
   
   :depends r-stringr: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirnatap

   and update with::

      conda update bioconductor-mirnatap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mirnatap:<tag>

   (see `bioconductor-mirnatap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirnatap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirnatap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mirnatap| image:: https://quay.io/repository/biocontainers/bioconductor-mirnatap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirnatap
.. _`bioconductor-mirnatap/tags`: https://quay.io/repository/biocontainers/bioconductor-mirnatap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirnatap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirnatap/README.html