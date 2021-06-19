:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'salsa2'
.. highlight: bash

salsa2
======

.. conda:recipe:: salsa2
   :replaces_section_title:
   :noindex:

   Salsa is a tool to scaffold long read assemblies with Hi\-C.

   :homepage: https://github.com/marbl/SALSA
   :license: MIT
   :recipe: /`salsa2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salsa2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salsa2/meta.yaml>`_

   


.. conda:package:: salsa2

   |downloads_salsa2| |docker_salsa2|

   :versions:
      
      

      ``2.3-0``,  ``2.2-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends networkx: ``1.11.*``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install salsa2

   and update with::

      conda update salsa2

   or use the docker container::

      docker pull quay.io/biocontainers/salsa2:<tag>

   (see `salsa2/tags`_ for valid values for ``<tag>``)


.. |downloads_salsa2| image:: https://img.shields.io/conda/dn/bioconda/salsa2.svg?style=flat
   :target: https://anaconda.org/bioconda/salsa2
   :alt:   (downloads)
.. |docker_salsa2| image:: https://quay.io/repository/biocontainers/salsa2/status
   :target: https://quay.io/repository/biocontainers/salsa2
.. _`salsa2/tags`: https://quay.io/repository/biocontainers/salsa2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/salsa2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/salsa2/README.html