:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'exomiser-rest-prioritiser'
.. highlight: bash

exomiser-rest-prioritiser
=========================

.. conda:recipe:: exomiser-rest-prioritiser
   :replaces_section_title:
   :noindex:

   Exomiser prioritiser REST API

   :homepage: https://github.com/exomiser/Exomiser
   :license: AGPL3
   :recipe: /`exomiser-rest-prioritiser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/exomiser-rest-prioritiser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/exomiser-rest-prioritiser/meta.yaml>`_

   


.. conda:package:: exomiser-rest-prioritiser

   |downloads_exomiser-rest-prioritiser| |docker_exomiser-rest-prioritiser|

   :versions:
      
      

      ``12.1.0-2``,  ``12.1.0-1``,  ``12.1.0-0``

      

   
   :depends openjdk: ``>=8``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install exomiser-rest-prioritiser

   and update with::

      conda update exomiser-rest-prioritiser

   or use the docker container::

      docker pull quay.io/biocontainers/exomiser-rest-prioritiser:<tag>

   (see `exomiser-rest-prioritiser/tags`_ for valid values for ``<tag>``)


.. |downloads_exomiser-rest-prioritiser| image:: https://img.shields.io/conda/dn/bioconda/exomiser-rest-prioritiser.svg?style=flat
   :target: https://anaconda.org/bioconda/exomiser-rest-prioritiser
   :alt:   (downloads)
.. |docker_exomiser-rest-prioritiser| image:: https://quay.io/repository/biocontainers/exomiser-rest-prioritiser/status
   :target: https://quay.io/repository/biocontainers/exomiser-rest-prioritiser
.. _`exomiser-rest-prioritiser/tags`: https://quay.io/repository/biocontainers/exomiser-rest-prioritiser?tab=tags


.. raw:: html

    <script>
        var package = "exomiser-rest-prioritiser";
        var versions = ["12.1.0","12.1.0","12.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/exomiser-rest-prioritiser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/exomiser-rest-prioritiser/README.html