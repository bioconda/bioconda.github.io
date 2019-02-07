.. title:: Package Recipe 'bioconductor-mapkl'
.. highlight: bash


bioconductor-mapkl
==================

.. conda:recipe:: bioconductor-mapkl
   :replaces_section_title:

   We propose a hybrid FS method \(mAP\-KL\)\, which combines multiple hypothesis testing and affinity propagation \(AP\)\-clustering algorithm along with the Krzanowski \& Lai cluster quality index\, to select a small yet informative subset of genes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/mAPKL.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mapkl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapkl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapkl/meta.yaml>`_

   


.. conda:package:: bioconductor-mapkl

   |downloads_bioconductor-mapkl| |docker_bioconductor-mapkl|

   :versions: 

   :depends: 

   :required~by: |required_by_bioconductor-mapkl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mapkl

   and update with::

      conda update bioconductor-mapkl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mapkl


.. |required_by_bioconductor-mapkl| conda:required_by:: bioconductor-mapkl
.. |downloads_bioconductor-mapkl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mapkl.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mapkl| image:: https://quay.io/repository/biocontainers/bioconductor-mapkl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mapkl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mapkl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mapkl/README.html

