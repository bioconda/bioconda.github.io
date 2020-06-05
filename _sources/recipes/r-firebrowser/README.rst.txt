:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-firebrowser'
.. highlight: bash

r-firebrowser
=============

.. conda:recipe:: r-firebrowser
   :replaces_section_title:
   :noindex:

   An R client for broads firehose pipeline\, providing TCGA data sets.

   :homepage: https://github.com/mariodeng/FirebrowseR
   :license: MIT / MIT
   :recipe: /`r-firebrowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-firebrowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-firebrowser/meta.yaml>`_

   


.. conda:package:: r-firebrowser

   |downloads_r-firebrowser| |docker_r-firebrowser|

   :versions:
      
      

      ``1.1.35-1``,  ``1.1.35-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-firebrowser

   and update with::

      conda update r-firebrowser

   or use the docker container::

      docker pull quay.io/biocontainers/r-firebrowser:<tag>

   (see `r-firebrowser/tags`_ for valid values for ``<tag>``)


.. |downloads_r-firebrowser| image:: https://img.shields.io/conda/dn/bioconda/r-firebrowser.svg?style=flat
   :target: https://anaconda.org/bioconda/r-firebrowser
   :alt:   (downloads)
.. |docker_r-firebrowser| image:: https://quay.io/repository/biocontainers/r-firebrowser/status
   :target: https://quay.io/repository/biocontainers/r-firebrowser
.. _`r-firebrowser/tags`: https://quay.io/repository/biocontainers/r-firebrowser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-firebrowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-firebrowser/README.html