:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'glimmer'
.. highlight: bash

glimmer
=======

.. conda:recipe:: glimmer
   :replaces_section_title:

   Glimmer is a system for finding genes in microbial DNA

   :homepage: https://ccb.jhu.edu/software/glimmer/index.shtml
   :license: Custom
   :recipe: /`glimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimmer/meta.yaml>`_
   :links: biotools: :biotools:`glimmer`, doi: :doi:`10.1093/bioinformatics/btm009`

   


.. conda:package:: glimmer

   |downloads_glimmer| |docker_glimmer|

   :versions: 3.02-3, 3.02-2, 3.02-1, 3.02-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install glimmer

   and update with::

      conda update glimmer

   or use the docker container::

      docker pull quay.io/biocontainers/glimmer:<tag>

   (see `glimmer/tags`_ for valid values for ``<tag>``)


.. |downloads_glimmer| image:: https://img.shields.io/conda/dn/bioconda/glimmer.svg?style=flat
   :alt:   (downloads)
.. |docker_glimmer| image:: https://quay.io/repository/biocontainers/glimmer/status
   :target: https://quay.io/repository/biocontainers/glimmer
.. _`glimmer/tags`: https://quay.io/repository/biocontainers/glimmer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/glimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/glimmer/README.html