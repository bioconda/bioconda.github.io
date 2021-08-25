:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ccl4'
.. highlight: bash

bioconductor-ccl4
=================

.. conda:recipe:: bioconductor-ccl4
   :replaces_section_title:
   :noindex:

   Carbon Tetrachloride \(CCl4\) treated hepatocytes

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/CCl4.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ccl4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccl4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccl4/meta.yaml>`_

   NChannelSet for rat hepatocytes treated with Carbon Tetrachloride \(CCl4\) data from LGC company.


.. conda:package:: bioconductor-ccl4

   |downloads_bioconductor-ccl4| |docker_bioconductor-ccl4|

   :versions:
      
      

      ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ccl4

   and update with::

      conda update bioconductor-ccl4

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ccl4:<tag>

   (see `bioconductor-ccl4/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ccl4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccl4.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ccl4
   :alt:   (downloads)
.. |docker_bioconductor-ccl4| image:: https://quay.io/repository/biocontainers/bioconductor-ccl4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccl4
.. _`bioconductor-ccl4/tags`: https://quay.io/repository/biocontainers/bioconductor-ccl4?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ccl4";
        var versions = ["1.30.0","1.28.0","1.28.0","1.27.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccl4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccl4/README.html