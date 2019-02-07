.. title:: Package Recipe 'bioconductor-gcspikelite'
.. highlight: bash


bioconductor-gcspikelite
========================

.. conda:recipe:: bioconductor-gcspikelite
   :replaces_section_title:

   Spike\-in data for GC\/MS data and methods within flagme

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/gcspikelite.html
   :license: LGPL
   :recipe: /`bioconductor-gcspikelite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcspikelite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcspikelite/meta.yaml>`_

   


.. conda:package:: bioconductor-gcspikelite

   |downloads_bioconductor-gcspikelite| |docker_bioconductor-gcspikelite|

   :versions: 1.20.0, 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-gcspikelite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gcspikelite

   and update with::

      conda update bioconductor-gcspikelite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gcspikelite


.. |required_by_bioconductor-gcspikelite| conda:required_by:: bioconductor-gcspikelite
.. |downloads_bioconductor-gcspikelite| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcspikelite.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gcspikelite| image:: https://quay.io/repository/biocontainers/bioconductor-gcspikelite/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcspikelite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcspikelite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcspikelite/README.html

