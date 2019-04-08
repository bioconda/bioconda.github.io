:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicdatalymphoblast'
.. highlight: bash

bioconductor-hicdatalymphoblast
===============================

.. conda:recipe:: bioconductor-hicdatalymphoblast
   :replaces_section_title:

   The HiC data from human lymphoblastoid cell line \(HindIII restriction\) was retrieved from the sequence read archive and two ends of the paired reads were aligned separately with bowtie.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/HiCDataLymphoblast.html
   :license: GPL-3
   :recipe: /`bioconductor-hicdatalymphoblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdatalymphoblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdatalymphoblast/meta.yaml>`_

   


.. conda:package:: bioconductor-hicdatalymphoblast

   |downloads_bioconductor-hicdatalymphoblast| |docker_bioconductor-hicdatalymphoblast|

   :versions: 1.18.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hicdatalymphoblast

   and update with::

      conda update bioconductor-hicdatalymphoblast

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicdatalymphoblast:<tag>

   (see `bioconductor-hicdatalymphoblast/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicdatalymphoblast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicdatalymphoblast.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hicdatalymphoblast| image:: https://quay.io/repository/biocontainers/bioconductor-hicdatalymphoblast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicdatalymphoblast
.. _`bioconductor-hicdatalymphoblast/tags`: https://quay.io/repository/biocontainers/bioconductor-hicdatalymphoblast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicdatalymphoblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicdatalymphoblast/README.html