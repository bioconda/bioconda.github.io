:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-keggorthology'
.. highlight: bash

bioconductor-keggorthology
==========================

.. conda:recipe:: bioconductor-keggorthology
   :replaces_section_title:

   graphical representation of the Feb 2010 KEGG Orthology. The KEGG orthology is a set of pathway IDs that are not to be confused with the KEGG ortholog IDs.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/keggorthology.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-keggorthology <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggorthology>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggorthology/meta.yaml>`_
   :links: biotools: :biotools:`keggorthology`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-keggorthology

   |downloads_bioconductor-keggorthology| |docker_bioconductor-keggorthology|

   :versions: 2.34.0-0, 2.32.0-0, 2.30.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   
   :depends bioconductor-hgu95av2.db: >=3.2.0,<3.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dbi: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-keggorthology

   and update with::

      conda update bioconductor-keggorthology

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-keggorthology:<tag>

   (see `bioconductor-keggorthology/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-keggorthology| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-keggorthology.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-keggorthology| image:: https://quay.io/repository/biocontainers/bioconductor-keggorthology/status
   :target: https://quay.io/repository/biocontainers/bioconductor-keggorthology
.. _`bioconductor-keggorthology/tags`: https://quay.io/repository/biocontainers/bioconductor-keggorthology?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-keggorthology/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-keggorthology/README.html