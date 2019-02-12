:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'protk'
.. highlight: bash

protk
=====

.. conda:recipe:: protk
   :replaces_section_title:

   protk \(Proteomics toolkit\)

   :homepage: https://github.com/iracooke/protk
   :license: MIT
   :recipe: /`protk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protk/meta.yaml>`_

   


.. conda:package:: protk

   |downloads_protk| |docker_protk|

   :versions: 1.4.4a-1, 1.4.4a-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libxml2: >=2.9.8,<2.10.0a0
   
   :depends ruby: >=2.4
   
   :depends tpp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install protk

   and update with::

      conda update protk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/protk:<tag>

   (see `protk/tags`_ for valid values for ``<tag>``)


.. |downloads_protk| image:: https://img.shields.io/conda/dn/bioconda/protk.svg?style=flat
   :alt:   (downloads)
.. |docker_protk| image:: https://quay.io/repository/biocontainers/protk/status
   :target: https://quay.io/repository/biocontainers/protk
.. _`protk/tags`: https://quay.io/repository/biocontainers/protk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/protk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/protk/README.html