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

   :versions: 1.3.0, 1.2.0

   :depends: :conda:package:`r-ape`  :conda:package:`r-base` >=3.4 :conda:package:`r-fields`  :conda:package:`r-pheatmap`  :conda:package:`r-scatterplot3d`  

   :required~by: |required_by_r-canopy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-canopy

   and update with::

      conda update r-canopy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-canopy


.. |required_by_r-canopy| conda:required_by:: r-canopy
.. |downloads_r-canopy| image:: https://img.shields.io/conda/dn/bioconda/r-canopy.svg?style=flat
   :alt:   (downloads)
.. |docker_r-canopy| image:: https://quay.io/repository/biocontainers/r-canopy/status
   :target: https://quay.io/repository/biocontainers/r-canopy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-canopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-canopy/README.html

