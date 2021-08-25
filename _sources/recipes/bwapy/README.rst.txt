:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwapy'
.. highlight: bash

bwapy
=====

.. conda:recipe:: bwapy
   :replaces_section_title:
   :noindex:

   Bwapy provides python wrappers for bwa.

   :homepage: https://github.com/nanoporetech/bwapy
   :license: Mozilla Public License Version 2.0
   :recipe: /`bwapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwapy/meta.yaml>`_

   


.. conda:package:: bwapy

   |downloads_bwapy| |docker_bwapy|

   :versions:
      
      

      ``0.1.4-3``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``

      

   
   :depends cffi: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bwapy

   and update with::

      conda update bwapy

   or use the docker container::

      docker pull quay.io/biocontainers/bwapy:<tag>

   (see `bwapy/tags`_ for valid values for ``<tag>``)


.. |downloads_bwapy| image:: https://img.shields.io/conda/dn/bioconda/bwapy.svg?style=flat
   :target: https://anaconda.org/bioconda/bwapy
   :alt:   (downloads)
.. |docker_bwapy| image:: https://quay.io/repository/biocontainers/bwapy/status
   :target: https://quay.io/repository/biocontainers/bwapy
.. _`bwapy/tags`: https://quay.io/repository/biocontainers/bwapy?tab=tags


.. raw:: html

    <script>
        var package = "bwapy";
        var versions = ["0.1.4","0.1.4","0.1.4","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwapy/README.html