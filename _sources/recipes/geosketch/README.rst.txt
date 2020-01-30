:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geosketch'
.. highlight: bash

geosketch
=========

.. conda:recipe:: geosketch
   :replaces_section_title:

   Geometry\-preserving random sampling

   :homepage: https://github.com/brianhie/geosketch/
   :license: MIT
   :recipe: /`geosketch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geosketch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geosketch/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2019.05.003`

   


.. conda:package:: geosketch

   |downloads_geosketch| |docker_geosketch|

   :versions: 1.0-0
   
   :depends fbpca: >=1
   :depends numpy: >=1.12
   :depends python: >=3.6
   :depends scikit-learn: >=0.20
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install geosketch

   and update with::

      conda update geosketch

   or use the docker container::

      docker pull quay.io/biocontainers/geosketch:<tag>

   (see `geosketch/tags`_ for valid values for ``<tag>``)


.. |downloads_geosketch| image:: https://img.shields.io/conda/dn/bioconda/geosketch.svg?style=flat
   :target: https://anaconda.org/bioconda/geosketch
   :alt:   (downloads)
.. |docker_geosketch| image:: https://quay.io/repository/biocontainers/geosketch/status
   :target: https://quay.io/repository/biocontainers/geosketch
.. _`geosketch/tags`: https://quay.io/repository/biocontainers/geosketch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geosketch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geosketch/README.html