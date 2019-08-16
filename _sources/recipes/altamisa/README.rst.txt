:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'altamisa'
.. highlight: bash

altamisa
========

.. conda:recipe:: altamisa
   :replaces_section_title:

   Alternative Python API for accessing ISA\-tab files.

   :homepage: https://github.com/bihealth/altamisa
   :license: MIT / MIT
   :recipe: /`altamisa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/altamisa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/altamisa/meta.yaml>`_

   


.. conda:package:: altamisa

   |downloads_altamisa| |docker_altamisa|

   :versions: 0.2.2-0, 0.2.1-0, 0.2.0-0
   
   :depends attrs: 
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install altamisa

   and update with::

      conda update altamisa

   or use the docker container::

      docker pull quay.io/biocontainers/altamisa:<tag>

   (see `altamisa/tags`_ for valid values for ``<tag>``)


.. |downloads_altamisa| image:: https://img.shields.io/conda/dn/bioconda/altamisa.svg?style=flat
   :target: https://anaconda.org/bioconda/altamisa
   :alt:   (downloads)
.. |docker_altamisa| image:: https://quay.io/repository/biocontainers/altamisa/status
   :target: https://quay.io/repository/biocontainers/altamisa
.. _`altamisa/tags`: https://quay.io/repository/biocontainers/altamisa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/altamisa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/altamisa/README.html