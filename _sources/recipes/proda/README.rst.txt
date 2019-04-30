:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proda'
.. highlight: bash

proda
=====

.. conda:recipe:: proda
   :replaces_section_title:

   ProDA \- Multiple alignment of protein sequences with repeated and shuffled elements

   :homepage: http://proda.stanford.edu/
   :license: Public Domain Software
   :recipe: /`proda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proda/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkl511`

   


.. conda:package:: proda

   |downloads_proda| |docker_proda|

   :versions: 1.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proda

   and update with::

      conda update proda

   or use the docker container::

      docker pull quay.io/biocontainers/proda:<tag>

   (see `proda/tags`_ for valid values for ``<tag>``)


.. |downloads_proda| image:: https://img.shields.io/conda/dn/bioconda/proda.svg?style=flat
   :alt:   (downloads)
.. |docker_proda| image:: https://quay.io/repository/biocontainers/proda/status
   :target: https://quay.io/repository/biocontainers/proda
.. _`proda/tags`: https://quay.io/repository/biocontainers/proda?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proda/README.html