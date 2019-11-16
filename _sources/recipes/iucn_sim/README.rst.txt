:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iucn_sim'
.. highlight: bash

iucn_sim
========

.. conda:recipe:: iucn_sim
   :replaces_section_title:

   Estimate extinction probabilities and dates for a given set of species\, based on IUCN threat assessments

   :homepage: https://github.com/tobiashofmann88/iucn_extinction_simulator
   :license: MIT
   :recipe: /`iucn_sim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iucn_sim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iucn_sim/meta.yaml>`_

   


.. conda:package:: iucn_sim

   |downloads_iucn_sim| |docker_iucn_sim|

   :versions: 1.2-0
   
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: >=3.6
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install iucn_sim

   and update with::

      conda update iucn_sim

   or use the docker container::

      docker pull quay.io/biocontainers/iucn_sim:<tag>

   (see `iucn_sim/tags`_ for valid values for ``<tag>``)


.. |downloads_iucn_sim| image:: https://img.shields.io/conda/dn/bioconda/iucn_sim.svg?style=flat
   :target: https://anaconda.org/bioconda/iucn_sim
   :alt:   (downloads)
.. |docker_iucn_sim| image:: https://quay.io/repository/biocontainers/iucn_sim/status
   :target: https://quay.io/repository/biocontainers/iucn_sim
.. _`iucn_sim/tags`: https://quay.io/repository/biocontainers/iucn_sim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iucn_sim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iucn_sim/README.html