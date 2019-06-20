:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'glimmerhmm'
.. highlight: bash

glimmerhmm
==========

.. conda:recipe:: glimmerHMM
   :replaces_section_title:

   GlimmerHMM is a gene finder based on a Generalized Hidden Markov Model \(GHMM\)

   :homepage: https://ccb.jhu.edu/software/glimmerhmm/
   :license: Artistic License
   :recipe: /`glimmerHMM <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimmerHMM>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimmerHMM/meta.yaml>`_

   


.. conda:package:: glimmerhmm

   |downloads_glimmerhmm| |docker_glimmerhmm|

   :versions: 3.0.4-2, 3.0.4-1, 3.0.4-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install glimmerhmm

   and update with::

      conda update glimmerhmm

   or use the docker container::

      docker pull quay.io/biocontainers/glimmerhmm:<tag>

   (see `glimmerhmm/tags`_ for valid values for ``<tag>``)


.. |downloads_glimmerhmm| image:: https://img.shields.io/conda/dn/bioconda/glimmerhmm.svg?style=flat
   :target: https://anaconda.org/bioconda/glimmerhmm
   :alt:   (downloads)
.. |docker_glimmerhmm| image:: https://quay.io/repository/biocontainers/glimmerhmm/status
   :target: https://quay.io/repository/biocontainers/glimmerhmm
.. _`glimmerhmm/tags`: https://quay.io/repository/biocontainers/glimmerhmm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/glimmerhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/glimmerhmm/README.html