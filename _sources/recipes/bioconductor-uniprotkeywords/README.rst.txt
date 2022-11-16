:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-uniprotkeywords'
.. highlight: bash

bioconductor-uniprotkeywords
============================

.. conda:recipe:: bioconductor-uniprotkeywords
   :replaces_section_title:
   :noindex:

   Keywords from UniProt Database

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/UniProtKeywords.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-uniprotkeywords <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uniprotkeywords>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uniprotkeywords/meta.yaml>`_

   UniProt database provides a list of controlled vocabulary represented as keywords for genes or proteins. This is useful for summarizing gene functions in a compact way. This package provides data of keywords hierarchy and gene\-keyword relations.


.. conda:package:: bioconductor-uniprotkeywords

   |downloads_bioconductor-uniprotkeywords| |docker_bioconductor-uniprotkeywords|

   :versions:
      
      

      ``0.99.4-0``

      

   
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-uniprotkeywords

   and update with::

      conda update bioconductor-uniprotkeywords

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-uniprotkeywords:<tag>

   (see `bioconductor-uniprotkeywords/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-uniprotkeywords| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-uniprotkeywords.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-uniprotkeywords
   :alt:   (downloads)
.. |docker_bioconductor-uniprotkeywords| image:: https://quay.io/repository/biocontainers/bioconductor-uniprotkeywords/status
   :target: https://quay.io/repository/biocontainers/bioconductor-uniprotkeywords
.. _`bioconductor-uniprotkeywords/tags`: https://quay.io/repository/biocontainers/bioconductor-uniprotkeywords?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-uniprotkeywords";
        var versions = ["0.99.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-uniprotkeywords/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-uniprotkeywords/README.html