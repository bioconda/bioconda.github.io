.. title:: Package Recipe 'r-orqa'
.. highlight: bash


r-orqa
======

.. conda:recipe:: r-orqa
   :replaces_section_title:

   Assess repeatability\, accuracy and corss\-platform agreement of titration microarray data based on order restricted inference procedures

   :homepage: https://CRAN.R-project.org/package=orQA
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-orqa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-orqa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-orqa/meta.yaml>`_

   


.. conda:package:: r-orqa

   |downloads_r-orqa| |docker_r-orqa|

   :versions: 0.2.1

   :depends: :conda:package:`bioconductor-genefilter` >=1.24.3 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gtools` >=2.6.1 :conda:package:`r-nlme` >=3.1_96 :conda:package:`r-rcpp` >=0.8.9 

   :required~by: |required_by_r-orqa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-orqa

   and update with::

      conda update r-orqa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-orqa


.. |required_by_r-orqa| conda:required_by:: r-orqa
.. |downloads_r-orqa| image:: https://img.shields.io/conda/dn/bioconda/r-orqa.svg?style=flat
   :alt:   (downloads)
.. |docker_r-orqa| image:: https://quay.io/repository/biocontainers/r-orqa/status
   :target: https://quay.io/repository/biocontainers/r-orqa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-orqa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-orqa/README.html

