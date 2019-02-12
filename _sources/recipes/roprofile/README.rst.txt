:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'roprofile'
.. highlight: bash

roprofile
=========

.. conda:recipe:: roprofile
   :replaces_section_title:

   Generation of pan\-genome profile files using Roary output.

   :homepage: https://github.com/cimendes/roProfile
   :license: GPLv3
   :recipe: /`roprofile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roprofile>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roprofile/meta.yaml>`_

   


.. conda:package:: roprofile

   |downloads_roprofile| |docker_roprofile|

   :versions: 1.4.5-0
   
   :depends biopython: >=1.66
   
   :depends matplotlib: >=1.5.2
   
   :depends mpld3: >=0.2
   
   :depends pandas: >=0.15.0
   
   :depends python: 2.7*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install roprofile

   and update with::

      conda update roprofile

   or use the docker container::

      docker pull quay.io/repository/biocontainers/roprofile:<tag>

   (see `roprofile/tags`_ for valid values for ``<tag>``)


.. |downloads_roprofile| image:: https://img.shields.io/conda/dn/bioconda/roprofile.svg?style=flat
   :alt:   (downloads)
.. |docker_roprofile| image:: https://quay.io/repository/biocontainers/roprofile/status
   :target: https://quay.io/repository/biocontainers/roprofile
.. _`roprofile/tags`: https://quay.io/repository/biocontainers/roprofile?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/roprofile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/roprofile/README.html