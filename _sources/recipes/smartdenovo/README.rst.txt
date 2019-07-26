:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smartdenovo'
.. highlight: bash

smartdenovo
===========

.. conda:recipe:: smartdenovo
   :replaces_section_title:

   Ultra\-fast de novo assembler using long noisy reads

   :homepage: https://github.com/ruanjue/smartdenovo
   :license: GPLv3
   :recipe: /`smartdenovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smartdenovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smartdenovo/meta.yaml>`_

   


.. conda:package:: smartdenovo

   |downloads_smartdenovo| |docker_smartdenovo|

   :versions: 1.0.0-2, 1.0.0-1, 1.0.0-0
   
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smartdenovo

   and update with::

      conda update smartdenovo

   or use the docker container::

      docker pull quay.io/biocontainers/smartdenovo:<tag>

   (see `smartdenovo/tags`_ for valid values for ``<tag>``)


.. |downloads_smartdenovo| image:: https://img.shields.io/conda/dn/bioconda/smartdenovo.svg?style=flat
   :target: https://anaconda.org/bioconda/smartdenovo
   :alt:   (downloads)
.. |docker_smartdenovo| image:: https://quay.io/repository/biocontainers/smartdenovo/status
   :target: https://quay.io/repository/biocontainers/smartdenovo
.. _`smartdenovo/tags`: https://quay.io/repository/biocontainers/smartdenovo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smartdenovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smartdenovo/README.html