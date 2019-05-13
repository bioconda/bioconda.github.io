:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dbchip'
.. highlight: bash

r-dbchip
========

.. conda:recipe:: r-dbchip
   :replaces_section_title:

   ChIP\-seq differential binding

   :homepage: http://pages.cs.wisc.edu/~kliang/DBChIP
   :license: GPL (>= 2)
   :recipe: /`r-dbchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dbchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dbchip/meta.yaml>`_
   :links: biotools: :biotools:`dbchip`, doi: :doi:`10.1093/bioinformatics/btr605`

   


.. conda:package:: r-dbchip

   |downloads_r-dbchip| |docker_r-dbchip|

   :versions: 1.1.6-1, 1.1.6-0
   
   :depends bioconductor-deseq: 
   :depends bioconductor-edger: 
   :depends r: 3.2.2*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-dbchip

   and update with::

      conda update r-dbchip

   or use the docker container::

      docker pull quay.io/biocontainers/r-dbchip:<tag>

   (see `r-dbchip/tags`_ for valid values for ``<tag>``)


.. |downloads_r-dbchip| image:: https://img.shields.io/conda/dn/bioconda/r-dbchip.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dbchip
   :alt:   (downloads)
.. |docker_r-dbchip| image:: https://quay.io/repository/biocontainers/r-dbchip/status
   :target: https://quay.io/repository/biocontainers/r-dbchip
.. _`r-dbchip/tags`: https://quay.io/repository/biocontainers/r-dbchip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dbchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dbchip/README.html