:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirnapath'
.. highlight: bash

bioconductor-mirnapath
======================

.. conda:recipe:: bioconductor-mirnapath
   :replaces_section_title:

   This package provides pathway enrichment techniques for miRNA expression data. Specifically\, the set of methods handles the many\-to\-many relationship between miRNAs and the multiple genes they are predicted to target \(and thus affect.\)  It also handles the gene\-to\-pathway relationships separately. Both steps are designed to preserve the additive effects of miRNAs on genes\, many miRNAs affecting one gene\, one miRNA affecting multiple genes\, or many miRNAs affecting many genes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/miRNApath.html
   :license: LGPL-2.1
   :recipe: /`bioconductor-mirnapath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnapath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnapath/meta.yaml>`_
   :links: biotools: :biotools:`mirnapath`

   


.. conda:package:: bioconductor-mirnapath

   |downloads_bioconductor-mirnapath| |docker_bioconductor-mirnapath|

   :versions: 1.42.0-0, 1.40.0-0, 1.38.0-0, 1.36.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirnapath

   and update with::

      conda update bioconductor-mirnapath

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirnapath:<tag>

   (see `bioconductor-mirnapath/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirnapath| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirnapath.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mirnapath| image:: https://quay.io/repository/biocontainers/bioconductor-mirnapath/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirnapath
.. _`bioconductor-mirnapath/tags`: https://quay.io/repository/biocontainers/bioconductor-mirnapath?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirnapath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirnapath/README.html