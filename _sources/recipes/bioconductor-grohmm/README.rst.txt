.. title:: Package Recipe 'bioconductor-grohmm'
.. highlight: bash


bioconductor-grohmm
===================

.. conda:recipe:: bioconductor-grohmm
   :replaces_section_title:

   A pipeline for the analysis of GRO\-seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/groHMM.html
   :license: GPL-3
   :recipe: /`bioconductor-grohmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grohmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grohmm/meta.yaml>`_

   


.. conda:package:: bioconductor-grohmm

   |downloads_bioconductor-grohmm| |docker_bioconductor-grohmm|

   :versions: 1.16.0

   :depends: :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-grohmm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-grohmm

   and update with::

      conda update bioconductor-grohmm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-grohmm


.. |required_by_bioconductor-grohmm| conda:required_by:: bioconductor-grohmm
.. |downloads_bioconductor-grohmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-grohmm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-grohmm| image:: https://quay.io/repository/biocontainers/bioconductor-grohmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-grohmm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-grohmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-grohmm/README.html

