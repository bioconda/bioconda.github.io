.. title:: Package Recipe 'bioconductor-ntw'
.. highlight: bash


bioconductor-ntw
================

.. conda:recipe:: bioconductor-ntw
   :replaces_section_title:

   This package predicts the gene\-gene interaction network and identifies the direct transcriptional targets of the perturbation using an ODE \(Ordinary Differential Equation\) based method.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/NTW.html
   :license: GPL-2
   :recipe: /`bioconductor-ntw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ntw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ntw/meta.yaml>`_
   :links: biotools: :biotools:`ntw`, doi: :doi:`10.1093/bioinformatics/btq629`

   


.. conda:package:: bioconductor-ntw

   |downloads_bioconductor-ntw| |docker_bioconductor-ntw|

   :versions: 1.32.0, 1.30.0, 1.28.0, 1.26.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mvtnorm`  

   :required~by: |required_by_bioconductor-ntw|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ntw

   and update with::

      conda update bioconductor-ntw

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ntw


.. |required_by_bioconductor-ntw| conda:required_by:: bioconductor-ntw
.. |downloads_bioconductor-ntw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ntw.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ntw| image:: https://quay.io/repository/biocontainers/bioconductor-ntw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ntw







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ntw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ntw/README.html

