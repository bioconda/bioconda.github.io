:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-jaspar2020'
.. highlight: bash

bioconductor-jaspar2020
=======================

.. conda:recipe:: bioconductor-jaspar2020
   :replaces_section_title:
   :noindex:

   Data package for JASPAR database \(version 2020\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/JASPAR2020.html
   :license: GPL-2
   :recipe: /`bioconductor-jaspar2020 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2020>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2020/meta.yaml>`_

   Data package for JASPAR2020. To search this databases\, please use the package TFBSTools \(\>\= 1.23.1\).


.. conda:package:: bioconductor-jaspar2020

   |downloads_bioconductor-jaspar2020| |docker_bioconductor-jaspar2020|

   :versions:
      
      

      ``0.99.10-5``,  ``0.99.10-4``,  ``0.99.10-3``,  ``0.99.10-2``,  ``0.99.10-1``,  ``0.99.10-0``

      

   
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-jaspar2020

   and update with::

      conda update bioconductor-jaspar2020

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-jaspar2020:<tag>

   (see `bioconductor-jaspar2020/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-jaspar2020| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jaspar2020.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-jaspar2020
   :alt:   (downloads)
.. |docker_bioconductor-jaspar2020| image:: https://quay.io/repository/biocontainers/bioconductor-jaspar2020/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jaspar2020
.. _`bioconductor-jaspar2020/tags`: https://quay.io/repository/biocontainers/bioconductor-jaspar2020?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-jaspar2020";
        var versions = ["0.99.10","0.99.10","0.99.10","0.99.10","0.99.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jaspar2020/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jaspar2020/README.html