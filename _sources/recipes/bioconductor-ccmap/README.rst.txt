:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ccmap'
.. highlight: bash

bioconductor-ccmap
==================

.. conda:recipe:: bioconductor-ccmap
   :replaces_section_title:

   Finds drugs and drug combinations that are predicted to reverse or mimic gene expression signatures. These drugs might reverse diseases or mimic healthy lifestyles.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ccmap.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ccmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccmap/meta.yaml>`_

   


.. conda:package:: bioconductor-ccmap

   |downloads_bioconductor-ccmap| |docker_bioconductor-ccmap|

   :versions: 1.8.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-ccdata: >=1.8.0,<1.9.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-biocmanager: >=1.24.0
   
   :depends r-data.table: >=1.10.4
   
   :depends r-doparallel: >=1.0.10
   
   :depends r-foreach: >=1.4.3
   
   :depends r-lsa: >=0.73.1
   
   :depends r-xgboost: >=0.6.4
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ccmap

   and update with::

      conda update bioconductor-ccmap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ccmap:<tag>

   (see `bioconductor-ccmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ccmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccmap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ccmap| image:: https://quay.io/repository/biocontainers/bioconductor-ccmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccmap
.. _`bioconductor-ccmap/tags`: https://quay.io/repository/biocontainers/bioconductor-ccmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccmap/README.html