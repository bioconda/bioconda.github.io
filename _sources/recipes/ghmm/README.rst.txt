:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ghmm'
.. highlight: bash

ghmm
====

.. conda:recipe:: ghmm
   :replaces_section_title:

   General Hidden Markov Model library \(GHMM\) is a freely available C library implementing efficient data structures and algorithms for basic and extended HMMs with discrete and continous emissions

   :homepage: http://ghmm.org/
   :license: GPL2
   :recipe: /`ghmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghmm/meta.yaml>`_

   


.. conda:package:: ghmm

   |downloads_ghmm| |docker_ghmm|

   :versions: 0.9-1, 0.9-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libxml2: >=2.9.8,<2.10.0a0
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends swig: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ghmm

   and update with::

      conda update ghmm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ghmm:<tag>

   (see `ghmm/tags`_ for valid values for ``<tag>``)


.. |downloads_ghmm| image:: https://img.shields.io/conda/dn/bioconda/ghmm.svg?style=flat
   :alt:   (downloads)
.. |docker_ghmm| image:: https://quay.io/repository/biocontainers/ghmm/status
   :target: https://quay.io/repository/biocontainers/ghmm
.. _`ghmm/tags`: https://quay.io/repository/biocontainers/ghmm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghmm/README.html