.. title:: Package Recipe 'bioconductor-rbioinf'
.. highlight: bash


bioconductor-rbioinf
====================

.. conda:recipe:: bioconductor-rbioinf
   :replaces_section_title:

   Functions and datasets and examples to accompany the monograph R For Bioinformatics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RBioinf.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rbioinf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbioinf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbioinf/meta.yaml>`_
   :links: biotools: :biotools:`rbioinf`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rbioinf

   |downloads_bioconductor-rbioinf| |docker_bioconductor-rbioinf|

   :versions: 1.42.0, 1.40.0, 1.38.0, 1.36.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-rbioinf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbioinf

   and update with::

      conda update bioconductor-rbioinf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rbioinf


.. |required_by_bioconductor-rbioinf| conda:required_by:: bioconductor-rbioinf
.. |downloads_bioconductor-rbioinf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbioinf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rbioinf| image:: https://quay.io/repository/biocontainers/bioconductor-rbioinf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbioinf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbioinf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbioinf/README.html

