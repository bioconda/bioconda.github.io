.. title:: Package Recipe 'bioconductor-facsdorit'
.. highlight: bash


bioconductor-facsdorit
======================

.. conda:recipe:: bioconductor-facsdorit
   :replaces_section_title:

   FACS example data for cell\-based assays. This data is used in the examples and vignettes of the package prada.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/facsDorit.html
   :license: GPL-2
   :recipe: /`bioconductor-facsdorit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-facsdorit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-facsdorit/meta.yaml>`_

   


.. conda:package:: bioconductor-facsdorit

   |downloads_bioconductor-facsdorit| |docker_bioconductor-facsdorit|

   :versions: 1.24.0

   :depends: :conda:package:`bioconductor-prada` >=1.58.0,<1.59.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-facsdorit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-facsdorit

   and update with::

      conda update bioconductor-facsdorit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-facsdorit


.. |required_by_bioconductor-facsdorit| conda:required_by:: bioconductor-facsdorit
.. |downloads_bioconductor-facsdorit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-facsdorit.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-facsdorit| image:: https://quay.io/repository/biocontainers/bioconductor-facsdorit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-facsdorit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-facsdorit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-facsdorit/README.html

