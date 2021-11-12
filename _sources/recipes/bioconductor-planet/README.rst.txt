:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-planet'
.. highlight: bash

bioconductor-planet
===================

.. conda:recipe:: bioconductor-planet
   :replaces_section_title:
   :noindex:

   Placental DNA methylation analysis tools

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/planet.html
   :license: GPL-2
   :recipe: /`bioconductor-planet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-planet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-planet/meta.yaml>`_

   This package contains R functions to infer additional biological variables to supplemental DNA methylation analysis of placental data. This includes inferring ethnicity\/ancestry\, gestational age\, and cell composition from placental DNA methylation array \(450k\/850k\) data. The package comes with an example processed placental dataset.


.. conda:package:: bioconductor-planet

   |downloads_bioconductor-planet| |docker_bioconductor-planet|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-planet

   and update with::

      conda update bioconductor-planet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-planet:<tag>

   (see `bioconductor-planet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-planet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-planet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-planet
   :alt:   (downloads)
.. |docker_bioconductor-planet| image:: https://quay.io/repository/biocontainers/bioconductor-planet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-planet
.. _`bioconductor-planet/tags`: https://quay.io/repository/biocontainers/bioconductor-planet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-planet";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-planet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-planet/README.html