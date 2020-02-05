:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgwas'
.. highlight: bash

fgwas
=====

.. conda:recipe:: fgwas
   :replaces_section_title:

   fgwas is a command line tool for integrating functional genomic information into a genome\-wide association study \(GWAS\).

   :homepage: https://github.com/joepickrell/fgwas
   :license: GPL2
   :recipe: /`fgwas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgwas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgwas/meta.yaml>`_

   


.. conda:package:: fgwas

   |downloads_fgwas| |docker_fgwas|

   :versions: 0.3.6-0
   
   :depends gsl: >=2.5,<2.6.0a0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fgwas

   and update with::

      conda update fgwas

   or use the docker container::

      docker pull quay.io/biocontainers/fgwas:<tag>

   (see `fgwas/tags`_ for valid values for ``<tag>``)


.. |downloads_fgwas| image:: https://img.shields.io/conda/dn/bioconda/fgwas.svg?style=flat
   :target: https://anaconda.org/bioconda/fgwas
   :alt:   (downloads)
.. |docker_fgwas| image:: https://quay.io/repository/biocontainers/fgwas/status
   :target: https://quay.io/repository/biocontainers/fgwas
.. _`fgwas/tags`: https://quay.io/repository/biocontainers/fgwas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgwas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgwas/README.html