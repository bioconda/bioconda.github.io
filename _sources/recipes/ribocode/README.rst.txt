:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribocode'
.. highlight: bash

ribocode
========

.. conda:recipe:: ribocode
   :replaces_section_title:

   A package for identifying the translated ORFs using ribosome\-profiling data

   :homepage: https://github.com/xryanglab/RiboCode
   :license: MIT / MIT
   :recipe: /`ribocode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribocode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribocode/meta.yaml>`_

   


.. conda:package:: ribocode

   |downloads_ribocode| |docker_ribocode|

   :versions: 1.2.11-0, 1.2.10-2, 1.2.10-1, 1.2.10-0, 1.2.9-0, 1.2.8-0, 1.2.7-0, 1.2.6-0
   
   :depends biopython: 
   :depends future: 
   :depends h5py: 
   :depends htseq: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pyfasta: 
   :depends pysam: >0.8.4
   :depends python: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribocode

   and update with::

      conda update ribocode

   or use the docker container::

      docker pull quay.io/biocontainers/ribocode:<tag>

   (see `ribocode/tags`_ for valid values for ``<tag>``)


.. |downloads_ribocode| image:: https://img.shields.io/conda/dn/bioconda/ribocode.svg?style=flat
   :alt:   (downloads)
.. |docker_ribocode| image:: https://quay.io/repository/biocontainers/ribocode/status
   :target: https://quay.io/repository/biocontainers/ribocode
.. _`ribocode/tags`: https://quay.io/repository/biocontainers/ribocode?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribocode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribocode/README.html