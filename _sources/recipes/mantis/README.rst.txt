:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mantis'
.. highlight: bash

mantis
======

.. conda:recipe:: mantis
   :replaces_section_title:

   Mantis\: A Fast\, Small\, and Exact Large\-Scale Sequence\-Search Index

   :homepage: https://github.com/splatlab/mantis
   :license: BSD / BSD-3-Clause
   :recipe: /`mantis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2018.05.021`

   


.. conda:package:: mantis

   |downloads_mantis| |docker_mantis|

   :versions: 0.2-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mantis

   and update with::

      conda update mantis

   or use the docker container::

      docker pull quay.io/biocontainers/mantis:<tag>

   (see `mantis/tags`_ for valid values for ``<tag>``)


.. |downloads_mantis| image:: https://img.shields.io/conda/dn/bioconda/mantis.svg?style=flat
   :alt:   (downloads)
.. |docker_mantis| image:: https://quay.io/repository/biocontainers/mantis/status
   :target: https://quay.io/repository/biocontainers/mantis
.. _`mantis/tags`: https://quay.io/repository/biocontainers/mantis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mantis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mantis/README.html