.. title:: Package Recipe 'bioconductor-flowqbdata'
.. highlight: bash


bioconductor-flowqbdata
=======================

.. conda:recipe:: bioconductor-flowqbdata
   :replaces_section_title:

   The flowQBData package provides data files used as examples and for testing of the software provided in the flowQB package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/flowQBData.html
   :license: Artistic License 2.0
   :recipe: /`bioconductor-flowqbdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowqbdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowqbdata/meta.yaml>`_

   


.. conda:package:: bioconductor-flowqbdata

   |downloads_bioconductor-flowqbdata| |docker_bioconductor-flowqbdata|

   :versions: 1.8.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-flowqbdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowqbdata

   and update with::

      conda update bioconductor-flowqbdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowqbdata


.. |required_by_bioconductor-flowqbdata| conda:required_by:: bioconductor-flowqbdata
.. |downloads_bioconductor-flowqbdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowqbdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowqbdata| image:: https://quay.io/repository/biocontainers/bioconductor-flowqbdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowqbdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowqbdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowqbdata/README.html

