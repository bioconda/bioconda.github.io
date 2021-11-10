:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phyloprofiledata'
.. highlight: bash

bioconductor-phyloprofiledata
=============================

.. conda:recipe:: bioconductor-phyloprofiledata
   :replaces_section_title:
   :noindex:

   Data package for phylogenetic profile analysis using PhyloProfile tool

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/PhyloProfileData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-phyloprofiledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phyloprofiledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phyloprofiledata/meta.yaml>`_

   Two experimental datasets to illustrate running and analysing phylogenetic profiles with PhyloProfile package.


.. conda:package:: bioconductor-phyloprofiledata

   |downloads_bioconductor-phyloprofiledata| |docker_bioconductor-phyloprofiledata|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocstyle: ``>=2.22.0,<2.23.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phyloprofiledata

   and update with::

      conda update bioconductor-phyloprofiledata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phyloprofiledata:<tag>

   (see `bioconductor-phyloprofiledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phyloprofiledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phyloprofiledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phyloprofiledata
   :alt:   (downloads)
.. |docker_bioconductor-phyloprofiledata| image:: https://quay.io/repository/biocontainers/bioconductor-phyloprofiledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phyloprofiledata
.. _`bioconductor-phyloprofiledata/tags`: https://quay.io/repository/biocontainers/bioconductor-phyloprofiledata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phyloprofiledata";
        var versions = ["1.8.0","1.6.0","1.4.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phyloprofiledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phyloprofiledata/README.html