:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-redisparam'
.. highlight: bash

bioconductor-redisparam
=======================

.. conda:recipe:: bioconductor-redisparam
   :replaces_section_title:
   :noindex:

   Provide a \'redis\' back\-end for BiocParallel

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RedisParam.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-redisparam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-redisparam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-redisparam/meta.yaml>`_

   This package provides a Redis\-based back\-end for BiocParallel\, enabling an alternative mechanism for distributed computation. The The \'manager\' distributes tasks to a \'worker\' pool through a central Redis server\, rather than directly to workers as with other BiocParallel implementations. This means that the worker pool can change dynamically during job evaluation. All features of BiocParallel are supported\, including reproducible random number streams\, logging to the manager\, and alternative \'load balancing\' task distributions.


.. conda:package:: bioconductor-redisparam

   |downloads_bioconductor-redisparam| |docker_bioconductor-redisparam|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-futile.logger: 
   :depends r-redux: 
   :depends r-withr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-redisparam

   and update with::

      conda update bioconductor-redisparam

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-redisparam:<tag>

   (see `bioconductor-redisparam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-redisparam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-redisparam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-redisparam
   :alt:   (downloads)
.. |docker_bioconductor-redisparam| image:: https://quay.io/repository/biocontainers/bioconductor-redisparam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-redisparam
.. _`bioconductor-redisparam/tags`: https://quay.io/repository/biocontainers/bioconductor-redisparam?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-redisparam";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-redisparam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-redisparam/README.html