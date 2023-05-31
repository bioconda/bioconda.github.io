:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svtk'
.. highlight: bash

svtk
====

.. conda:recipe:: svtk
   :replaces_section_title:
   :noindex:

   Utilities for consolidating\, filtering\, resolving\, and annotating structural variants.

   :homepage: https://github.com/talkowski-lab/svtk
   :license: MIT / MIT
   :recipe: /`svtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtk/meta.yaml>`_

   


.. conda:package:: svtk

   |downloads_svtk| |docker_svtk|

   :versions:
      
      

      ``0.0.20190615-4``,  ``0.0.20190615-3``,  ``0.0.20190615-2``,  ``0.0.20190615-1``,  ``0.0.20190615-0``

      

   
   :depends boto3: 
   :depends libgcc-ng: ``>=12``
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: ``>=0.11.2.2``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svtk

   and update with::

      conda update svtk

   or use the docker container::

      docker pull quay.io/biocontainers/svtk:<tag>

   (see `svtk/tags`_ for valid values for ``<tag>``)


.. |downloads_svtk| image:: https://img.shields.io/conda/dn/bioconda/svtk.svg?style=flat
   :target: https://anaconda.org/bioconda/svtk
   :alt:   (downloads)
.. |docker_svtk| image:: https://quay.io/repository/biocontainers/svtk/status
   :target: https://quay.io/repository/biocontainers/svtk
.. _`svtk/tags`: https://quay.io/repository/biocontainers/svtk?tab=tags


.. raw:: html

    <script>
        var package = "svtk";
        var versions = ["0.0.20190615","0.0.20190615","0.0.20190615","0.0.20190615","0.0.20190615"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svtk/README.html