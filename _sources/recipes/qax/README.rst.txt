:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qax'
.. highlight: bash

qax
===

.. conda:recipe:: qax
   :replaces_section_title:
   :noindex:

   Extract data\, metadata\, bibliography and provenance from Qiime2 artifacts

   :homepage: https://github.com/telatin/qax
   :license: GPL3
   :recipe: /`qax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qax/meta.yaml>`_

   


.. conda:package:: qax

   |downloads_qax| |docker_qax|

   :versions:
      
      

      ``0.6.0-0``,  ``0.4.0-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libzip: ``>=1.7.3,<2.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qax

   and update with::

      conda update qax

   or use the docker container::

      docker pull quay.io/biocontainers/qax:<tag>

   (see `qax/tags`_ for valid values for ``<tag>``)


.. |downloads_qax| image:: https://img.shields.io/conda/dn/bioconda/qax.svg?style=flat
   :target: https://anaconda.org/bioconda/qax
   :alt:   (downloads)
.. |docker_qax| image:: https://quay.io/repository/biocontainers/qax/status
   :target: https://quay.io/repository/biocontainers/qax
.. _`qax/tags`: https://quay.io/repository/biocontainers/qax?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qax/README.html