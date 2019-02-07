.. title:: Package Recipe 'bioconductor-iterativebmasurv'
.. highlight: bash


bioconductor-iterativebmasurv
=============================

.. conda:recipe:: bioconductor-iterativebmasurv
   :replaces_section_title:

   The iterative Bayesian Model Averaging \(BMA\) algorithm for survival analysis is a variable selection method for applying survival analysis to microarray data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/iterativeBMAsurv.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-iterativebmasurv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterativebmasurv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterativebmasurv/meta.yaml>`_
   :links: biotools: :biotools:`iterativebmasurv`, doi: :doi:`10.1186/1471-2105-10-72`

   


.. conda:package:: bioconductor-iterativebmasurv

   |downloads_bioconductor-iterativebmasurv| |docker_bioconductor-iterativebmasurv|

   :versions: 1.40.0, 1.38.0, 1.36.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bma`  :conda:package:`r-leaps`  :conda:package:`r-survival`  

   :required~by: |required_by_bioconductor-iterativebmasurv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iterativebmasurv

   and update with::

      conda update bioconductor-iterativebmasurv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-iterativebmasurv


.. |required_by_bioconductor-iterativebmasurv| conda:required_by:: bioconductor-iterativebmasurv
.. |downloads_bioconductor-iterativebmasurv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iterativebmasurv.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-iterativebmasurv| image:: https://quay.io/repository/biocontainers/bioconductor-iterativebmasurv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iterativebmasurv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iterativebmasurv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iterativebmasurv/README.html

