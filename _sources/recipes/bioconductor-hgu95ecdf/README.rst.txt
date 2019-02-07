.. title:: Package Recipe 'bioconductor-hgu95ecdf'
.. highlight: bash


bioconductor-hgu95ecdf
======================

.. conda:recipe:: bioconductor-hgu95ecdf
   :replaces_section_title:

   A package containing an environment representing the HG U95E.CDF file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgu95ecdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgu95ecdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95ecdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95ecdf/meta.yaml>`_

   


.. conda:package:: bioconductor-hgu95ecdf

   |downloads_bioconductor-hgu95ecdf| |docker_bioconductor-hgu95ecdf|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-hgu95ecdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95ecdf

   and update with::

      conda update bioconductor-hgu95ecdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hgu95ecdf


.. |required_by_bioconductor-hgu95ecdf| conda:required_by:: bioconductor-hgu95ecdf
.. |downloads_bioconductor-hgu95ecdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95ecdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hgu95ecdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95ecdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95ecdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95ecdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95ecdf/README.html

