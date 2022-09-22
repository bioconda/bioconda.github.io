:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialdmelxsim'
.. highlight: bash

bioconductor-spatialdmelxsim
============================

.. conda:recipe:: bioconductor-spatialdmelxsim
   :replaces_section_title:
   :noindex:

   Spatial allelic expression counts for fly cross embryo

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/spatialDmelxsim.html
   :license: GPL-3
   :recipe: /`bioconductor-spatialdmelxsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialdmelxsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialdmelxsim/meta.yaml>`_

   Spatial allelic expression counts from Combs \& Fraser \(2018\)\, compiled into a SummarizedExperiment object. This package contains data of allelic expression counts of spatial slices of a fly embryo\, a Drosophila melanogaster x Drosophila simulans cross. See the CITATION file for the data source\, and the associated script for how the object was constructed from publicly available data.


.. conda:package:: bioconductor-spatialdmelxsim

   |downloads_bioconductor-spatialdmelxsim| |docker_bioconductor-spatialdmelxsim|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spatialdmelxsim

   and update with::

      conda update bioconductor-spatialdmelxsim

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialdmelxsim:<tag>

   (see `bioconductor-spatialdmelxsim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialdmelxsim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialdmelxsim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialdmelxsim
   :alt:   (downloads)
.. |docker_bioconductor-spatialdmelxsim| image:: https://quay.io/repository/biocontainers/bioconductor-spatialdmelxsim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialdmelxsim
.. _`bioconductor-spatialdmelxsim/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialdmelxsim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialdmelxsim";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialdmelxsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialdmelxsim/README.html