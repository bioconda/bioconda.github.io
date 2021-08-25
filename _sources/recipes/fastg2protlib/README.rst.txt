:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastg2protlib'
.. highlight: bash

fastg2protlib
=============

.. conda:recipe:: fastg2protlib
   :replaces_section_title:
   :noindex:

   FASTG sequences to a protein library.

   :homepage: https://github.com/galaxyproteomics/fastg2protlib
   :license: MIT
   :recipe: /`fastg2protlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastg2protlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastg2protlib/meta.yaml>`_

   


.. conda:package:: fastg2protlib

   |downloads_fastg2protlib| |docker_fastg2protlib|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends biopython: 
   :depends lxml: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pyteomics: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastg2protlib

   and update with::

      conda update fastg2protlib

   or use the docker container::

      docker pull quay.io/biocontainers/fastg2protlib:<tag>

   (see `fastg2protlib/tags`_ for valid values for ``<tag>``)


.. |downloads_fastg2protlib| image:: https://img.shields.io/conda/dn/bioconda/fastg2protlib.svg?style=flat
   :target: https://anaconda.org/bioconda/fastg2protlib
   :alt:   (downloads)
.. |docker_fastg2protlib| image:: https://quay.io/repository/biocontainers/fastg2protlib/status
   :target: https://quay.io/repository/biocontainers/fastg2protlib
.. _`fastg2protlib/tags`: https://quay.io/repository/biocontainers/fastg2protlib?tab=tags


.. raw:: html

    <script>
        var package = "fastg2protlib";
        var versions = ["1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastg2protlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastg2protlib/README.html