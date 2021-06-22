:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tssv'
.. highlight: bash

tssv
====

.. conda:recipe:: tssv
   :replaces_section_title:
   :noindex:

   Targeted characterisation of short structural variation.

   :homepage: The package home page
   :documentation: https://tssv.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/jfjlaros/tssv
   :license: MIT / MIT
   :recipe: /`tssv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tssv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tssv/meta.yaml>`_

   


.. conda:package:: tssv

   |downloads_tssv| |docker_tssv|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends biopython: ``>=1.72``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends requests: 
   :depends setuptools: 
   :depends xopen: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tssv

   and update with::

      conda update tssv

   or use the docker container::

      docker pull quay.io/biocontainers/tssv:<tag>

   (see `tssv/tags`_ for valid values for ``<tag>``)


.. |downloads_tssv| image:: https://img.shields.io/conda/dn/bioconda/tssv.svg?style=flat
   :target: https://anaconda.org/bioconda/tssv
   :alt:   (downloads)
.. |docker_tssv| image:: https://quay.io/repository/biocontainers/tssv/status
   :target: https://quay.io/repository/biocontainers/tssv
.. _`tssv/tags`: https://quay.io/repository/biocontainers/tssv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tssv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tssv/README.html