:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvgsa'
.. highlight: bash

bioconductor-cnvgsa
===================

.. conda:recipe:: bioconductor-cnvgsa
   :replaces_section_title:
   :noindex:

   Gene Set Analysis of \(Rare\) Copy Number Variants

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/cnvGSA.html
   :license: LGPL
   :recipe: /`bioconductor-cnvgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvgsa/meta.yaml>`_
   :links: biotools: :biotools:`cnvgsa`, doi: :doi:`10.1038/nmeth.3252`

   This package is intended to facilitate gene\-set association with rare CNVs in case\-control studies.


.. conda:package:: bioconductor-cnvgsa

   |downloads_bioconductor-cnvgsa| |docker_bioconductor-cnvgsa|

   :versions:
      
      

      ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-brglm: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-splitstackshape: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnvgsa

   and update with::

      conda update bioconductor-cnvgsa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnvgsa:<tag>

   (see `bioconductor-cnvgsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnvgsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvgsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnvgsa
   :alt:   (downloads)
.. |docker_bioconductor-cnvgsa| image:: https://quay.io/repository/biocontainers/bioconductor-cnvgsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvgsa
.. _`bioconductor-cnvgsa/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvgsa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvgsa/README.html