.. title:: Package Recipe 'bioconductor-agcdf'
.. highlight: bash


bioconductor-agcdf
==================

.. conda:recipe:: bioconductor-agcdf
   :replaces_section_title:

   A package containing an environment representing the AG.CDF file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/agcdf.html
   :license: LGPL
   :recipe: /`bioconductor-agcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-agcdf/meta.yaml>`_

   


.. conda:package:: bioconductor-agcdf

   |downloads_bioconductor-agcdf| |docker_bioconductor-agcdf|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-agcdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-agcdf

   and update with::

      conda update bioconductor-agcdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-agcdf


.. |required_by_bioconductor-agcdf| conda:required_by:: bioconductor-agcdf
.. |downloads_bioconductor-agcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-agcdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-agcdf| image:: https://quay.io/repository/biocontainers/bioconductor-agcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-agcdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-agcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-agcdf/README.html

