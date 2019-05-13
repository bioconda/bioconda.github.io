:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-envisionquery'
.. highlight: bash

bioconductor-envisionquery
==========================

.. conda:recipe:: bioconductor-envisionquery
   :replaces_section_title:

   Tools to retrieve data from ENVISION\, the Database for Annotation\, Visualization and Integrated Discovery portal

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ENVISIONQuery.html
   :license: GPL-2
   :recipe: /`bioconductor-envisionquery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-envisionquery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-envisionquery/meta.yaml>`_

   


.. conda:package:: bioconductor-envisionquery

   |downloads_bioconductor-envisionquery| |docker_bioconductor-envisionquery|

   :versions: 1.32.0-0, 1.30.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-rjava: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-envisionquery

   and update with::

      conda update bioconductor-envisionquery

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-envisionquery:<tag>

   (see `bioconductor-envisionquery/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-envisionquery| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-envisionquery.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-envisionquery
   :alt:   (downloads)
.. |docker_bioconductor-envisionquery| image:: https://quay.io/repository/biocontainers/bioconductor-envisionquery/status
   :target: https://quay.io/repository/biocontainers/bioconductor-envisionquery
.. _`bioconductor-envisionquery/tags`: https://quay.io/repository/biocontainers/bioconductor-envisionquery?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-envisionquery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-envisionquery/README.html