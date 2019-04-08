:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-apcomplex'
.. highlight: bash

bioconductor-apcomplex
======================

.. conda:recipe:: bioconductor-apcomplex
   :replaces_section_title:

   Functions to estimate a bipartite graph of protein complex membership using AP\-MS data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/apComplex.html
   :license: LGPL
   :recipe: /`bioconductor-apcomplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apcomplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apcomplex/meta.yaml>`_
   :links: biotools: :biotools:`apcomplex`, doi: :doi:`10.1093/bioinformatics/bti567`

   


.. conda:package:: bioconductor-apcomplex

   |downloads_bioconductor-apcomplex| |docker_bioconductor-apcomplex|

   :versions: 2.48.0-0, 2.46.0-0, 2.44.0-0
   
   :depends bioconductor-graph: >=1.60.0,<1.61.0
   :depends bioconductor-org.sc.sgd.db: >=3.7.0,<3.8.0
   :depends bioconductor-rbgl: >=1.58.0,<1.59.0
   :depends bioconductor-rgraphviz: >=2.26.0,<2.27.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-apcomplex

   and update with::

      conda update bioconductor-apcomplex

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-apcomplex:<tag>

   (see `bioconductor-apcomplex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-apcomplex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-apcomplex.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-apcomplex| image:: https://quay.io/repository/biocontainers/bioconductor-apcomplex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-apcomplex
.. _`bioconductor-apcomplex/tags`: https://quay.io/repository/biocontainers/bioconductor-apcomplex?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-apcomplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-apcomplex/README.html