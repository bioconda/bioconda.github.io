:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iterativebmasurv'
.. highlight: bash

bioconductor-iterativebmasurv
=============================

.. conda:recipe:: bioconductor-iterativebmasurv
   :replaces_section_title:

   The iterative Bayesian Model Averaging \(BMA\) algorithm for survival analysis is a variable selection method for applying survival analysis to microarray data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/iterativeBMAsurv.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-iterativebmasurv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterativebmasurv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterativebmasurv/meta.yaml>`_
   :links: biotools: :biotools:`iterativebmasurv`, doi: :doi:`10.1186/1471-2105-10-72`

   


.. conda:package:: bioconductor-iterativebmasurv

   |downloads_bioconductor-iterativebmasurv| |docker_bioconductor-iterativebmasurv|

   :versions: 1.42.0-0, 1.40.0-0, 1.38.0-0, 1.36.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bma: 
   :depends r-leaps: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iterativebmasurv

   and update with::

      conda update bioconductor-iterativebmasurv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iterativebmasurv:<tag>

   (see `bioconductor-iterativebmasurv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iterativebmasurv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iterativebmasurv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iterativebmasurv
   :alt:   (downloads)
.. |docker_bioconductor-iterativebmasurv| image:: https://quay.io/repository/biocontainers/bioconductor-iterativebmasurv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iterativebmasurv
.. _`bioconductor-iterativebmasurv/tags`: https://quay.io/repository/biocontainers/bioconductor-iterativebmasurv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iterativebmasurv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iterativebmasurv/README.html