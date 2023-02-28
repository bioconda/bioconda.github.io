:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xcoredata'
.. highlight: bash

bioconductor-xcoredata
======================

.. conda:recipe:: bioconductor-xcoredata
   :replaces_section_title:
   :noindex:

   data package for xcore

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/xcoredata.html
   :license: GPL-2
   :recipe: /`bioconductor-xcoredata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcoredata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcoredata/meta.yaml>`_

   Provides data to use with xcore package.


.. conda:package:: bioconductor-xcoredata

   |downloads_bioconductor-xcoredata| |docker_bioconductor-xcoredata|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20221108``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xcoredata

   and update with::

      conda update bioconductor-xcoredata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xcoredata:<tag>

   (see `bioconductor-xcoredata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xcoredata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xcoredata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xcoredata
   :alt:   (downloads)
.. |docker_bioconductor-xcoredata| image:: https://quay.io/repository/biocontainers/bioconductor-xcoredata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xcoredata
.. _`bioconductor-xcoredata/tags`: https://quay.io/repository/biocontainers/bioconductor-xcoredata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xcoredata";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xcoredata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xcoredata/README.html