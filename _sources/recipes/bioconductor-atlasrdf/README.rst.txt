:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-atlasrdf'
.. highlight: bash

bioconductor-atlasrdf
=====================

.. conda:recipe:: bioconductor-atlasrdf
   :replaces_section_title:

   Query the Gene Expression Atlas RDF data at the European Bioinformatics Institute using genes\, experimental factors \(such as disease\, cell type\, compound treatments\)\, pathways and proteins. Also contains a function to perform an enrichment of your gene list across Experimental Factor Ontology \(EFO\) using the Atlas background set.

   :homepage: http://bioconductor.org/packages/3.6/bioc/html/AtlasRDF.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-atlasrdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atlasrdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atlasrdf/meta.yaml>`_
   :links: biotools: :biotools:`atlasrdf`, doi: :doi:`10.1093/bioinformatics/btt765`

   


.. conda:package:: bioconductor-atlasrdf

   |downloads_bioconductor-atlasrdf| |docker_bioconductor-atlasrdf|

   :versions: 1.12.0-0, 1.11.0-0
   
   :depends r-base: 3.3.2*
   :depends r-hash: 
   :depends r-sparql: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-atlasrdf

   and update with::

      conda update bioconductor-atlasrdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-atlasrdf:<tag>

   (see `bioconductor-atlasrdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-atlasrdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-atlasrdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-atlasrdf| image:: https://quay.io/repository/biocontainers/bioconductor-atlasrdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-atlasrdf
.. _`bioconductor-atlasrdf/tags`: https://quay.io/repository/biocontainers/bioconductor-atlasrdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-atlasrdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-atlasrdf/README.html