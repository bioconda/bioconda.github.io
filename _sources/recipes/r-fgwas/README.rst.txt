:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-fgwas'
.. highlight: bash

r-fgwas
=======

.. conda:recipe:: r-fgwas
   :replaces_section_title:

   GWAS tools for longitudinal genetic traits based on fGWAS statistical model.

   :homepage: https://github.com/wzhy2000/fGWAS
   :license: LGPL / GNU GPL
   :recipe: /`r-fgwas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fgwas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fgwas/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.jgg.2018.06.006`

   


.. conda:package:: r-fgwas

   |downloads_r-fgwas| |docker_r-fgwas|

   :versions: 0.3.6-2, 0.3.6-1, 0.3.6-0, 0.3.5-0
   
   :depends bioconductor-snpstats: 
   :depends parallel: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-devtools: 
   :depends r-minpack.lm: 
   :depends r-mvtnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-fgwas

   and update with::

      conda update r-fgwas

   or use the docker container::

      docker pull quay.io/biocontainers/r-fgwas:<tag>

   (see `r-fgwas/tags`_ for valid values for ``<tag>``)


.. |downloads_r-fgwas| image:: https://img.shields.io/conda/dn/bioconda/r-fgwas.svg?style=flat
   :target: https://anaconda.org/bioconda/r-fgwas
   :alt:   (downloads)
.. |docker_r-fgwas| image:: https://quay.io/repository/biocontainers/r-fgwas/status
   :target: https://quay.io/repository/biocontainers/r-fgwas
.. _`r-fgwas/tags`: https://quay.io/repository/biocontainers/r-fgwas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-fgwas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-fgwas/README.html