:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-onassis'
.. highlight: bash

bioconductor-onassis
====================

.. conda:recipe:: bioconductor-onassis
   :replaces_section_title:

   A package that allows the annotation of text with ontology terms \(mainly from OBO ontologies\) and the computation of semantic similarity measures based on the structure of the ontology between different annotated samples.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Onassis.html
   :license: GPL-2
   :recipe: /`bioconductor-onassis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onassis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onassis/meta.yaml>`_

   


.. conda:package:: bioconductor-onassis

   |downloads_bioconductor-onassis| |docker_bioconductor-onassis|

   :versions: 1.4.5-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-geometadb: >=1.44.0,<1.45.0
   :depends bioconductor-onassisjavalibs: >=1.4.0,<1.5.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-knitr: 
   :depends r-rcurl: 
   :depends r-rjava: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-onassis

   and update with::

      conda update bioconductor-onassis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-onassis:<tag>

   (see `bioconductor-onassis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-onassis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-onassis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-onassis
   :alt:   (downloads)
.. |docker_bioconductor-onassis| image:: https://quay.io/repository/biocontainers/bioconductor-onassis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-onassis
.. _`bioconductor-onassis/tags`: https://quay.io/repository/biocontainers/bioconductor-onassis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-onassis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-onassis/README.html