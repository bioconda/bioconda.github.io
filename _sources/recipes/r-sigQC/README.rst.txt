.. title:: Package Recipe 'r-sigqc'
.. highlight: bash


r-sigqc
=======

.. conda:recipe:: r-sigQC
   :replaces_section_title:

   Provides gene signature quality control metrics in publication ready plots. Namely\, enables the visualization of properties such as expression\, variability\, correlation\, and comparison of methods of standardisation and scoring metrics.

   :homepage: https://CRAN.R-project.org/package=sigQC
   :license: OTHER / file LICENSE (Restricts use)
   :recipe: /`r-sigQC <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigQC>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigQC/meta.yaml>`_

   


.. conda:package:: r-sigqc

   |downloads_r-sigqc| |docker_r-sigqc|

   :versions: 0.1.21, 0.1.14

   :depends: :conda:package:`bioconductor-complexheatmap`  :conda:package:`bioconductor-gsva`  :conda:package:`bioconductor-rankprod`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-biclust`  :conda:package:`r-circlize`  :conda:package:`r-class`  :conda:package:`r-cluster`  :conda:package:`r-fmsb`  :conda:package:`r-gplots`  :conda:package:`r-gridgraphics`  :conda:package:`r-kernsmooth`  :conda:package:`r-lattice`  :conda:package:`r-mass`  :conda:package:`r-mclust`  :conda:package:`r-moments`  :conda:package:`r-nnet`  

   :required~by: |required_by_r-sigqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-sigqc

   and update with::

      conda update r-sigqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-sigqc


.. |required_by_r-sigqc| conda:required_by:: r-sigqc
.. |downloads_r-sigqc| image:: https://img.shields.io/conda/dn/bioconda/r-sigqc.svg?style=flat
   :alt:   (downloads)
.. |docker_r-sigqc| image:: https://quay.io/repository/biocontainers/r-sigqc/status
   :target: https://quay.io/repository/biocontainers/r-sigqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sigqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sigqc/README.html

