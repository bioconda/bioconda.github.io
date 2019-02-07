.. title:: Package Recipe 'bioconductor-rprotobuflib'
.. highlight: bash


bioconductor-rprotobuflib
=========================

.. conda:recipe:: bioconductor-rprotobuflib
   :replaces_section_title:

   This package provides the headers and static library of Protocol buffers 2.6.0 for other R packages to compile and link against.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RProtoBufLib.html
   :license: BSD_3_clause
   :recipe: /`bioconductor-rprotobuflib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rprotobuflib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rprotobuflib/meta.yaml>`_

   


.. conda:package:: bioconductor-rprotobuflib

   |downloads_bioconductor-rprotobuflib| |docker_bioconductor-rprotobuflib|

   :versions: 1.4.0, 1.2.0, 1.0.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-rprotobuflib|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rprotobuflib

   and update with::

      conda update bioconductor-rprotobuflib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rprotobuflib


.. |required_by_bioconductor-rprotobuflib| conda:required_by:: bioconductor-rprotobuflib
.. |downloads_bioconductor-rprotobuflib| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rprotobuflib.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rprotobuflib| image:: https://quay.io/repository/biocontainers/bioconductor-rprotobuflib/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rprotobuflib







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rprotobuflib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rprotobuflib/README.html

