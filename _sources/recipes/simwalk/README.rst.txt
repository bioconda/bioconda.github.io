:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simwalk2'
.. highlight: bash

simwalk2
========

.. conda:recipe:: simwalk
   :replaces_section_title:

   Stochastic Statistical Analysis of Qualitative Traits

   :homepage: http://www.genetics.ucla.edu/software/
   :license: INDIVIDUAL
   :recipe: /`simwalk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simwalk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simwalk/meta.yaml>`_

   


.. conda:package:: simwalk2

   |downloads_simwalk2| |docker_simwalk2|

   :versions: 2.91-1, 2.91-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libgfortran: >=3.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install simwalk2

   and update with::

      conda update simwalk2

   or use the docker container::

      docker pull quay.io/biocontainers/simwalk2:<tag>

   (see `simwalk2/tags`_ for valid values for ``<tag>``)


.. |downloads_simwalk2| image:: https://img.shields.io/conda/dn/bioconda/simwalk2.svg?style=flat
   :alt:   (downloads)
.. |docker_simwalk2| image:: https://quay.io/repository/biocontainers/simwalk2/status
   :target: https://quay.io/repository/biocontainers/simwalk2
.. _`simwalk2/tags`: https://quay.io/repository/biocontainers/simwalk2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simwalk2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simwalk2/README.html