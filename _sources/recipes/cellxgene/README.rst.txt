:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellxgene'
.. highlight: bash

cellxgene
=========

.. conda:recipe:: cellxgene
   :replaces_section_title:
   :noindex:

   Web application for exploration of large scale scRNA\-seq datasets

   :homepage: https://chanzuckerberg.github.io/cellxgene/
   :documentation: https://github.com/chanzuckerberg/cellxgene
   
   :license: MIT / MIT
   :recipe: /`cellxgene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellxgene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellxgene/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`interactive_tool_cellxgene`

   


.. conda:package:: cellxgene

   |downloads_cellxgene| |docker_cellxgene|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.16.7-0``,  ``0.16.6-0``,  ``0.16.5-0``,  ``0.16.4-0``,  ``0.16.2-0``,  ``0.16.0-0``

      

   
   :depends anndata: ``>=0.7.6``
   :depends boto3: ``>=1.12.18``
   :depends click: ``>=7.1.2``
   :depends fastobo: ``>=0.6.1``
   :depends flask: ``>=1.0.2``
   :depends flask-compress: ``>=1.4.0``
   :depends flask-cors: ``>=3.0.9``
   :depends flask-restful: ``>=0.3.6``
   :depends flask-server-timing: ``>=0.1.2``
   :depends flask-talisman: ``>=0.7.0``
   :depends flatten-dict: ``>=0.2.0``
   :depends fsspec: ``>=0.4.4,<0.8.0``
   :depends gunicorn: ``>=20.0.4``
   :depends h5py: ``>=3.0.0``
   :depends numba: ``>=0.51.2``
   :depends numpy: ``>=1.17.5``
   :depends packaging: ``>=20.0``
   :depends pandas: ``>=1.0,!=1.1``
   :depends python: ``>=3.6``
   :depends python-flatbuffers: ``>=1.11.0,<2.0.0``
   :depends pyyaml: ``>=5.4``
   :depends requests: ``>=2.22.0``
   :depends s3fs: ``0.4.2``
   :depends scipy: ``>=1.4.0``
   :depends sqlalchemy: 
   :depends tiledb-py: ``>=0.6.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cellxgene

   and update with::

      conda update cellxgene

   or use the docker container::

      docker pull quay.io/biocontainers/cellxgene:<tag>

   (see `cellxgene/tags`_ for valid values for ``<tag>``)


.. |downloads_cellxgene| image:: https://img.shields.io/conda/dn/bioconda/cellxgene.svg?style=flat
   :target: https://anaconda.org/bioconda/cellxgene
   :alt:   (downloads)
.. |docker_cellxgene| image:: https://quay.io/repository/biocontainers/cellxgene/status
   :target: https://quay.io/repository/biocontainers/cellxgene
.. _`cellxgene/tags`: https://quay.io/repository/biocontainers/cellxgene?tab=tags


.. raw:: html

    <script>
        var package = "cellxgene";
        var versions = ["1.0.1","1.0.0","0.16.7","0.16.6","0.16.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellxgene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellxgene/README.html