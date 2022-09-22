:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snadata'
.. highlight: bash

bioconductor-snadata
====================

.. conda:recipe:: bioconductor-snadata
   :replaces_section_title:
   :noindex:

   Social Networks Analysis Data Examples

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/SNAData.html
   :license: LGPL
   :recipe: /`bioconductor-snadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snadata/meta.yaml>`_

   Data from Wasserman \& Faust \(1999\) \"Social Network Analysis\"


.. conda:package:: bioconductor-snadata

   |downloads_bioconductor-snadata| |docker_bioconductor-snadata|

   :versions:
      
      

      ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``

      

   
   :depends bioconductor-graph: ``>=1.72.0,<1.73.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snadata

   and update with::

      conda update bioconductor-snadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snadata:<tag>

   (see `bioconductor-snadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snadata
   :alt:   (downloads)
.. |docker_bioconductor-snadata| image:: https://quay.io/repository/biocontainers/bioconductor-snadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snadata
.. _`bioconductor-snadata/tags`: https://quay.io/repository/biocontainers/bioconductor-snadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snadata";
        var versions = ["1.40.0","1.40.0","1.38.0","1.36.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snadata/README.html