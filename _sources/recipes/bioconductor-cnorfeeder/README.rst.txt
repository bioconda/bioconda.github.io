.. title:: Package Recipe 'bioconductor-cnorfeeder'
.. highlight: bash


bioconductor-cnorfeeder
=======================

.. conda:recipe:: bioconductor-cnorfeeder
   :replaces_section_title:

   This package integrates literature\-constrained and data\-driven methods to infer signalling networks from perturbation experiments. It permits to extends a given network with links derived from the data via various inference methods and uses information on physical interactions of proteins to guide and validate the integration of links.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CNORfeeder.html
   :license: GPL-3
   :recipe: /`bioconductor-cnorfeeder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnorfeeder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnorfeeder/meta.yaml>`_

   


.. conda:package:: bioconductor-cnorfeeder

   |downloads_bioconductor-cnorfeeder| |docker_bioconductor-cnorfeeder|

   :versions: 1.22.0

   :depends: :conda:package:`bioconductor-cellnoptr` >=1.28.0,<1.29.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-cnorfeeder|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnorfeeder

   and update with::

      conda update bioconductor-cnorfeeder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cnorfeeder


.. |required_by_bioconductor-cnorfeeder| conda:required_by:: bioconductor-cnorfeeder
.. |downloads_bioconductor-cnorfeeder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnorfeeder.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cnorfeeder| image:: https://quay.io/repository/biocontainers/bioconductor-cnorfeeder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnorfeeder







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnorfeeder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnorfeeder/README.html

