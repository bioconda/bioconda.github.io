:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-canopy'
.. highlight: bash

r-canopy
========

.. conda:recipe:: r-canopy
   :replaces_section_title:

   A statistical framework and computational procedure for identifying the sub\-populations within a tumor\, determining the mutation profiles of each  subpopulation\, and inferring the tumor\'s phylogenetic history. The input are  variant allele frequencies \(VAFs\) of somatic single nucleotide alterations  \(SNAs\) along with allele\-specific coverage ratios between the tumor and matched normal sample for somatic copy number alterations \(CNAs\). These quantities can be directly taken from the output of existing software. Canopy provides a  general mathematical framework for pooling data across samples and sites to  infer the underlying parameters. For SNAs that fall within CNA regions\, Canopy infers their temporal ordering and resolves their phase.  When there are  multiple evolutionary configurations consistent with the data\, Canopy outputs  all configurations along with their confidence assessment.

   :homepage: https://github.com/yuchaojiang/Canopy
   :license: GPL2 / GPL-2
   :recipe: /`r-canopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-canopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-canopy/meta.yaml>`_

   


.. conda:package:: r-canopy

   |downloads_r-canopy| |docker_r-canopy|

   :versions: 1.3.0-3, 1.3.0-2, 1.3.0-0, 1.2.0-0
   
   :depends r-ape: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-fields: 
   :depends r-pheatmap: 
   :depends r-scatterplot3d: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-canopy

   and update with::

      conda update r-canopy

   or use the docker container::

      docker pull quay.io/biocontainers/r-canopy:<tag>

   (see `r-canopy/tags`_ for valid values for ``<tag>``)


.. |downloads_r-canopy| image:: https://img.shields.io/conda/dn/bioconda/r-canopy.svg?style=flat
   :target: https://anaconda.org/bioconda/r-canopy
   :alt:   (downloads)
.. |docker_r-canopy| image:: https://quay.io/repository/biocontainers/r-canopy/status
   :target: https://quay.io/repository/biocontainers/r-canopy
.. _`r-canopy/tags`: https://quay.io/repository/biocontainers/r-canopy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-canopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-canopy/README.html