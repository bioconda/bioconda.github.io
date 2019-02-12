.. title:: Package Recipe 'bioconductor-genocn'
.. highlight: bash


bioconductor-genocn
===================

.. conda:recipe:: bioconductor-genocn
   :replaces_section_title:

   Simultaneous identification of copy number states and genotype calls for regions of either copy number variations or copy number aberrations

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/genoCN.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-genocn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genocn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genocn/meta.yaml>`_

   


.. conda:package:: bioconductor-genocn

   |downloads_bioconductor-genocn| |docker_bioconductor-genocn|

   :versions: 1.34.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-genocn|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genocn

   and update with::

      conda update bioconductor-genocn

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genocn


.. |required_by_bioconductor-genocn| conda:required_by:: bioconductor-genocn
.. |downloads_bioconductor-genocn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genocn.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genocn| image:: https://quay.io/repository/biocontainers/bioconductor-genocn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genocn







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genocn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genocn/README.html

