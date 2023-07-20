:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multimodalexperiment'
.. highlight: bash

bioconductor-multimodalexperiment
=================================

.. conda:recipe:: bioconductor-multimodalexperiment
   :replaces_section_title:
   :noindex:

   Integrative Bulk and Single\-Cell Experiment Container

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MultimodalExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-multimodalexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimodalexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multimodalexperiment/meta.yaml>`_

   MultimodalExperiment is an S4 class that integrates bulk and single\-cell experiment data\; it is optimally storage\-efficient\, and its methods are exceptionally fast. It effortlessly represents multimodal data of any nature and features normalized experiment\, subject\, sample\, and cell annotations\, which are related to underlying biological experiments through maps. Its coordination methods are opt\-in and employ database\-like join operations internally to deliver fast and flexible management of multimodal data.


.. conda:package:: bioconductor-multimodalexperiment

   |downloads_bioconductor-multimodalexperiment| |docker_bioconductor-multimodalexperiment|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multimodalexperiment

   and update with::

      conda update bioconductor-multimodalexperiment

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multimodalexperiment:<tag>

   (see `bioconductor-multimodalexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multimodalexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multimodalexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multimodalexperiment
   :alt:   (downloads)
.. |docker_bioconductor-multimodalexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-multimodalexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multimodalexperiment
.. _`bioconductor-multimodalexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-multimodalexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multimodalexperiment";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multimodalexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multimodalexperiment/README.html