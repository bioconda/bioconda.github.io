.. title:: Package Recipe 'bioconductor-mirna10cdf'
.. highlight: bash


bioconductor-mirna10cdf
=======================

.. conda:recipe:: bioconductor-mirna10cdf
   :replaces_section_title:

   A package containing an environment representing the miRNA\-1\_0.CDF file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/mirna10cdf.html
   :license: LGPL
   :recipe: /`bioconductor-mirna10cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirna10cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirna10cdf/meta.yaml>`_

   


.. conda:package:: bioconductor-mirna10cdf

   |downloads_bioconductor-mirna10cdf| |docker_bioconductor-mirna10cdf|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mirna10cdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirna10cdf

   and update with::

      conda update bioconductor-mirna10cdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mirna10cdf


.. |required_by_bioconductor-mirna10cdf| conda:required_by:: bioconductor-mirna10cdf
.. |downloads_bioconductor-mirna10cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirna10cdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mirna10cdf| image:: https://quay.io/repository/biocontainers/bioconductor-mirna10cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirna10cdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirna10cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirna10cdf/README.html

