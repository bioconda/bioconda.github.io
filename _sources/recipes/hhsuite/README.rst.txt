:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hhsuite'
.. highlight: bash

hhsuite
=======

.. conda:recipe:: hhsuite
   :replaces_section_title:
   :noindex:

   HH\-suite3 for fast remote homology detection and deep protein annotation

   :homepage: https://github.com/soedinglab/hh-suite
   :license: GPLv3
   :recipe: /`hhsuite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hhsuite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hhsuite/meta.yaml>`_

   


.. conda:package:: hhsuite

   |downloads_hhsuite| |docker_hhsuite|

   :versions:
      
      

      ``3.3.0-0``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.2.0-0``,  ``v3.2.0-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openmp: 
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hhsuite

   and update with::

      conda update hhsuite

   or use the docker container::

      docker pull quay.io/biocontainers/hhsuite:<tag>

   (see `hhsuite/tags`_ for valid values for ``<tag>``)


.. |downloads_hhsuite| image:: https://img.shields.io/conda/dn/bioconda/hhsuite.svg?style=flat
   :target: https://anaconda.org/bioconda/hhsuite
   :alt:   (downloads)
.. |docker_hhsuite| image:: https://quay.io/repository/biocontainers/hhsuite/status
   :target: https://quay.io/repository/biocontainers/hhsuite
.. _`hhsuite/tags`: https://quay.io/repository/biocontainers/hhsuite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hhsuite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hhsuite/README.html