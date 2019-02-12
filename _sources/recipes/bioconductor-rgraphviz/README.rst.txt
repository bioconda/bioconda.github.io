.. title:: Package Recipe 'bioconductor-rgraphviz'
.. highlight: bash


bioconductor-rgraphviz
======================

.. conda:recipe:: bioconductor-rgraphviz
   :replaces_section_title:

   Interfaces R with the AT and T graphviz library for plotting R graph objects from the graph package.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Rgraphviz.html
   :license: EPL
   :recipe: /`bioconductor-rgraphviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraphviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraphviz/meta.yaml>`_

   


.. conda:package:: bioconductor-rgraphviz

   |downloads_bioconductor-rgraphviz| |docker_bioconductor-rgraphviz|

   :versions: 2.26.0, 2.24.0, 2.22.0, 2.20.0, 2.16.0, 2.14.0, 2.13.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-rgraphviz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgraphviz

   and update with::

      conda update bioconductor-rgraphviz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rgraphviz


.. |required_by_bioconductor-rgraphviz| conda:required_by:: bioconductor-rgraphviz
.. |downloads_bioconductor-rgraphviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgraphviz.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rgraphviz| image:: https://quay.io/repository/biocontainers/bioconductor-rgraphviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgraphviz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgraphviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgraphviz/README.html

