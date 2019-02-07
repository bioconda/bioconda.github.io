.. title:: Package Recipe 'bioconductor-pvac'
.. highlight: bash


bioconductor-pvac
=================

.. conda:recipe:: bioconductor-pvac
   :replaces_section_title:

   The package contains the function for filtering genes by the proportion of variation accounted for by the first principal component \(PVAC\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pvac.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-pvac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pvac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pvac/meta.yaml>`_
   :links: biotools: :biotools:`pvac`, doi: :doi:`10.1093/nar/gkr241`

   


.. conda:package:: bioconductor-pvac

   |downloads_bioconductor-pvac| |docker_bioconductor-pvac|

   :versions: 1.30.0, 1.28.0, 1.26.0, 1.24.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-pvac|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pvac

   and update with::

      conda update bioconductor-pvac

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pvac


.. |required_by_bioconductor-pvac| conda:required_by:: bioconductor-pvac
.. |downloads_bioconductor-pvac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pvac.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pvac| image:: https://quay.io/repository/biocontainers/bioconductor-pvac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pvac







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pvac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pvac/README.html

