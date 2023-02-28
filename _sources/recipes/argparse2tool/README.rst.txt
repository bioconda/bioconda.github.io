:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'argparse2tool'
.. highlight: bash

argparse2tool
=============

.. conda:recipe:: argparse2tool
   :replaces_section_title:
   :noindex:

   Instrument for forming Galaxy XML and CWL tool descriptions from argparse arguments

   :homepage: https://github.com/erasche/argparse2tool
   :license: Apache / Apache-2.0
   :recipe: /`argparse2tool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argparse2tool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argparse2tool/meta.yaml>`_

   


.. conda:package:: argparse2tool

   |downloads_argparse2tool| |docker_argparse2tool|

   :versions:
      
      

      ``0.4.9-0``

      

   
   :depends click: 
   :depends galaxyxml: ``>=0.2.3``
   :depends jinja2: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install argparse2tool

   and update with::

      conda update argparse2tool

   or use the docker container::

      docker pull quay.io/biocontainers/argparse2tool:<tag>

   (see `argparse2tool/tags`_ for valid values for ``<tag>``)


.. |downloads_argparse2tool| image:: https://img.shields.io/conda/dn/bioconda/argparse2tool.svg?style=flat
   :target: https://anaconda.org/bioconda/argparse2tool
   :alt:   (downloads)
.. |docker_argparse2tool| image:: https://quay.io/repository/biocontainers/argparse2tool/status
   :target: https://quay.io/repository/biocontainers/argparse2tool
.. _`argparse2tool/tags`: https://quay.io/repository/biocontainers/argparse2tool?tab=tags


.. raw:: html

    <script>
        var package = "argparse2tool";
        var versions = ["0.4.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/argparse2tool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/argparse2tool/README.html