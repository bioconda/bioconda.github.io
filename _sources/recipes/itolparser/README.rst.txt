:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'itolparser'
.. highlight: bash

itolparser
==========

.. conda:recipe:: itolparser
   :replaces_section_title:
   :noindex:

   Small script to produce iTOL colorstrip metadata files from a table

   :homepage: https://github.com/boasvdp/itolparser
   :license: MIT / MIT
   :recipe: /`itolparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itolparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itolparser/meta.yaml>`_

   


.. conda:package:: itolparser

   |downloads_itolparser| |docker_itolparser|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.3-0``

      

   
   :depends colorbrewer: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install itolparser

   and update with::

      conda update itolparser

   or use the docker container::

      docker pull quay.io/biocontainers/itolparser:<tag>

   (see `itolparser/tags`_ for valid values for ``<tag>``)


.. |downloads_itolparser| image:: https://img.shields.io/conda/dn/bioconda/itolparser.svg?style=flat
   :target: https://anaconda.org/bioconda/itolparser
   :alt:   (downloads)
.. |docker_itolparser| image:: https://quay.io/repository/biocontainers/itolparser/status
   :target: https://quay.io/repository/biocontainers/itolparser
.. _`itolparser/tags`: https://quay.io/repository/biocontainers/itolparser?tab=tags


.. raw:: html

    <script>
        var package = "itolparser";
        var versions = ["0.1.6","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itolparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itolparser/README.html