:orphan:  .. only available via index, not via toctree

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

   :versions: 1.8.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowqbdata

   and update with::

      conda update bioconductor-flowqbdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowqbdata:<tag>

   (see `bioconductor-flowqbdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowqbdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowqbdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowqbdata| image:: https://quay.io/repository/biocontainers/bioconductor-flowqbdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowqbdata
.. _`bioconductor-flowqbdata/tags`: https://quay.io/repository/biocontainers/bioconductor-flowqbdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowqbdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowqbdata/README.html