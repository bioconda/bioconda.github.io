:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scelvis'
.. highlight: bash

scelvis
=======

.. conda:recipe:: scelvis
   :replaces_section_title:

   SCelVis \- web\-based visualization of single\-cell data

   :homepage: https://github.com/bihealth/scelvis
   :license: MIT / MIT
   :recipe: /`scelvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scelvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scelvis/meta.yaml>`_

   


.. conda:package:: scelvis

   |downloads_scelvis| |docker_scelvis|

   :versions: 0.4.0-0, 0.3.0-0, 0.2.1-0, 0.2.0-0, 0.1.0-0
   
   :depends anndata: 
   :depends attrs: 
   :depends dash: <1.0
   :depends dash-bootstrap-components: 
   :depends dash-core-components: <1.0
   :depends dash-html-components: <1.0
   :depends dash-renderer: <1.0
   :depends dash-table: 3.7.*
   :depends flask: 
   :depends flask-caching: 
   :depends fs: 
   :depends fs.sshfs: 
   :depends logzero: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends python: >=3.6
   :depends python-irodsclient: 
   :depends ruamel_yaml: 
   :depends s3fs: 
   :depends scanpy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scelvis

   and update with::

      conda update scelvis

   or use the docker container::

      docker pull quay.io/biocontainers/scelvis:<tag>

   (see `scelvis/tags`_ for valid values for ``<tag>``)


.. |downloads_scelvis| image:: https://img.shields.io/conda/dn/bioconda/scelvis.svg?style=flat
   :target: https://anaconda.org/bioconda/scelvis
   :alt:   (downloads)
.. |docker_scelvis| image:: https://quay.io/repository/biocontainers/scelvis/status
   :target: https://quay.io/repository/biocontainers/scelvis
.. _`scelvis/tags`: https://quay.io/repository/biocontainers/scelvis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scelvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scelvis/README.html