.. title:: Package Recipe 'xtail'
.. highlight: bash


xtail
=====

.. conda:recipe:: xtail
   :replaces_section_title:

   Genome\-wide assessment of differential translations with ribosome profiling data

   :homepage: https://github.com/xryanglab/xtail
   :license: GPL-3
   :recipe: /`xtail <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtail>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtail/meta.yaml>`_

   


.. conda:package:: xtail

   |downloads_xtail| |docker_xtail|

   :versions: 1.1.5

   :depends: :conda:package:`bioconductor-biobase`  :conda:package:`bioconductor-biocgenerics` >=0.7.5 :conda:package:`bioconductor-biocparallel` >=1.12.0 :conda:package:`bioconductor-deseq2` ==1.18.1 :conda:package:`bioconductor-genefilter`  :conda:package:`bioconductor-geneplotter`  :conda:package:`bioconductor-genomicranges`  :conda:package:`bioconductor-iranges`  :conda:package:`bioconductor-s4vectors` >=0.9.25 :conda:package:`bioconductor-summarizedexperiment` >=1.8.0 :conda:package:`bioconductor-tximport`  :conda:package:`r-base` 3.4.1* :conda:package:`r-getopt`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-hmisc`  :conda:package:`r-hmisc`  :conda:package:`r-lazyeval` >=0.2.0 :conda:package:`r-locfit`  :conda:package:`r-rcpp` >=0.11.0 :conda:package:`r-rcpparmadillo`  :conda:package:`r-rjson`  

   :required~by: |required_by_xtail|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xtail

   and update with::

      conda update xtail

   or use the docker container::

      docker pull quay.io/repository/biocontainers/xtail


.. |required_by_xtail| conda:required_by:: xtail
.. |downloads_xtail| image:: https://img.shields.io/conda/dn/bioconda/xtail.svg?style=flat
   :alt:   (downloads)
.. |docker_xtail| image:: https://quay.io/repository/biocontainers/xtail/status
   :target: https://quay.io/repository/biocontainers/xtail







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xtail/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xtail/README.html

