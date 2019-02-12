:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'faststructure'
.. highlight: bash

faststructure
=============

.. conda:recipe:: faststructure
   :replaces_section_title:

   A variational framework for inferring population structure from SNP genotype data.

   :homepage: https://github.com/rajanil/fastStructure
   :license: MIT / MIT
   :recipe: /`faststructure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/faststructure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/faststructure/meta.yaml>`_

   


.. conda:package:: faststructure

   |downloads_faststructure| |docker_faststructure|

   :versions: 1.0-0
   
   :depends cython: <0.28
   
   :depends gsl: >=2.2.1,<2.3.0a0
   
   :depends libgcc-ng: >=4.9
   
   :depends matplotlib: 
   
   :depends numpy: 
   
   :depends openblas: >=0.2.20,<0.2.21.0a0
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install faststructure

   and update with::

      conda update faststructure

   or use the docker container::

      docker pull quay.io/repository/biocontainers/faststructure:<tag>

   (see `faststructure/tags`_ for valid values for ``<tag>``)


.. |downloads_faststructure| image:: https://img.shields.io/conda/dn/bioconda/faststructure.svg?style=flat
   :alt:   (downloads)
.. |docker_faststructure| image:: https://quay.io/repository/biocontainers/faststructure/status
   :target: https://quay.io/repository/biocontainers/faststructure
.. _`faststructure/tags`: https://quay.io/repository/biocontainers/faststructure?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/faststructure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/faststructure/README.html