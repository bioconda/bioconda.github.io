:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'avro-python2'
.. highlight: bash

avro-python2
============

.. conda:recipe:: avro-python2
   :replaces_section_title:
   :noindex:

   Avro is a serialization and RPC framework.

   :homepage: http://avro.apache.org/
   :license: Apache License 2.0
   :recipe: /`avro-python2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-python2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-python2/meta.yaml>`_

   


.. conda:package:: avro-python2

   |downloads_avro-python2| |docker_avro-python2|

   :versions:
      
      

      ``1.9.0-0``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.1-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install avro-python2

   and update with::

      conda update avro-python2

   or use the docker container::

      docker pull quay.io/biocontainers/avro-python2:<tag>

   (see `avro-python2/tags`_ for valid values for ``<tag>``)


.. |downloads_avro-python2| image:: https://img.shields.io/conda/dn/bioconda/avro-python2.svg?style=flat
   :target: https://anaconda.org/bioconda/avro-python2
   :alt:   (downloads)
.. |docker_avro-python2| image:: https://quay.io/repository/biocontainers/avro-python2/status
   :target: https://quay.io/repository/biocontainers/avro-python2
.. _`avro-python2/tags`: https://quay.io/repository/biocontainers/avro-python2?tab=tags


.. raw:: html

    <script>
        var package = "avro-python2";
        var versions = ["1.9.0","1.8.2","1.8.2","1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/avro-python2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/avro-python2/README.html