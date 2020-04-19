:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'regtools'
.. highlight: bash

regtools
========

.. conda:recipe:: regtools
   :replaces_section_title:

   Tools that integrate DNA\-seq and RNA\-seq data to help interpret mutations in a regulatory and splicing context.

   :homepage: https://github.com/griffithlab/regtools/
   :license: MIT / MIT
   :recipe: /`regtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regtools/meta.yaml>`_

   


.. conda:package:: regtools

   |downloads_regtools| |docker_regtools|

   :versions: 0.6.0-0, 0.5.2-0, 0.5.1-0, 0.5.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install regtools

   and update with::

      conda update regtools

   or use the docker container::

      docker pull quay.io/biocontainers/regtools:<tag>

   (see `regtools/tags`_ for valid values for ``<tag>``)


.. |downloads_regtools| image:: https://img.shields.io/conda/dn/bioconda/regtools.svg?style=flat
   :target: https://anaconda.org/bioconda/regtools
   :alt:   (downloads)
.. |docker_regtools| image:: https://quay.io/repository/biocontainers/regtools/status
   :target: https://quay.io/repository/biocontainers/regtools
.. _`regtools/tags`: https://quay.io/repository/biocontainers/regtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/regtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/regtools/README.html