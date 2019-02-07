.. title:: Package Recipe 'bioconductor-quartpac'
.. highlight: bash


bioconductor-quartpac
=====================

.. conda:recipe:: bioconductor-quartpac
   :replaces_section_title:

   Identifies clustering of somatic mutations in proteins over the entire quaternary structure.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/QuartPAC.html
   :license: GPL-2
   :recipe: /`bioconductor-quartpac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quartpac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quartpac/meta.yaml>`_
   :links: biotools: :biotools:`quartpac`, doi: :doi:`10.1186/s12859-016-0963-3`

   


.. conda:package:: bioconductor-quartpac

   |downloads_bioconductor-quartpac| |docker_bioconductor-quartpac|

   :versions: 1.14.0, 1.12.1, 1.10.0

   :depends: :conda:package:`bioconductor-graphpac` >=1.24.0,<1.25.0 :conda:package:`bioconductor-ipac` >=1.26.0,<1.27.0 :conda:package:`bioconductor-spacepac` >=1.20.0,<1.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  

   :required~by: |required_by_bioconductor-quartpac|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-quartpac

   and update with::

      conda update bioconductor-quartpac

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-quartpac


.. |required_by_bioconductor-quartpac| conda:required_by:: bioconductor-quartpac
.. |downloads_bioconductor-quartpac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-quartpac.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-quartpac| image:: https://quay.io/repository/biocontainers/bioconductor-quartpac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-quartpac







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-quartpac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-quartpac/README.html

