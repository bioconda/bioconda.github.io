:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'machina'
.. highlight: bash

machina
=======

.. conda:recipe:: machina
   :replaces_section_title:
   :noindex:

   Metastatic And Clonal History INtegrative Analysis

   :homepage: https://github.com/raphael-group/machina
   :license: BSD-3
   :recipe: /`machina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/machina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/machina/meta.yaml>`_

   MACHINA is a computational framework for inferring migration patterns
   between a primary tumor and metastases using DNA sequencing data. 


.. conda:package:: machina

   |downloads_machina| |docker_machina|

   :versions:
      
      

      ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends glpk: ``>=4.65,<4.66.0a0``
   :depends lemon: ``>=1.3.1,<1.3.2.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install machina

   and update with::

      conda update machina

   or use the docker container::

      docker pull quay.io/biocontainers/machina:<tag>

   (see `machina/tags`_ for valid values for ``<tag>``)


.. |downloads_machina| image:: https://img.shields.io/conda/dn/bioconda/machina.svg?style=flat
   :target: https://anaconda.org/bioconda/machina
   :alt:   (downloads)
.. |docker_machina| image:: https://quay.io/repository/biocontainers/machina/status
   :target: https://quay.io/repository/biocontainers/machina
.. _`machina/tags`: https://quay.io/repository/biocontainers/machina?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/machina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/machina/README.html