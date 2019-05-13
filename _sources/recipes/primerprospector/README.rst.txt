:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primerprospector'
.. highlight: bash

primerprospector
================

.. conda:recipe:: primerprospector
   :replaces_section_title:

   Primer Prospector is a pipeline of programs to design and analyze PCR primers.

   :homepage: http://pprospector.sourceforge.net/
   :license: GPL
   :recipe: /`primerprospector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primerprospector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primerprospector/meta.yaml>`_

   


.. conda:package:: primerprospector

   |downloads_primerprospector| |docker_primerprospector|

   :versions: 1.0.1-1, 1.0.1-0
   
   :depends cogent: >=1.5
   :depends matplotlib: >=0.98.3
   :depends numpy: >=1.3.0
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install primerprospector

   and update with::

      conda update primerprospector

   or use the docker container::

      docker pull quay.io/biocontainers/primerprospector:<tag>

   (see `primerprospector/tags`_ for valid values for ``<tag>``)


.. |downloads_primerprospector| image:: https://img.shields.io/conda/dn/bioconda/primerprospector.svg?style=flat
   :target: https://anaconda.org/bioconda/primerprospector
   :alt:   (downloads)
.. |docker_primerprospector| image:: https://quay.io/repository/biocontainers/primerprospector/status
   :target: https://quay.io/repository/biocontainers/primerprospector
.. _`primerprospector/tags`: https://quay.io/repository/biocontainers/primerprospector?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primerprospector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primerprospector/README.html