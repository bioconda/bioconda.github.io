:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanosim-h'
.. highlight: bash

nanosim-h
=========

.. conda:recipe:: nanosim-h
   :replaces_section_title:

   NanoSim\-H is a simulator of Oxford Nanopore reads that captures the technology\-specific features of ONT data\, and allows for adjustments upon improvement of Nanopore sequencing technology.

   :homepage: https://github.com/karel-brinda/NanoSim-H
   :license: GPLv3
   :recipe: /`nanosim-h <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosim-h>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosim-h/meta.yaml>`_

   


.. conda:package:: nanosim-h

   |downloads_nanosim-h| |docker_nanosim-h|

   :versions: 1.1.0.4-1, 1.1.0.4-0, 1.1.0.3-3, 1.1.0.3-0, 1.1.0.2-1
   
   :depends last: 
   :depends numpy: 
   :depends progressbar2: 
   :depends python: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanosim-h

   and update with::

      conda update nanosim-h

   or use the docker container::

      docker pull quay.io/biocontainers/nanosim-h:<tag>

   (see `nanosim-h/tags`_ for valid values for ``<tag>``)


.. |downloads_nanosim-h| image:: https://img.shields.io/conda/dn/bioconda/nanosim-h.svg?style=flat
   :target: https://anaconda.org/bioconda/nanosim-h
   :alt:   (downloads)
.. |docker_nanosim-h| image:: https://quay.io/repository/biocontainers/nanosim-h/status
   :target: https://quay.io/repository/biocontainers/nanosim-h
.. _`nanosim-h/tags`: https://quay.io/repository/biocontainers/nanosim-h?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanosim-h/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanosim-h/README.html