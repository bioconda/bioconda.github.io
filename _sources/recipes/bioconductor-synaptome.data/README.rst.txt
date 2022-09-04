:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synaptome.data'
.. highlight: bash

bioconductor-synaptome.data
===========================

.. conda:recipe:: bioconductor-synaptome.data
   :replaces_section_title:
   :noindex:

   AnnotationData for Synaptome.DB package

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/synaptome.data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-synaptome.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synaptome.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synaptome.data/meta.yaml>`_

   The package provides access to the copy of the Synaptic proteome database. It was designed as an accompaniment for Synaptome.DB package. Database provides information for specific genes and allows building the protein\-protein interaction graph for gene sets\, synaptic compartments\, and brain regions.


.. conda:package:: bioconductor-synaptome.data

   |downloads_bioconductor-synaptome.data| |docker_bioconductor-synaptome.data|

   :versions:
      
      

      ``0.99.3-1``,  ``0.99.3-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-synaptome.data

   and update with::

      conda update bioconductor-synaptome.data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-synaptome.data:<tag>

   (see `bioconductor-synaptome.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-synaptome.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synaptome.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synaptome.data
   :alt:   (downloads)
.. |docker_bioconductor-synaptome.data| image:: https://quay.io/repository/biocontainers/bioconductor-synaptome.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synaptome.data
.. _`bioconductor-synaptome.data/tags`: https://quay.io/repository/biocontainers/bioconductor-synaptome.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-synaptome.data";
        var versions = ["0.99.3","0.99.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synaptome.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synaptome.data/README.html