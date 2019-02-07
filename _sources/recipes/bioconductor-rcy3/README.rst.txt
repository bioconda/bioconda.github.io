.. title:: Package Recipe 'bioconductor-rcy3'
.. highlight: bash


bioconductor-rcy3
=================

.. conda:recipe:: bioconductor-rcy3
   :replaces_section_title:

   Vizualize\, analyze and explore networks using Cytoscape via R.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RCy3.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rcy3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcy3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcy3/meta.yaml>`_

   


.. conda:package:: bioconductor-rcy3

   |downloads_bioconductor-rcy3| |docker_bioconductor-rcy3|

   :versions: 2.2.6, 2.0.88, 1.8.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-httr`  :conda:package:`r-igraph`  :conda:package:`r-r.utils`  :conda:package:`r-rjsonio`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-rcy3|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcy3

   and update with::

      conda update bioconductor-rcy3

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rcy3


.. |required_by_bioconductor-rcy3| conda:required_by:: bioconductor-rcy3
.. |downloads_bioconductor-rcy3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcy3.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rcy3| image:: https://quay.io/repository/biocontainers/bioconductor-rcy3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcy3







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcy3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcy3/README.html

