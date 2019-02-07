.. title:: Package Recipe 'bioconductor-metid'
.. highlight: bash


bioconductor-metid
==================

.. conda:recipe:: bioconductor-metid
   :replaces_section_title:

   This package uses an innovative network\-based approach that will enhance our ability to determine the identities of significant ions detected by LC\-MS.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MetID.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-metid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metid/meta.yaml>`_

   


.. conda:package:: bioconductor-metid

   |downloads_bioconductor-metid| |docker_bioconductor-metid|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-chemminer` >=3.34.0,<3.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-devtools` >=1.13.0 :conda:package:`r-igraph` >=1.2.1 :conda:package:`r-matrix` >=1.2-12 :conda:package:`r-stringr` >=1.3.0 

   :required~by: |required_by_bioconductor-metid|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metid

   and update with::

      conda update bioconductor-metid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-metid


.. |required_by_bioconductor-metid| conda:required_by:: bioconductor-metid
.. |downloads_bioconductor-metid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metid.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-metid| image:: https://quay.io/repository/biocontainers/bioconductor-metid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metid







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metid/README.html

