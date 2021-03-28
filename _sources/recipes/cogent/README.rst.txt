:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cogent'
.. highlight: bash

cogent
======

.. conda:recipe:: cogent
   :replaces_section_title:
   :noindex:

   COmparative GENomics Toolkit

   :homepage: http://www.pycogent.org
   :license: GNU General Public License (GPL)
   :recipe: /`cogent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogent/meta.yaml>`_

   


.. conda:package:: cogent

   |downloads_cogent| |docker_cogent|

   :versions:
      
      

      ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.9-0``,  ``1.5.3-2``,  ``1.5.3-1``,  ``1.5.3-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends matplotlib: ``>=1.1.0``
   :depends mpi4py: ``>=1.0``
   :depends mysql-python: ``>=1.2.2``
   :depends numpy: ``>=1.3``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends sqlalchemy: ``>=0.5``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cogent

   and update with::

      conda update cogent

   or use the docker container::

      docker pull quay.io/biocontainers/cogent:<tag>

   (see `cogent/tags`_ for valid values for ``<tag>``)


.. |downloads_cogent| image:: https://img.shields.io/conda/dn/bioconda/cogent.svg?style=flat
   :target: https://anaconda.org/bioconda/cogent
   :alt:   (downloads)
.. |docker_cogent| image:: https://quay.io/repository/biocontainers/cogent/status
   :target: https://quay.io/repository/biocontainers/cogent
.. _`cogent/tags`: https://quay.io/repository/biocontainers/cogent?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cogent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cogent/README.html