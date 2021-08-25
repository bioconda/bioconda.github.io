:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmir.hsa'
.. highlight: bash

bioconductor-rmir.hsa
=====================

.. conda:recipe:: bioconductor-rmir.hsa
   :replaces_section_title:
   :noindex:

   Various databases of microRNA Targets

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/RmiR.hsa.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-rmir.hsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hsa/meta.yaml>`_

   Various databases of microRNA Targets


.. conda:package:: bioconductor-rmir.hsa

   |downloads_bioconductor-rmir.hsa| |docker_bioconductor-rmir.hsa|

   :versions:
      
      

      ``1.0.5-7``,  ``1.0.5-6``,  ``1.0.5-5``,  ``1.0.5-4``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rmir.hsa

   and update with::

      conda update bioconductor-rmir.hsa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmir.hsa:<tag>

   (see `bioconductor-rmir.hsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmir.hsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmir.hsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmir.hsa
   :alt:   (downloads)
.. |docker_bioconductor-rmir.hsa| image:: https://quay.io/repository/biocontainers/bioconductor-rmir.hsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmir.hsa
.. _`bioconductor-rmir.hsa/tags`: https://quay.io/repository/biocontainers/bioconductor-rmir.hsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rmir.hsa";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.5","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmir.hsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmir.hsa/README.html