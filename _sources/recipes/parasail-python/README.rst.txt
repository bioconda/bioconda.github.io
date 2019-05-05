:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parasail-python'
.. highlight: bash

parasail-python
===============

.. conda:recipe:: parasail-python
   :replaces_section_title:

   pairwise sequence alignment library

   :homepage: https://github.com/jeffdaily/parasail-python
   :license: BSD / BSD
   :recipe: /`parasail-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parasail-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parasail-python/meta.yaml>`_

   


.. conda:package:: parasail-python

   |downloads_parasail-python| |docker_parasail-python|

   :versions: 1.1.17-0, 1.1.16-0, 1.1.12-2, 1.1.12-1
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends numpy: 
   :depends python: >=2.7,<2.8.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install parasail-python

   and update with::

      conda update parasail-python

   or use the docker container::

      docker pull quay.io/biocontainers/parasail-python:<tag>

   (see `parasail-python/tags`_ for valid values for ``<tag>``)


.. |downloads_parasail-python| image:: https://img.shields.io/conda/dn/bioconda/parasail-python.svg?style=flat
   :alt:   (downloads)
.. |docker_parasail-python| image:: https://quay.io/repository/biocontainers/parasail-python/status
   :target: https://quay.io/repository/biocontainers/parasail-python
.. _`parasail-python/tags`: https://quay.io/repository/biocontainers/parasail-python?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parasail-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parasail-python/README.html