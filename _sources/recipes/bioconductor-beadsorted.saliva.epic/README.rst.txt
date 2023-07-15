:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beadsorted.saliva.epic'
.. highlight: bash

bioconductor-beadsorted.saliva.epic
===================================

.. conda:recipe:: bioconductor-beadsorted.saliva.epic
   :replaces_section_title:
   :noindex:

   Illumina EPIC data on BeadSorted child saliva cells

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/BeadSorted.Saliva.EPIC.html
   :license: GPL-3
   :recipe: /`bioconductor-beadsorted.saliva.epic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadsorted.saliva.epic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadsorted.saliva.epic/meta.yaml>`_

   Raw data objects used to estimate saliva cell proportion estimates in ewastools. The FlowSorted.Saliva.EPIC object is constructed from samples assayed by Lauren Middleton et. al. \(2021\).


.. conda:package:: bioconductor-beadsorted.saliva.epic

   |downloads_bioconductor-beadsorted.saliva.epic| |docker_bioconductor-beadsorted.saliva.epic|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-minfi: ``>=1.46.0,<1.47.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beadsorted.saliva.epic

   and update with::

      conda update bioconductor-beadsorted.saliva.epic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beadsorted.saliva.epic:<tag>

   (see `bioconductor-beadsorted.saliva.epic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beadsorted.saliva.epic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadsorted.saliva.epic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beadsorted.saliva.epic
   :alt:   (downloads)
.. |docker_bioconductor-beadsorted.saliva.epic| image:: https://quay.io/repository/biocontainers/bioconductor-beadsorted.saliva.epic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadsorted.saliva.epic
.. _`bioconductor-beadsorted.saliva.epic/tags`: https://quay.io/repository/biocontainers/bioconductor-beadsorted.saliva.epic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beadsorted.saliva.epic";
        var versions = ["1.8.0","1.6.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadsorted.saliva.epic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadsorted.saliva.epic/README.html