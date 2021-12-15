:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'celltypist'
.. highlight: bash

celltypist
==========

.. conda:recipe:: celltypist
   :replaces_section_title:
   :noindex:

   A tool for semi\-automatic cell type annotation

   :homepage: https://github.com/Teichlab/celltypist
   :license: MIT / MIT
   :recipe: /`celltypist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/celltypist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/celltypist/meta.yaml>`_

   


.. conda:package:: celltypist

   |downloads_celltypist| |docker_celltypist|

   :versions:
      
      

      ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends click: ``>=7.1.2``
   :depends leidenalg: ``>=0.8.3``
   :depends numpy: ``>=1.19.0``
   :depends openpyxl: ``>=3.0.4``
   :depends pandas: ``>=1.0.5``
   :depends python: ``>=3.6``
   :depends requests: ``>=2.23.0``
   :depends scanpy: ``>=1.7.0``
   :depends scikit-learn: ``>=0.24.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install celltypist

   and update with::

      conda update celltypist

   or use the docker container::

      docker pull quay.io/biocontainers/celltypist:<tag>

   (see `celltypist/tags`_ for valid values for ``<tag>``)


.. |downloads_celltypist| image:: https://img.shields.io/conda/dn/bioconda/celltypist.svg?style=flat
   :target: https://anaconda.org/bioconda/celltypist
   :alt:   (downloads)
.. |docker_celltypist| image:: https://quay.io/repository/biocontainers/celltypist/status
   :target: https://quay.io/repository/biocontainers/celltypist
.. _`celltypist/tags`: https://quay.io/repository/biocontainers/celltypist?tab=tags


.. raw:: html

    <script>
        var package = "celltypist";
        var versions = ["0.1.9","0.1.8","0.1.7","0.1.6","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/celltypist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/celltypist/README.html