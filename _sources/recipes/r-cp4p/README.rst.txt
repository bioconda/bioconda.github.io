.. title:: Package Recipe 'r-cp4p'
.. highlight: bash


r-cp4p
======

.. conda:recipe:: r-cp4p
   :replaces_section_title:

   Functions to check whether a vector of p\-values respects the assumptions of FDR \(false discovery rate\) control procedures and to compute adjusted p\-values.

   :homepage: https://CRAN.R-project.org/package=cp4p
   :license: GPL3 / GPL-3
   :recipe: /`r-cp4p <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cp4p>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cp4p/meta.yaml>`_

   


.. conda:package:: r-cp4p

   |downloads_r-cp4p| |docker_r-cp4p|

   :versions: 0.3.5

   :depends: :conda:package:`bioconductor-limma`  :conda:package:`bioconductor-multtest`  :conda:package:`bioconductor-qvalue`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mess`  

   :required~by: |required_by_r-cp4p|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-cp4p

   and update with::

      conda update r-cp4p

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-cp4p


.. |required_by_r-cp4p| conda:required_by:: r-cp4p
.. |downloads_r-cp4p| image:: https://img.shields.io/conda/dn/bioconda/r-cp4p.svg?style=flat
   :alt:   (downloads)
.. |docker_r-cp4p| image:: https://quay.io/repository/biocontainers/r-cp4p/status
   :target: https://quay.io/repository/biocontainers/r-cp4p







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cp4p/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cp4p/README.html

