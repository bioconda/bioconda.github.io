.. title:: Package Recipe 'bioconductor-cnvgsa'
.. highlight: bash


bioconductor-cnvgsa
===================

.. conda:recipe:: bioconductor-cnvgsa
   :replaces_section_title:

   This package is intended to facilitate gene\-set association with rare CNVs in case\-control studies.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cnvGSA.html
   :license: LGPL
   :recipe: /`bioconductor-cnvgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvgsa/meta.yaml>`_
   :links: biotools: :biotools:`cnvgsa`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-cnvgsa

   |downloads_bioconductor-cnvgsa| |docker_bioconductor-cnvgsa|

   :versions: 1.26.0, 1.24.0, 1.22.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-brglm`  :conda:package:`r-doparallel`  :conda:package:`r-foreach`  :conda:package:`r-splitstackshape`  

   :required~by: |required_by_bioconductor-cnvgsa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnvgsa

   and update with::

      conda update bioconductor-cnvgsa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cnvgsa


.. |required_by_bioconductor-cnvgsa| conda:required_by:: bioconductor-cnvgsa
.. |downloads_bioconductor-cnvgsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvgsa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cnvgsa| image:: https://quay.io/repository/biocontainers/bioconductor-cnvgsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvgsa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvgsa/README.html

