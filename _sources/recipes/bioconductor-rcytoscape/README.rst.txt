.. title:: Package Recipe 'bioconductor-rcytoscape'
.. highlight: bash


bioconductor-rcytoscape
=======================

.. conda:recipe:: bioconductor-rcytoscape
   :replaces_section_title:

   Interactvive viewing and exploration of graphs\, connecting R to Cytoscape.

   :homepage: http://bioconductor.org/packages/3.6/bioc/html/RCytoscape.html
   :license: GPL-2
   :recipe: /`bioconductor-rcytoscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcytoscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcytoscape/meta.yaml>`_
   :links: biotools: :biotools:`rcytoscape`

   


.. conda:package:: bioconductor-rcytoscape

   |downloads_bioconductor-rcytoscape| |docker_bioconductor-rcytoscape|

   :versions: 1.27.1, 1.26.0, 1.21.1

   :depends: :conda:package:`bioconductor-biocgenerics`  :conda:package:`bioconductor-graph` >=1.31.0 :conda:package:`r-base` 3.4.1* :conda:package:`r-xmlrpc` >=0.2.4 

   :required~by: |required_by_bioconductor-rcytoscape|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcytoscape

   and update with::

      conda update bioconductor-rcytoscape

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rcytoscape


.. |required_by_bioconductor-rcytoscape| conda:required_by:: bioconductor-rcytoscape
.. |downloads_bioconductor-rcytoscape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcytoscape.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rcytoscape| image:: https://quay.io/repository/biocontainers/bioconductor-rcytoscape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcytoscape







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcytoscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcytoscape/README.html

