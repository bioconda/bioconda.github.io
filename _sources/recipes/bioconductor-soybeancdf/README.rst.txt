.. title:: Package Recipe 'bioconductor-soybeancdf'
.. highlight: bash


bioconductor-soybeancdf
=======================

.. conda:recipe:: bioconductor-soybeancdf
   :replaces_section_title:

   A package containing an environment representing the Soybean.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/soybeancdf.html
   :license: LGPL
   :recipe: /`bioconductor-soybeancdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soybeancdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-soybeancdf/meta.yaml>`_

   


.. conda:package:: bioconductor-soybeancdf

   |downloads_bioconductor-soybeancdf| |docker_bioconductor-soybeancdf|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-soybeancdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-soybeancdf

   and update with::

      conda update bioconductor-soybeancdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-soybeancdf


.. |required_by_bioconductor-soybeancdf| conda:required_by:: bioconductor-soybeancdf
.. |downloads_bioconductor-soybeancdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-soybeancdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-soybeancdf| image:: https://quay.io/repository/biocontainers/bioconductor-soybeancdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-soybeancdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-soybeancdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-soybeancdf/README.html

