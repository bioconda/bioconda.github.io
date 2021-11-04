:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'elastic-blast'
.. highlight: bash

elastic-blast
=============

.. conda:recipe:: elastic-blast
   :replaces_section_title:
   :noindex:

   ElasticBLAST is a cloud\-based tool to perform your BLAST searches faster and make you more effective.

   :homepage: https://pypi.org/project/elastic-blast/
   :developer docs: https://github.com/ncbi/elastic-blast/
   :license: PUBLIC-DOMAIN / Public Domain
   :recipe: /`elastic-blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elastic-blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elastic-blast/meta.yaml>`_

   


.. conda:package:: elastic-blast

   |downloads_elastic-blast| |docker_elastic-blast|

   :versions:
      
      

      ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends awscli: 
   :depends awslimitchecker: 
   :depends boto3: 
   :depends dataclasses-json: 
   :depends google-cloud-sdk: 
   :depends importlib-metadata: 
   :depends kubernetes-client: ``1.18.8``
   :depends python: ``>=3.7``
   :depends tenacity: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install elastic-blast

   and update with::

      conda update elastic-blast

   or use the docker container::

      docker pull quay.io/biocontainers/elastic-blast:<tag>

   (see `elastic-blast/tags`_ for valid values for ``<tag>``)


.. |downloads_elastic-blast| image:: https://img.shields.io/conda/dn/bioconda/elastic-blast.svg?style=flat
   :target: https://anaconda.org/bioconda/elastic-blast
   :alt:   (downloads)
.. |docker_elastic-blast| image:: https://quay.io/repository/biocontainers/elastic-blast/status
   :target: https://quay.io/repository/biocontainers/elastic-blast
.. _`elastic-blast/tags`: https://quay.io/repository/biocontainers/elastic-blast?tab=tags


.. raw:: html

    <script>
        var package = "elastic-blast";
        var versions = ["0.1.10","0.1.9","0.1.8","0.1.7","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/elastic-blast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/elastic-blast/README.html