.. title:: Package Recipe 'bioconductor-sugarcanecdf'
.. highlight: bash


bioconductor-sugarcanecdf
=========================

.. conda:recipe:: bioconductor-sugarcanecdf
   :replaces_section_title:

   A package containing an environment representing the Sugar\_Cane.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/sugarcanecdf.html
   :license: LGPL
   :recipe: /`bioconductor-sugarcanecdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sugarcanecdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sugarcanecdf/meta.yaml>`_

   


.. conda:package:: bioconductor-sugarcanecdf

   |downloads_bioconductor-sugarcanecdf| |docker_bioconductor-sugarcanecdf|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-sugarcanecdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sugarcanecdf

   and update with::

      conda update bioconductor-sugarcanecdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sugarcanecdf


.. |required_by_bioconductor-sugarcanecdf| conda:required_by:: bioconductor-sugarcanecdf
.. |downloads_bioconductor-sugarcanecdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sugarcanecdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sugarcanecdf| image:: https://quay.io/repository/biocontainers/bioconductor-sugarcanecdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sugarcanecdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sugarcanecdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sugarcanecdf/README.html

