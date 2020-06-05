:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-consensuscore'
.. highlight: bash

python-consensuscore
====================

.. conda:recipe:: python-consensuscore
   :replaces_section_title:
   :noindex:

   PacBio Quiver Consensus library for RSII data

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`python-consensuscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-consensuscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-consensuscore/meta.yaml>`_

   


.. conda:package:: python-consensuscore

   |downloads_python-consensuscore| |docker_python-consensuscore|

   :versions:
      
      

      ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends numpy: ``>=1.16.2``
   :depends python: ``>=2.7,<2.8.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-consensuscore

   and update with::

      conda update python-consensuscore

   or use the docker container::

      docker pull quay.io/biocontainers/python-consensuscore:<tag>

   (see `python-consensuscore/tags`_ for valid values for ``<tag>``)


.. |downloads_python-consensuscore| image:: https://img.shields.io/conda/dn/bioconda/python-consensuscore.svg?style=flat
   :target: https://anaconda.org/bioconda/python-consensuscore
   :alt:   (downloads)
.. |docker_python-consensuscore| image:: https://quay.io/repository/biocontainers/python-consensuscore/status
   :target: https://quay.io/repository/biocontainers/python-consensuscore
.. _`python-consensuscore/tags`: https://quay.io/repository/biocontainers/python-consensuscore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-consensuscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-consensuscore/README.html