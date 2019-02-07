.. title:: Package Recipe 'bioconductor-hgu95dcdf'
.. highlight: bash


bioconductor-hgu95dcdf
======================

.. conda:recipe:: bioconductor-hgu95dcdf
   :replaces_section_title:

   A package containing an environment representing the HG U95D.CDF file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgu95dcdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgu95dcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95dcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95dcdf/meta.yaml>`_

   


.. conda:package:: bioconductor-hgu95dcdf

   |downloads_bioconductor-hgu95dcdf| |docker_bioconductor-hgu95dcdf|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-hgu95dcdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95dcdf

   and update with::

      conda update bioconductor-hgu95dcdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hgu95dcdf


.. |required_by_bioconductor-hgu95dcdf| conda:required_by:: bioconductor-hgu95dcdf
.. |downloads_bioconductor-hgu95dcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95dcdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hgu95dcdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95dcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95dcdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95dcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95dcdf/README.html

