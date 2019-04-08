:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qfilt'
.. highlight: bash

qfilt
=====

.. conda:recipe:: qfilt
   :replaces_section_title:

   Filter sequencing data using some simple heuristics

   :homepage: https://github.com/veg/qfilt
   :license: MIT
   :recipe: /`qfilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qfilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qfilt/meta.yaml>`_

   


.. conda:package:: qfilt

   |downloads_qfilt| |docker_qfilt|

   :versions: 0.0.1-1, 0.0.1-0
   
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qfilt

   and update with::

      conda update qfilt

   or use the docker container::

      docker pull quay.io/biocontainers/qfilt:<tag>

   (see `qfilt/tags`_ for valid values for ``<tag>``)


.. |downloads_qfilt| image:: https://img.shields.io/conda/dn/bioconda/qfilt.svg?style=flat
   :alt:   (downloads)
.. |docker_qfilt| image:: https://quay.io/repository/biocontainers/qfilt/status
   :target: https://quay.io/repository/biocontainers/qfilt
.. _`qfilt/tags`: https://quay.io/repository/biocontainers/qfilt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qfilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qfilt/README.html