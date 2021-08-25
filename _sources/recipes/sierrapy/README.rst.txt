:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sierrapy'
.. highlight: bash

sierrapy
========

.. conda:recipe:: sierrapy
   :replaces_section_title:
   :noindex:

   A Client of HIVdb Sierra GraphQL Webservice.

   :homepage: https://github.com/hivdb/sierra-client/tree/master/python
   :license: MIT / MIT License
   :recipe: /`sierrapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sierrapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sierrapy/meta.yaml>`_

   


.. conda:package:: sierrapy

   |downloads_sierrapy| |docker_sierrapy|

   :versions:
      
      

      ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends click: ``>=6.7``
   :depends gql: ``>=0.1.0,<2.0a0``
   :depends graphql-core: ``>=0.5.3,<2.0a0``
   :depends promise: ``>=0.4.2``
   :depends python: 
   :depends requests: ``>=2.11.1``
   :depends six: ``>=1.10.0``
   :depends tqdm: ``>=4.8.4``
   :depends voluptuous: ``>=0.10.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sierrapy

   and update with::

      conda update sierrapy

   or use the docker container::

      docker pull quay.io/biocontainers/sierrapy:<tag>

   (see `sierrapy/tags`_ for valid values for ``<tag>``)


.. |downloads_sierrapy| image:: https://img.shields.io/conda/dn/bioconda/sierrapy.svg?style=flat
   :target: https://anaconda.org/bioconda/sierrapy
   :alt:   (downloads)
.. |docker_sierrapy| image:: https://quay.io/repository/biocontainers/sierrapy/status
   :target: https://quay.io/repository/biocontainers/sierrapy
.. _`sierrapy/tags`: https://quay.io/repository/biocontainers/sierrapy?tab=tags


.. raw:: html

    <script>
        var package = "sierrapy";
        var versions = ["0.2.1","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sierrapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sierrapy/README.html