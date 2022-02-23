:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwread'
.. highlight: bash

bwread
======

.. conda:recipe:: bwread
   :replaces_section_title:
   :noindex:

   Read bigwig files quickly into PyRanges or DataFrames

   :homepage: http://github.com/endrebak/bwread
   :license: MIT / MIT
   :recipe: /`bwread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwread/meta.yaml>`_

   


.. conda:package:: bwread

   |downloads_bwread| |docker_bwread|

   :versions:
      
      

      ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends pybigwig: 
   :depends pyranges: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bwread

   and update with::

      conda update bwread

   or use the docker container::

      docker pull quay.io/biocontainers/bwread:<tag>

   (see `bwread/tags`_ for valid values for ``<tag>``)


.. |downloads_bwread| image:: https://img.shields.io/conda/dn/bioconda/bwread.svg?style=flat
   :target: https://anaconda.org/bioconda/bwread
   :alt:   (downloads)
.. |docker_bwread| image:: https://quay.io/repository/biocontainers/bwread/status
   :target: https://quay.io/repository/biocontainers/bwread
.. _`bwread/tags`: https://quay.io/repository/biocontainers/bwread?tab=tags


.. raw:: html

    <script>
        var package = "bwread";
        var versions = ["0.0.4","0.0.4","0.0.3","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwread/README.html