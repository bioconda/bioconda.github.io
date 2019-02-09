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

   :versions: 2.11

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-fields`  :conda:package:`r-igraph`  :conda:package:`r-mass`  :conda:package:`r-permute`  :conda:package:`r-sna`  :conda:package:`r-vegan`  

   :required~by: |required_by_r-bipartite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bipartite

   and update with::

      conda update r-bipartite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-bipartite


.. |required_by_r-bipartite| conda:required_by:: r-bipartite
.. |downloads_r-bipartite| image:: https://img.shields.io/conda/dn/bioconda/r-bipartite.svg?style=flat
   :alt:   (downloads)
.. |docker_r-bipartite| image:: https://quay.io/repository/biocontainers/r-bipartite/status
   :target: https://quay.io/repository/biocontainers/r-bipartite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bipartite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bipartite/README.html

