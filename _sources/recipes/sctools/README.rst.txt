:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sctools'
.. highlight: bash

sctools
=======

.. conda:recipe:: sctools
   :replaces_section_title:
   :noindex:

   SCTools is a suite of tools performing utility operations over single\-cell samples

   :homepage: https://github.com/bioinformatics-polito/SCTools
   :license: AGPL-3.0
   :recipe: /`sctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sctools/meta.yaml>`_

   


.. conda:package:: sctools

   |downloads_sctools| |docker_sctools|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sctools

   and update with::

      conda update sctools

   or use the docker container::

      docker pull quay.io/biocontainers/sctools:<tag>

   (see `sctools/tags`_ for valid values for ``<tag>``)


.. |downloads_sctools| image:: https://img.shields.io/conda/dn/bioconda/sctools.svg?style=flat
   :target: https://anaconda.org/bioconda/sctools
   :alt:   (downloads)
.. |docker_sctools| image:: https://quay.io/repository/biocontainers/sctools/status
   :target: https://quay.io/repository/biocontainers/sctools
.. _`sctools/tags`: https://quay.io/repository/biocontainers/sctools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sctools/README.html