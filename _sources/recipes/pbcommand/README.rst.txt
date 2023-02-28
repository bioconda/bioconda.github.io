:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbcommand'
.. highlight: bash

pbcommand
=========

.. conda:recipe:: pbcommand
   :replaces_section_title:
   :noindex:

   Library for generating the CLI of various PacBio tools

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbcommand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcommand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcommand/meta.yaml>`_

   


.. conda:package:: pbcommand

   |downloads_pbcommand| |docker_pbcommand|

   :versions:
      
      

      ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``0.3.29-0``,  ``0.2.17-0``

      

   
   :depends avro-python3: 
   :depends iso8601: 
   :depends numpy: ``>=1.17``
   :depends python: ``>=3.7,<3.8``
   :depends pytz: 
   :depends requests: 
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbcommand

   and update with::

      conda update pbcommand

   or use the docker container::

      docker pull quay.io/biocontainers/pbcommand:<tag>

   (see `pbcommand/tags`_ for valid values for ``<tag>``)


.. |downloads_pbcommand| image:: https://img.shields.io/conda/dn/bioconda/pbcommand.svg?style=flat
   :target: https://anaconda.org/bioconda/pbcommand
   :alt:   (downloads)
.. |docker_pbcommand| image:: https://quay.io/repository/biocontainers/pbcommand/status
   :target: https://quay.io/repository/biocontainers/pbcommand
.. _`pbcommand/tags`: https://quay.io/repository/biocontainers/pbcommand?tab=tags


.. raw:: html

    <script>
        var package = "pbcommand";
        var versions = ["2.1.1","2.1.1","2.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbcommand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbcommand/README.html