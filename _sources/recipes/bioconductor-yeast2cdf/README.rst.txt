.. title:: Package Recipe 'bioconductor-yeast2cdf'
.. highlight: bash


bioconductor-yeast2cdf
======================

.. conda:recipe:: bioconductor-yeast2cdf
   :replaces_section_title:

   A package containing an environment representing the Yeast\_2.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/yeast2cdf.html
   :license: LGPL
   :recipe: /`bioconductor-yeast2cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeast2cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeast2cdf/meta.yaml>`_

   


.. conda:package:: bioconductor-yeast2cdf

   |downloads_bioconductor-yeast2cdf| |docker_bioconductor-yeast2cdf|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-yeast2cdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yeast2cdf

   and update with::

      conda update bioconductor-yeast2cdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-yeast2cdf


.. |required_by_bioconductor-yeast2cdf| conda:required_by:: bioconductor-yeast2cdf
.. |downloads_bioconductor-yeast2cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yeast2cdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-yeast2cdf| image:: https://quay.io/repository/biocontainers/bioconductor-yeast2cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yeast2cdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yeast2cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yeast2cdf/README.html

