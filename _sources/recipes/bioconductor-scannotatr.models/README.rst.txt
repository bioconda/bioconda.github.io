:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scannotatr.models'
.. highlight: bash

bioconductor-scannotatr.models
==============================

.. conda:recipe:: bioconductor-scannotatr.models
   :replaces_section_title:
   :noindex:

   Pretrained models for scAnnotatR package

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/scAnnotatR.models.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scannotatr.models <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scannotatr.models>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scannotatr.models/meta.yaml>`_

   Pretrained models for scAnnotatR package. These models can be used to automatically classify several \(immune\) cell types in human scRNA\-seq data.


.. conda:package:: bioconductor-scannotatr.models

   |downloads_bioconductor-scannotatr.models| |docker_bioconductor-scannotatr.models|

   :versions:
      
      

      ``0.99.10-2``,  ``0.99.10-1``,  ``0.99.10-0``

      

   
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scannotatr.models

   and update with::

      conda update bioconductor-scannotatr.models

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scannotatr.models:<tag>

   (see `bioconductor-scannotatr.models/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scannotatr.models| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scannotatr.models.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scannotatr.models
   :alt:   (downloads)
.. |docker_bioconductor-scannotatr.models| image:: https://quay.io/repository/biocontainers/bioconductor-scannotatr.models/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scannotatr.models
.. _`bioconductor-scannotatr.models/tags`: https://quay.io/repository/biocontainers/bioconductor-scannotatr.models?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scannotatr.models";
        var versions = ["0.99.10","0.99.10","0.99.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scannotatr.models/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scannotatr.models/README.html