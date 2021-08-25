:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meebodata'
.. highlight: bash

bioconductor-meebodata
======================

.. conda:recipe:: bioconductor-meebodata
   :replaces_section_title:
   :noindex:

   MEEBO set and MEEBO controls.

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/MEEBOdata.html
   :license: LGPL
   :recipe: /`bioconductor-meebodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meebodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meebodata/meta.yaml>`_

   R objects describing the MEEBO set.


.. conda:package:: bioconductor-meebodata

   |downloads_bioconductor-meebodata| |docker_bioconductor-meebodata|

   :versions:
      
      

      ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``

      

   
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meebodata

   and update with::

      conda update bioconductor-meebodata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meebodata:<tag>

   (see `bioconductor-meebodata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meebodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meebodata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meebodata
   :alt:   (downloads)
.. |docker_bioconductor-meebodata| image:: https://quay.io/repository/biocontainers/bioconductor-meebodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meebodata
.. _`bioconductor-meebodata/tags`: https://quay.io/repository/biocontainers/bioconductor-meebodata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-meebodata";
        var versions = ["1.30.0","1.28.0","1.28.0","1.27.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meebodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meebodata/README.html