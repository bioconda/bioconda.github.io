.. title:: Package Recipe 'bioconductor-biocversion'
.. highlight: bash


bioconductor-biocversion
========================

.. conda:recipe:: bioconductor-biocversion
   :replaces_section_title:

   This package provides repository information for the appropriate version of Bioconductor.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiocVersion.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocversion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocversion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocversion/meta.yaml>`_

   


.. conda:package:: bioconductor-biocversion

   |downloads_bioconductor-biocversion| |docker_bioconductor-biocversion|

   :versions: 3.8.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-biocversion|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocversion

   and update with::

      conda update bioconductor-biocversion

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biocversion


.. |required_by_bioconductor-biocversion| conda:required_by:: bioconductor-biocversion
.. |downloads_bioconductor-biocversion| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocversion.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biocversion| image:: https://quay.io/repository/biocontainers/bioconductor-biocversion/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocversion







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocversion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocversion/README.html

