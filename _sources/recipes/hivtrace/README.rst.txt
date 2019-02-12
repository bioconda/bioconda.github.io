:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hivtrace'
.. highlight: bash

hivtrace
========

.. conda:recipe:: hivtrace
   :replaces_section_title:

   HIV TRACE is an application that identifies potential transmission clusters within a supplied FASTA file with an option to find potential links against the Los Alamos HIV Sequence Database.

   :homepage: https://github.com/veg/hivtrace
   :license: MIT
   :recipe: /`hivtrace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hivtrace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hivtrace/meta.yaml>`_

   


.. conda:package:: hivtrace

   |downloads_hivtrace| |docker_hivtrace|

   :versions: 0.1.6-0
   
   :depends biopython: >=1.58
   
   :depends python: 3.4*
   
   :depends python-bioext: >=0.17.4
   
   :depends python-hivclustering: >=1.2.0
   
   :depends python-hppy: >=0.9.6
   
   :depends python-hyphy-python: >=0.1.1
   
   :depends tornado: >=4.3
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hivtrace

   and update with::

      conda update hivtrace

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hivtrace:<tag>

   (see `hivtrace/tags`_ for valid values for ``<tag>``)


.. |downloads_hivtrace| image:: https://img.shields.io/conda/dn/bioconda/hivtrace.svg?style=flat
   :alt:   (downloads)
.. |docker_hivtrace| image:: https://quay.io/repository/biocontainers/hivtrace/status
   :target: https://quay.io/repository/biocontainers/hivtrace
.. _`hivtrace/tags`: https://quay.io/repository/biocontainers/hivtrace?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hivtrace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hivtrace/README.html