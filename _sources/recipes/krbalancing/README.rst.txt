:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krbalancing'
.. highlight: bash

krbalancing
===========

.. conda:recipe:: krbalancing
   :replaces_section_title:

   This is a c\+\+ extension for python which computes K.R. balanced matrices.

   :homepage: https://github.com/deeptools/Knight-Ruiz-Matrix-balancing-algorithm
   :license: GPL3
   :recipe: /`krbalancing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krbalancing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krbalancing/meta.yaml>`_

   


.. conda:package:: krbalancing

   |downloads_krbalancing| |docker_krbalancing|

   :versions: 0.0.5-1, 0.0.5-0, 0.0.4-0, 0.0.3-0
   
   :depends eigen: >=3.3.7
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends pybind11: >=2.2.4
   :depends python: >=3.6,<3.7.0a0
   :depends python_abi: 3.6.* *_cp36m
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install krbalancing

   and update with::

      conda update krbalancing

   or use the docker container::

      docker pull quay.io/biocontainers/krbalancing:<tag>

   (see `krbalancing/tags`_ for valid values for ``<tag>``)


.. |downloads_krbalancing| image:: https://img.shields.io/conda/dn/bioconda/krbalancing.svg?style=flat
   :target: https://anaconda.org/bioconda/krbalancing
   :alt:   (downloads)
.. |docker_krbalancing| image:: https://quay.io/repository/biocontainers/krbalancing/status
   :target: https://quay.io/repository/biocontainers/krbalancing
.. _`krbalancing/tags`: https://quay.io/repository/biocontainers/krbalancing?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krbalancing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krbalancing/README.html