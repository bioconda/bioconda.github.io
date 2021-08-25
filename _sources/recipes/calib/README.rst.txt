:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'calib'
.. highlight: bash

calib
=====

.. conda:recipe:: calib
   :replaces_section_title:
   :noindex:

   Clustering without alignment using \(locality sensitive hashing\) LSH and MinHashing of barcoded reads

   :homepage: https://github.com/vpc-ccg/calib
   :license: MIT
   :recipe: /`calib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calib/meta.yaml>`_

   


.. conda:package:: calib

   |downloads_calib| |docker_calib|

   :versions:
      
      

      ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install calib

   and update with::

      conda update calib

   or use the docker container::

      docker pull quay.io/biocontainers/calib:<tag>

   (see `calib/tags`_ for valid values for ``<tag>``)


.. |downloads_calib| image:: https://img.shields.io/conda/dn/bioconda/calib.svg?style=flat
   :target: https://anaconda.org/bioconda/calib
   :alt:   (downloads)
.. |docker_calib| image:: https://quay.io/repository/biocontainers/calib/status
   :target: https://quay.io/repository/biocontainers/calib
.. _`calib/tags`: https://quay.io/repository/biocontainers/calib?tab=tags


.. raw:: html

    <script>
        var package = "calib";
        var versions = ["0.3.4","0.3.4","0.3.3","0.3.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/calib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/calib/README.html