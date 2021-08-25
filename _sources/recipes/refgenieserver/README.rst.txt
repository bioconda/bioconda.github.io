:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'refgenieserver'
.. highlight: bash

refgenieserver
==============

.. conda:recipe:: refgenieserver
   :replaces_section_title:
   :noindex:

   This server provides both a web interface and a RESTful API. Users may explore and download archived indexes from the web interface or develop tools that programmatically query the API.

   :homepage: https://refgenie.databio.org/
   :license: BSD / BSD-2-Clause
   :recipe: /`refgenieserver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenieserver>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/refgenieserver/meta.yaml>`_

   


.. conda:package:: refgenieserver

   |downloads_refgenieserver| |docker_refgenieserver|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.4-0``

      

   
   :depends aiofiles: 
   :depends fastapi: 
   :depends jinja2: 
   :depends logmuse: ``>=0.2``
   :depends python: ``>=3.6``
   :depends refgenconf: ``>=0.10.0``
   :depends ubiquerg: ``>=0.6.1``
   :depends uvicorn: ``>=0.7.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install refgenieserver

   and update with::

      conda update refgenieserver

   or use the docker container::

      docker pull quay.io/biocontainers/refgenieserver:<tag>

   (see `refgenieserver/tags`_ for valid values for ``<tag>``)


.. |downloads_refgenieserver| image:: https://img.shields.io/conda/dn/bioconda/refgenieserver.svg?style=flat
   :target: https://anaconda.org/bioconda/refgenieserver
   :alt:   (downloads)
.. |docker_refgenieserver| image:: https://quay.io/repository/biocontainers/refgenieserver/status
   :target: https://quay.io/repository/biocontainers/refgenieserver
.. _`refgenieserver/tags`: https://quay.io/repository/biocontainers/refgenieserver?tab=tags


.. raw:: html

    <script>
        var package = "refgenieserver";
        var versions = ["0.6.0","0.5.1","0.5.0","0.4.4","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/refgenieserver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/refgenieserver/README.html