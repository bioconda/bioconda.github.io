.. title:: Package Recipe 'bioconductor-camthc'
.. highlight: bash


bioconductor-camthc
===================

.. conda:recipe:: bioconductor-camthc
   :replaces_section_title:

   An R package for tissue heterogeneity characterization by convex analysis of mixtures \(CAM\). It provides basic functions to perform unsupervised deconvolution on mixture expression profiles by CAM and some auxiliary functions to help understand the subpopulation\-specific results. It also implements functions to perform supervised deconvolution based on prior knowledge of molecular markers\, S matrix or A matrix. Combining molecular markers from CAM and from prior knowledge can achieve semi\-supervised deconvolution of mixtures.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CAMTHC.html
   :license: GPL-2
   :recipe: /`bioconductor-camthc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-camthc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-camthc/meta.yaml>`_

   


.. conda:package:: bioconductor-camthc

   |downloads_bioconductor-camthc| |docker_bioconductor-camthc|

   :versions: 

   :depends: 

   :required~by: |required_by_bioconductor-camthc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-camthc

   and update with::

      conda update bioconductor-camthc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-camthc


.. |required_by_bioconductor-camthc| conda:required_by:: bioconductor-camthc
.. |downloads_bioconductor-camthc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-camthc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-camthc| image:: https://quay.io/repository/biocontainers/bioconductor-camthc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-camthc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-camthc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-camthc/README.html

