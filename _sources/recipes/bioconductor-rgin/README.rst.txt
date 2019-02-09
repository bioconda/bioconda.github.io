.. title:: Package Recipe 'bioconductor-rgin'
.. highlight: bash


bioconductor-rgin
=================

.. conda:recipe:: bioconductor-rgin
   :replaces_section_title:

   C\+\+ implementation of SConES.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Rgin.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rgin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgin/meta.yaml>`_

   


.. conda:package:: bioconductor-rgin

   |downloads_bioconductor-rgin| |docker_bioconductor-rgin|

   :versions: 1.2.0

   :depends: :conda:package:`libcxx` >=4.0.1 :conda:package:`llvm-openmp`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcppeigen` >=0.3.3.3.0 

   :required~by: |required_by_bioconductor-rgin|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgin

   and update with::

      conda update bioconductor-rgin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rgin


.. |required_by_bioconductor-rgin| conda:required_by:: bioconductor-rgin
.. |downloads_bioconductor-rgin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgin.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rgin| image:: https://quay.io/repository/biocontainers/bioconductor-rgin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgin







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgin/README.html

