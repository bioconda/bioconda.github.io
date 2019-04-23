:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bipartite'
.. highlight: bash

r-bipartite
===========

.. conda:recipe:: r-bipartite
   :replaces_section_title:

   Functions to visualise webs and calculate a series of indices commonly used to describe pattern in \(ecological\) webs. It focuses on webs consisting of only two levels \(bipartite\)\, e.g. pollination webs or predator\-prey\-webs. Visualisation is important to get an idea of what we are actually looking at\, while the indices summarise different aspects of the web\'s topology. 

   :homepage: https://github.com/biometry/bipartite
   :license: GPL / GPL
   :recipe: /`r-bipartite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bipartite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bipartite/meta.yaml>`_

   


.. conda:package:: r-bipartite

   |downloads_r-bipartite| |docker_r-bipartite|

   :versions: 2.11-2, 2.11-1, 2.11-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-fields: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-permute: 
   :depends r-sna: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bipartite

   and update with::

      conda update r-bipartite

   or use the docker container::

      docker pull quay.io/biocontainers/r-bipartite:<tag>

   (see `r-bipartite/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bipartite| image:: https://img.shields.io/conda/dn/bioconda/r-bipartite.svg?style=flat
   :alt:   (downloads)
.. |docker_r-bipartite| image:: https://quay.io/repository/biocontainers/r-bipartite/status
   :target: https://quay.io/repository/biocontainers/r-bipartite
.. _`r-bipartite/tags`: https://quay.io/repository/biocontainers/r-bipartite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bipartite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bipartite/README.html