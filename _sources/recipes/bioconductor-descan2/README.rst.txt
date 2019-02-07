.. title:: Package Recipe 'bioconductor-descan2'
.. highlight: bash


bioconductor-descan2
====================

.. conda:recipe:: bioconductor-descan2
   :replaces_section_title:

   Integrated peak and differential caller\, specifically designed for broad epigenomic signals.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DEScan2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-descan2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-descan2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-descan2/meta.yaml>`_

   


.. conda:package:: bioconductor-descan2

   |downloads_bioconductor-descan2| |docker_bioconductor-descan2|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-chippeakanno` >=3.16.0,<3.17.0 :conda:package:`bioconductor-delayedarray` >=0.8.0,<0.9.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-glue`  :conda:package:`r-plyr`  :conda:package:`r-rcpp` >=0.12.13 :conda:package:`r-rcpparmadillo`  

   :required~by: |required_by_bioconductor-descan2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-descan2

   and update with::

      conda update bioconductor-descan2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-descan2


.. |required_by_bioconductor-descan2| conda:required_by:: bioconductor-descan2
.. |downloads_bioconductor-descan2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-descan2.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-descan2| image:: https://quay.io/repository/biocontainers/bioconductor-descan2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-descan2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-descan2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-descan2/README.html

