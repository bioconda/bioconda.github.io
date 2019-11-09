:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qgrs-cpp'
.. highlight: bash

qgrs-cpp
========

.. conda:recipe:: qgrs-cpp
   :replaces_section_title:

   C\+\+ implementation of QGRS mapping.

   :homepage: https://github.com/freezer333/qgrs-cpp
   :license: MIT / MIT
   :recipe: /`qgrs-cpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qgrs-cpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qgrs-cpp/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gks422`, doi: :doi:`10.1186/1479-7364-8-8`

   


.. conda:package:: qgrs-cpp

   |downloads_qgrs-cpp| |docker_qgrs-cpp|

   :versions: 0.0.2017.08.25-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qgrs-cpp

   and update with::

      conda update qgrs-cpp

   or use the docker container::

      docker pull quay.io/biocontainers/qgrs-cpp:<tag>

   (see `qgrs-cpp/tags`_ for valid values for ``<tag>``)


.. |downloads_qgrs-cpp| image:: https://img.shields.io/conda/dn/bioconda/qgrs-cpp.svg?style=flat
   :target: https://anaconda.org/bioconda/qgrs-cpp
   :alt:   (downloads)
.. |docker_qgrs-cpp| image:: https://quay.io/repository/biocontainers/qgrs-cpp/status
   :target: https://quay.io/repository/biocontainers/qgrs-cpp
.. _`qgrs-cpp/tags`: https://quay.io/repository/biocontainers/qgrs-cpp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qgrs-cpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qgrs-cpp/README.html