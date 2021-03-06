:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chia-rep'
.. highlight: bash

chia-rep
========

.. conda:recipe:: chia-rep
   :replaces_section_title:
   :noindex:

   A package for measuring reproducibility of ChIA\-PET data.

   :homepage: https://github.com/c0ver/chia_rep
   :license: MIT / MIT
   :recipe: /`chia-rep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chia-rep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chia-rep/meta.yaml>`_

   


.. conda:package:: chia-rep

   |downloads_chia-rep| |docker_chia-rep|

   :versions:
      
      

      ``3.1.1-0``,  ``3.1.0-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends numpy: ``>=1.17.0``
   :depends prettytable: ``>=0.7.2``
   :depends pybedgraph: ``>=0.5.40``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends scipy: ``>=1.3.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chia-rep

   and update with::

      conda update chia-rep

   or use the docker container::

      docker pull quay.io/biocontainers/chia-rep:<tag>

   (see `chia-rep/tags`_ for valid values for ``<tag>``)


.. |downloads_chia-rep| image:: https://img.shields.io/conda/dn/bioconda/chia-rep.svg?style=flat
   :target: https://anaconda.org/bioconda/chia-rep
   :alt:   (downloads)
.. |docker_chia-rep| image:: https://quay.io/repository/biocontainers/chia-rep/status
   :target: https://quay.io/repository/biocontainers/chia-rep
.. _`chia-rep/tags`: https://quay.io/repository/biocontainers/chia-rep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chia-rep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chia-rep/README.html