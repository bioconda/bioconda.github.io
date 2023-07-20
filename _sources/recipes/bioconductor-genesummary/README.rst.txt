:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genesummary'
.. highlight: bash

bioconductor-genesummary
========================

.. conda:recipe:: bioconductor-genesummary
   :replaces_section_title:
   :noindex:

   RefSeq Gene Summaries

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/GeneSummary.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-genesummary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genesummary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genesummary/meta.yaml>`_

   This package provides long description of genes collected from the RefSeq database. The text in \"COMMENT\" section started with \"Summary\" is extracted as the description of the gene. The long text descriptions can be used for analysis such as text mining.


.. conda:package:: bioconductor-genesummary

   |downloads_bioconductor-genesummary| |docker_bioconductor-genesummary|

   :versions:
      
      

      ``0.99.4-1``,  ``0.99.4-0``,  ``0.99.3-1``,  ``0.99.3-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genesummary

   and update with::

      conda update bioconductor-genesummary

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genesummary:<tag>

   (see `bioconductor-genesummary/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genesummary| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genesummary.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genesummary
   :alt:   (downloads)
.. |docker_bioconductor-genesummary| image:: https://quay.io/repository/biocontainers/bioconductor-genesummary/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genesummary
.. _`bioconductor-genesummary/tags`: https://quay.io/repository/biocontainers/bioconductor-genesummary?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genesummary";
        var versions = ["0.99.4","0.99.4","0.99.3","0.99.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genesummary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genesummary/README.html