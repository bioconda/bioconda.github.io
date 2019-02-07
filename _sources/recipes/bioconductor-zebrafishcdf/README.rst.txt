.. title:: Package Recipe 'bioconductor-zebrafishcdf'
.. highlight: bash


bioconductor-zebrafishcdf
=========================

.. conda:recipe:: bioconductor-zebrafishcdf
   :replaces_section_title:

   A package containing an environment representing the Zebrafish.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/zebrafishcdf.html
   :license: LGPL
   :recipe: /`bioconductor-zebrafishcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zebrafishcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zebrafishcdf/meta.yaml>`_

   


.. conda:package:: bioconductor-zebrafishcdf

   |downloads_bioconductor-zebrafishcdf| |docker_bioconductor-zebrafishcdf|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-zebrafishcdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-zebrafishcdf

   and update with::

      conda update bioconductor-zebrafishcdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-zebrafishcdf


.. |required_by_bioconductor-zebrafishcdf| conda:required_by:: bioconductor-zebrafishcdf
.. |downloads_bioconductor-zebrafishcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zebrafishcdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-zebrafishcdf| image:: https://quay.io/repository/biocontainers/bioconductor-zebrafishcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zebrafishcdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zebrafishcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zebrafishcdf/README.html

