:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clumsid'
.. highlight: bash

bioconductor-clumsid
====================

.. conda:recipe:: bioconductor-clumsid
   :replaces_section_title:
   :noindex:

   Clustering of MS2 Spectra for Metabolite Identification

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CluMSID.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-clumsid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clumsid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clumsid/meta.yaml>`_

   CluMSID is a tool that aids the identification of features in untargeted LC\-MS\/MS analysis by the use of MS2 spectra similarity and unsupervised statistical methods. It offers functions for a complete and customisable workflow from raw data to visualisations and is interfaceable with the xmcs family of preprocessing packages.


.. conda:package:: bioconductor-clumsid

   |downloads_bioconductor-clumsid| |docker_bioconductor-clumsid|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-msnbase: ``>=2.26.0,<2.27.0``
   :depends bioconductor-mzr: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbscan: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-network: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-sna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clumsid

   and update with::

      conda update bioconductor-clumsid

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clumsid:<tag>

   (see `bioconductor-clumsid/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clumsid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clumsid.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clumsid
   :alt:   (downloads)
.. |docker_bioconductor-clumsid| image:: https://quay.io/repository/biocontainers/bioconductor-clumsid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clumsid
.. _`bioconductor-clumsid/tags`: https://quay.io/repository/biocontainers/bioconductor-clumsid?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clumsid";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clumsid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clumsid/README.html