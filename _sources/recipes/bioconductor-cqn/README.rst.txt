.. title:: Package Recipe 'bioconductor-cqn'
.. highlight: bash


bioconductor-cqn
================

.. conda:recipe:: bioconductor-cqn
   :replaces_section_title:

   A normalization tool for RNA\-Seq data\, implementing the conditional quantile normalization method.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cqn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cqn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cqn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cqn/meta.yaml>`_
   :links: biotools: :biotools:`cqn`

   


.. conda:package:: bioconductor-cqn

   |downloads_bioconductor-cqn| |docker_bioconductor-cqn|

   :versions: 1.28.0, 1.26.0, 1.24.0, 1.22.0

   :depends: :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mclust`  :conda:package:`r-nor1mix`  :conda:package:`r-quantreg`  

   :required~by: |required_by_bioconductor-cqn|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cqn

   and update with::

      conda update bioconductor-cqn

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cqn


.. |required_by_bioconductor-cqn| conda:required_by:: bioconductor-cqn
.. |downloads_bioconductor-cqn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cqn.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cqn| image:: https://quay.io/repository/biocontainers/bioconductor-cqn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cqn







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cqn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cqn/README.html

