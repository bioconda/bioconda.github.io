.. title:: Package Recipe 'bioconductor-cottoncdf'
.. highlight: bash


bioconductor-cottoncdf
======================

.. conda:recipe:: bioconductor-cottoncdf
   :replaces_section_title:

   A package containing an environment representing the Cotton.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/cottoncdf.html
   :license: LGPL
   :recipe: /`bioconductor-cottoncdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cottoncdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cottoncdf/meta.yaml>`_

   


.. conda:package:: bioconductor-cottoncdf

   |downloads_bioconductor-cottoncdf| |docker_bioconductor-cottoncdf|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-cottoncdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cottoncdf

   and update with::

      conda update bioconductor-cottoncdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cottoncdf


.. |required_by_bioconductor-cottoncdf| conda:required_by:: bioconductor-cottoncdf
.. |downloads_bioconductor-cottoncdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cottoncdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cottoncdf| image:: https://quay.io/repository/biocontainers/bioconductor-cottoncdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cottoncdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cottoncdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cottoncdf/README.html

