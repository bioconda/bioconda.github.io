:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcy3'
.. highlight: bash

bioconductor-rcy3
=================

.. conda:recipe:: bioconductor-rcy3
   :replaces_section_title:

   Vizualize\, analyze and explore networks using Cytoscape via R.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/RCy3.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rcy3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcy3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcy3/meta.yaml>`_

   


.. conda:package:: bioconductor-rcy3

   |downloads_bioconductor-rcy3| |docker_bioconductor-rcy3|

   :versions: 2.6.0-0, 2.4.3-0, 2.2.9-0, 2.2.6-0, 2.0.88-0, 1.8.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-graph: >=1.64.0,<1.65.0
   :depends cytoscape: >=3.7.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-r.utils: 
   :depends r-rjsonio: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcy3

   and update with::

      conda update bioconductor-rcy3

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcy3:<tag>

   (see `bioconductor-rcy3/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcy3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcy3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcy3
   :alt:   (downloads)
.. |docker_bioconductor-rcy3| image:: https://quay.io/repository/biocontainers/bioconductor-rcy3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcy3
.. _`bioconductor-rcy3/tags`: https://quay.io/repository/biocontainers/bioconductor-rcy3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcy3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcy3/README.html