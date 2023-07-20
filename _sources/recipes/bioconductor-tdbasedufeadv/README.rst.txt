:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tdbasedufeadv'
.. highlight: bash

bioconductor-tdbasedufeadv
==========================

.. conda:recipe:: bioconductor-tdbasedufeadv
   :replaces_section_title:
   :noindex:

   Advanced package of tensor decomposition based unsupervised feature extraction

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TDbasedUFEadv.html
   :license: GPL-3
   :recipe: /`bioconductor-tdbasedufeadv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tdbasedufeadv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tdbasedufeadv/meta.yaml>`_

   This is an advanced version of TDbasedUFE\, which is a comprehensive package to perform Tensor decomposition based unsupervised feature extraction. In contrast to TDbasedUFE which can perform simple the feature selection and the multiomics analyses\, this package can perform more complicated and advanced features\, but they are not so popularly required. Only users who require more specific features can make use of its functionality.


.. conda:package:: bioconductor-tdbasedufeadv

   |downloads_bioconductor-tdbasedufeadv| |docker_bioconductor-tdbasedufeadv|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-dose: ``>=3.26.0,<3.27.0``
   :depends bioconductor-enrichplot: ``>=1.20.0,<1.21.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-rtcga: ``>=1.30.0,<1.31.0``
   :depends bioconductor-stringdb: ``>=2.12.0,<2.13.0``
   :depends bioconductor-tdbasedufe: ``>=1.0.0,<1.1.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-enrichr: 
   :depends r-hash: 
   :depends r-rtensor: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tdbasedufeadv

   and update with::

      conda update bioconductor-tdbasedufeadv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tdbasedufeadv:<tag>

   (see `bioconductor-tdbasedufeadv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tdbasedufeadv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tdbasedufeadv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tdbasedufeadv
   :alt:   (downloads)
.. |docker_bioconductor-tdbasedufeadv| image:: https://quay.io/repository/biocontainers/bioconductor-tdbasedufeadv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tdbasedufeadv
.. _`bioconductor-tdbasedufeadv/tags`: https://quay.io/repository/biocontainers/bioconductor-tdbasedufeadv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tdbasedufeadv";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tdbasedufeadv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tdbasedufeadv/README.html