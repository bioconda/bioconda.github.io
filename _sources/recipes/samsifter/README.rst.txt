:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samsifter'
.. highlight: bash

samsifter
=========

.. conda:recipe:: samsifter
   :replaces_section_title:
   :noindex:

   Workflow editor for metagenomic analysis

   :homepage: http://pypi.python.org/pypi/SamSifter/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`samsifter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsifter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsifter/meta.yaml>`_

   


.. conda:package:: samsifter

   |downloads_samsifter| |docker_samsifter|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends matplotlib: ``>=1.3.1``
   :depends numpy: ``>=1.6.1``
   :depends pandas: ``>=0.14.1``
   :depends pyqt: ``>=4.11.4,<4.12.0a0``
   :depends python: ``>=3.5,<3.6.0a0``
   :depends python-dateutil: 
   :depends pytz: 
   :depends xorg-libsm: 
   :depends xorg-libxrender: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samsifter

   and update with::

      conda update samsifter

   or use the docker container::

      docker pull quay.io/biocontainers/samsifter:<tag>

   (see `samsifter/tags`_ for valid values for ``<tag>``)


.. |downloads_samsifter| image:: https://img.shields.io/conda/dn/bioconda/samsifter.svg?style=flat
   :target: https://anaconda.org/bioconda/samsifter
   :alt:   (downloads)
.. |docker_samsifter| image:: https://quay.io/repository/biocontainers/samsifter/status
   :target: https://quay.io/repository/biocontainers/samsifter
.. _`samsifter/tags`: https://quay.io/repository/biocontainers/samsifter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samsifter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samsifter/README.html