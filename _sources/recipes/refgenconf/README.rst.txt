:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refgenconf'
.. highlight: bash

refgenconf
==========

.. conda:recipe:: refgenconf
   :replaces_section_title:

   A standardized configuration object for reference genome assemblies

   :homepage: https://refgenie.databio.org
   :license: BSD / BSD-2-Clause
   :recipe: /`refgenconf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenconf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenconf/meta.yaml>`_

   


.. conda:package:: refgenconf

   |downloads_refgenconf| |docker_refgenconf|

   :versions: 0.7.0-0, 0.6.2-0, 0.6.1-0, 0.6.0-0, 0.5.4-0
   
   :depends attmap: >=0.12.5
   :depends future: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
   :depends tqdm: 
   :depends ubiquerg: >=0.5.0
   :depends yacman: >=0.6.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install refgenconf

   and update with::

      conda update refgenconf

   or use the docker container::

      docker pull quay.io/biocontainers/refgenconf:<tag>

   (see `refgenconf/tags`_ for valid values for ``<tag>``)


.. |downloads_refgenconf| image:: https://img.shields.io/conda/dn/bioconda/refgenconf.svg?style=flat
   :target: https://anaconda.org/bioconda/refgenconf
   :alt:   (downloads)
.. |docker_refgenconf| image:: https://quay.io/repository/biocontainers/refgenconf/status
   :target: https://quay.io/repository/biocontainers/refgenconf
.. _`refgenconf/tags`: https://quay.io/repository/biocontainers/refgenconf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refgenconf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refgenconf/README.html