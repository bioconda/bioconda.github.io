:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vulcandata'
.. highlight: bash

bioconductor-vulcandata
=======================

.. conda:recipe:: bioconductor-vulcandata
   :replaces_section_title:
   :noindex:

   VirtUaL ChIP\-Seq data Analysis using Networks\, dummy dataset

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/vulcandata.html
   :license: LGPL-3
   :recipe: /`bioconductor-vulcandata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vulcandata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vulcandata/meta.yaml>`_

   This package provides a dummy regulatory network and ChIP\-Seq dataset for running examples in the vulcan package


.. conda:package:: bioconductor-vulcandata

   |downloads_bioconductor-vulcandata| |docker_bioconductor-vulcandata|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vulcandata

   and update with::

      conda update bioconductor-vulcandata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vulcandata:<tag>

   (see `bioconductor-vulcandata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vulcandata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vulcandata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vulcandata
   :alt:   (downloads)
.. |docker_bioconductor-vulcandata| image:: https://quay.io/repository/biocontainers/bioconductor-vulcandata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vulcandata
.. _`bioconductor-vulcandata/tags`: https://quay.io/repository/biocontainers/bioconductor-vulcandata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vulcandata";
        var versions = ["1.14.0","1.12.0","1.12.0","1.11.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vulcandata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vulcandata/README.html