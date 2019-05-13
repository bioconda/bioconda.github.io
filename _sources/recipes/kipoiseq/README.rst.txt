:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kipoiseq'
.. highlight: bash

kipoiseq
========

.. conda:recipe:: kipoiseq
   :replaces_section_title:

   kipoiseq\: sequence\-based data\-laoders for Kipoi

   :homepage: https://github.com/kipoi/kipoiseq
   :documentation: https://kipoi.org/kipoiseq/
   
   :license: MIT / MIT license
   :recipe: /`kipoiseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoiseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoiseq/meta.yaml>`_

   kipoiseq\: sequence\-based data\-laoders for Kipoi


.. conda:package:: kipoiseq

   |downloads_kipoiseq| |docker_kipoiseq|

   :versions: 0.2.2-0
   
   :depends genomelake: 
   :depends gffutils: 
   :depends kipoi: >=0.5.5
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pyfaidx: 
   :depends python: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kipoiseq

   and update with::

      conda update kipoiseq

   or use the docker container::

      docker pull quay.io/biocontainers/kipoiseq:<tag>

   (see `kipoiseq/tags`_ for valid values for ``<tag>``)


.. |downloads_kipoiseq| image:: https://img.shields.io/conda/dn/bioconda/kipoiseq.svg?style=flat
   :target: https://anaconda.org/bioconda/kipoiseq
   :alt:   (downloads)
.. |docker_kipoiseq| image:: https://quay.io/repository/biocontainers/kipoiseq/status
   :target: https://quay.io/repository/biocontainers/kipoiseq
.. _`kipoiseq/tags`: https://quay.io/repository/biocontainers/kipoiseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoiseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoiseq/README.html