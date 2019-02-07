.. title:: Package Recipe 'bioconductor-cytolib'
.. highlight: bash


bioconductor-cytolib
====================

.. conda:recipe:: bioconductor-cytolib
   :replaces_section_title:

   This package provides the core data structure and API to represent and interact with the gated cytometry data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/cytolib.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cytolib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytolib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytolib/meta.yaml>`_

   


.. conda:package:: bioconductor-cytolib

   |downloads_bioconductor-cytolib| |docker_bioconductor-cytolib|

   :versions: 1.4.0, 1.2.0, 1.0.1

   :depends: :conda:package:`bioconductor-rprotobuflib` >=1.4.0,<1.5.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bh` >=1.62.0-1 

   :required~by: |required_by_bioconductor-cytolib|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cytolib

   and update with::

      conda update bioconductor-cytolib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cytolib


.. |required_by_bioconductor-cytolib| conda:required_by:: bioconductor-cytolib
.. |downloads_bioconductor-cytolib| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytolib.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cytolib| image:: https://quay.io/repository/biocontainers/bioconductor-cytolib/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytolib







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytolib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytolib/README.html

