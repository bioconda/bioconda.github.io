:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cvlr'
.. highlight: bash

cvlr
====

.. conda:recipe:: cvlr
   :replaces_section_title:
   :noindex:

   Clustering and Visualization of Long Reads

   :homepage: https://github.com/EmanueleRaineri/releases/
   :license: MIT / MIT
   :recipe: /`cvlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cvlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cvlr/meta.yaml>`_

   


.. conda:package:: cvlr

   |downloads_cvlr| |docker_cvlr|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libdeflate: ``>=1.18,<1.19.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends openssl: ``>=3.1.0,<4.0a0``
   :depends python: ``>=3``
   :depends xz: ``>=5.2.6,<6.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cvlr

   and update with::

      conda update cvlr

   or use the docker container::

      docker pull quay.io/biocontainers/cvlr:<tag>

   (see `cvlr/tags`_ for valid values for ``<tag>``)


.. |downloads_cvlr| image:: https://img.shields.io/conda/dn/bioconda/cvlr.svg?style=flat
   :target: https://anaconda.org/bioconda/cvlr
   :alt:   (downloads)
.. |docker_cvlr| image:: https://quay.io/repository/biocontainers/cvlr/status
   :target: https://quay.io/repository/biocontainers/cvlr
.. _`cvlr/tags`: https://quay.io/repository/biocontainers/cvlr?tab=tags


.. raw:: html

    <script>
        var package = "cvlr";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cvlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cvlr/README.html