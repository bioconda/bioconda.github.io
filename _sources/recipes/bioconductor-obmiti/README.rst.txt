:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-obmiti'
.. highlight: bash

bioconductor-obmiti
===================

.. conda:recipe:: bioconductor-obmiti
   :replaces_section_title:
   :noindex:

   Ob\/ob Mice Data on Normal and High Fat Diet

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/ObMiTi.html
   :license: GPL-3
   :recipe: /`bioconductor-obmiti <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-obmiti>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-obmiti/meta.yaml>`_

   The package provide RNA\-seq count for 2 strains of mus musclus\; Wild type and Ob\/Ob. Each strain was divided into two groups\, and each group received either chow diet or high fat diet. RNA expression was measured after 20 weeks in 7 tissues.


.. conda:package:: bioconductor-obmiti

   |downloads_bioconductor-obmiti| |docker_bioconductor-obmiti|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-obmiti

   and update with::

      conda update bioconductor-obmiti

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-obmiti:<tag>

   (see `bioconductor-obmiti/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-obmiti| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-obmiti.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-obmiti
   :alt:   (downloads)
.. |docker_bioconductor-obmiti| image:: https://quay.io/repository/biocontainers/bioconductor-obmiti/status
   :target: https://quay.io/repository/biocontainers/bioconductor-obmiti
.. _`bioconductor-obmiti/tags`: https://quay.io/repository/biocontainers/bioconductor-obmiti?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-obmiti";
        var versions = ["1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-obmiti/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-obmiti/README.html