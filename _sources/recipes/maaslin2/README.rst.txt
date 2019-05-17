:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maaslin2'
.. highlight: bash

maaslin2
========

.. conda:recipe:: maaslin2
   :replaces_section_title:

   MaAsLin2 is comprehensive R package for efficiently determining multivariable association between microbial meta\'omic features and clinical metadata.

   :homepage: http://huttenhower.sph.harvard.edu/maaslin2
   :license: Custom OSS
   :recipe: /`maaslin2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maaslin2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maaslin2/meta.yaml>`_

   


.. conda:package:: maaslin2

   |downloads_maaslin2| |docker_maaslin2|

   :versions: 0.3.0-0
   
   :depends bioconductor-edger: 
   :depends bioconductor-metagenomeseq: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-car: 
   :depends r-chemometrics: 
   :depends r-cplm: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hash: 
   :depends r-lmertest: 
   :depends r-logging: 
   :depends r-mass: 
   :depends r-mumin: 
   :depends r-optparse: 
   :depends r-pbapply: 
   :depends r-pheatmap: 
   :depends r-pscl: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install maaslin2

   and update with::

      conda update maaslin2

   or use the docker container::

      docker pull quay.io/biocontainers/maaslin2:<tag>

   (see `maaslin2/tags`_ for valid values for ``<tag>``)


.. |downloads_maaslin2| image:: https://img.shields.io/conda/dn/bioconda/maaslin2.svg?style=flat
   :target: https://anaconda.org/bioconda/maaslin2
   :alt:   (downloads)
.. |docker_maaslin2| image:: https://quay.io/repository/biocontainers/maaslin2/status
   :target: https://quay.io/repository/biocontainers/maaslin2
.. _`maaslin2/tags`: https://quay.io/repository/biocontainers/maaslin2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maaslin2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maaslin2/README.html