:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-nanostringnorm'
.. highlight: bash

r-nanostringnorm
================

.. conda:recipe:: r-nanostringnorm
   :replaces_section_title:
   :noindex:

   A set of tools for normalizing\, diagnostics and visualization of NanoString nCounter data.

   :homepage: https://CRAN.R-project.org/package=NanoStringNorm
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-nanostringnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nanostringnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nanostringnorm/meta.yaml>`_

   


.. conda:package:: r-nanostringnorm

   |downloads_r-nanostringnorm| |docker_r-nanostringnorm|

   :versions:
      
      

      ``1.2.1.1-0``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.21-2``,  ``1.1.21-1``,  ``1.1.21-0``

      

   
   :depends bioconductor-vsn: ``>=3.22.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gdata: ``>=2.8.2``
   :depends r-xml: ``>=3.98_1.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-nanostringnorm

   and update with::

      conda update r-nanostringnorm

   or use the docker container::

      docker pull quay.io/biocontainers/r-nanostringnorm:<tag>

   (see `r-nanostringnorm/tags`_ for valid values for ``<tag>``)


.. |downloads_r-nanostringnorm| image:: https://img.shields.io/conda/dn/bioconda/r-nanostringnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/r-nanostringnorm
   :alt:   (downloads)
.. |docker_r-nanostringnorm| image:: https://quay.io/repository/biocontainers/r-nanostringnorm/status
   :target: https://quay.io/repository/biocontainers/r-nanostringnorm
.. _`r-nanostringnorm/tags`: https://quay.io/repository/biocontainers/r-nanostringnorm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nanostringnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nanostringnorm/README.html