:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-phewas'
.. highlight: bash

r-phewas
========

.. conda:recipe:: r-phewas
   :replaces_section_title:

   Phenome Wide Association Studies \(PheWAS\) \- Functions to perform Phenome Wide Association Studies \(PheWAS\). These functions include the conversion of ICD9 codes to PheWAS codes \(v1.2\)\, statistical analysis\, and plotting.

   :homepage: https://github.com/PheWAS/PheWAS
   :license: GPL / GPL-3
   :recipe: /`r-phewas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phewas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phewas/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu197`

   


.. conda:package:: r-phewas

   |downloads_r-phewas| |docker_r-phewas|

   :versions: 0.12.1-0
   
   :depends libgcc-ng: >=4.9
   :depends libgfortran-ng: >=4.9
   :depends r-base: >=3.4.1,<3.4.2.0a0
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: >=2.2.0
   :depends r-ggrepel: 
   :depends r-lmtest: 
   :depends r-logistf: 
   :depends r-mass: 
   :depends r-meta: 
   :depends r-survival: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-phewas

   and update with::

      conda update r-phewas

   or use the docker container::

      docker pull quay.io/biocontainers/r-phewas:<tag>

   (see `r-phewas/tags`_ for valid values for ``<tag>``)


.. |downloads_r-phewas| image:: https://img.shields.io/conda/dn/bioconda/r-phewas.svg?style=flat
   :alt:   (downloads)
.. |docker_r-phewas| image:: https://quay.io/repository/biocontainers/r-phewas/status
   :target: https://quay.io/repository/biocontainers/r-phewas
.. _`r-phewas/tags`: https://quay.io/repository/biocontainers/r-phewas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phewas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phewas/README.html