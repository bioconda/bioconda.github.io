.. title:: Package Recipe 'bioconductor-kegggraph'
.. highlight: bash


bioconductor-kegggraph
======================

.. conda:recipe:: bioconductor-kegggraph
   :replaces_section_title:

   KEGGGraph is an interface between KEGG pathway and graph object as well as a collection of tools to analyze\, dissect and visualize these graphs. It parses the regularly updated KGML \(KEGG XML\) files into graph models maintaining all essential pathway attributes. The package offers functionalities including parsing\, graph operation\, visualization and etc.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/KEGGgraph.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-kegggraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kegggraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kegggraph/meta.yaml>`_
   :links: biotools: :biotools:`kegggraph`

   


.. conda:package:: bioconductor-kegggraph

   |downloads_bioconductor-kegggraph| |docker_bioconductor-kegggraph|

   :versions: 1.42.0, 1.40.0, 1.38.1, 1.38.0, 1.30.0, 1.28.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-xml` >=2.3-0 

   :required~by: |required_by_bioconductor-kegggraph|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-kegggraph

   and update with::

      conda update bioconductor-kegggraph

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-kegggraph


.. |required_by_bioconductor-kegggraph| conda:required_by:: bioconductor-kegggraph
.. |downloads_bioconductor-kegggraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kegggraph.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-kegggraph| image:: https://quay.io/repository/biocontainers/bioconductor-kegggraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kegggraph







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kegggraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kegggraph/README.html

