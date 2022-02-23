:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bolt'
.. highlight: bash

bolt
====

.. conda:recipe:: bolt
   :replaces_section_title:
   :noindex:

   A variant caller for short\-read sequencing data

   :homepage: https://github.com/sakkayaphab/bolt
   :license: MIT / MIT
   :recipe: /`bolt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bolt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bolt/meta.yaml>`_

   


.. conda:package:: bolt

   |downloads_bolt| |docker_bolt|

   :versions:
      
      

      ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``

      

   
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends tbb: ``>=2020.2,<2021.0.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bolt

   and update with::

      conda update bolt

   or use the docker container::

      docker pull quay.io/biocontainers/bolt:<tag>

   (see `bolt/tags`_ for valid values for ``<tag>``)


.. |downloads_bolt| image:: https://img.shields.io/conda/dn/bioconda/bolt.svg?style=flat
   :target: https://anaconda.org/bioconda/bolt
   :alt:   (downloads)
.. |docker_bolt| image:: https://quay.io/repository/biocontainers/bolt/status
   :target: https://quay.io/repository/biocontainers/bolt
.. _`bolt/tags`: https://quay.io/repository/biocontainers/bolt?tab=tags


.. raw:: html

    <script>
        var package = "bolt";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bolt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bolt/README.html