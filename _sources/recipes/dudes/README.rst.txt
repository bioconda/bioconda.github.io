:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dudes'
.. highlight: bash

dudes
=====

.. conda:recipe:: dudes
   :replaces_section_title:

   DUDes\: a top\-down taxonomic profiler for metagenomics

   :homepage: https://github.com/pirovc/dudes/
   :license: The MIT License (MIT)
   :recipe: /`dudes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dudes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dudes/meta.yaml>`_

   


.. conda:package:: dudes

   |downloads_dudes| |docker_dudes|

   :versions: 0.08-1, 0.08-0, 0.07-1, 0.07-0, 0.06-3, 0.06-2, 0.06-1, 0.06-0
   
   :depends numpy: 
   :depends pandas: 
   :depends python: >=3.5,<3.6.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dudes

   and update with::

      conda update dudes

   or use the docker container::

      docker pull quay.io/biocontainers/dudes:<tag>

   (see `dudes/tags`_ for valid values for ``<tag>``)


.. |downloads_dudes| image:: https://img.shields.io/conda/dn/bioconda/dudes.svg?style=flat
   :alt:   (downloads)
.. |docker_dudes| image:: https://quay.io/repository/biocontainers/dudes/status
   :target: https://quay.io/repository/biocontainers/dudes
.. _`dudes/tags`: https://quay.io/repository/biocontainers/dudes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dudes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dudes/README.html