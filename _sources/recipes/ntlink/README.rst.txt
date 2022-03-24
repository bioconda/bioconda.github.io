:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntlink'
.. highlight: bash

ntlink
======

.. conda:recipe:: ntlink
   :replaces_section_title:
   :noindex:

   Genome assembly scaffolder using long reads and minimizers

   :homepage: https://github.com/bcgsc/ntLink
   :license: GPL-3.0
   :recipe: /`ntlink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntlink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntlink/meta.yaml>`_

   


.. conda:package:: ntlink

   |downloads_ntlink| |docker_ntlink|

   :versions:
      
      

      ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends abyss: ``>=2.3.0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends make: 
   :depends numpy: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python-igraph: 
   :depends python_abi: ``3.6.* *_cp36m``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ntlink

   and update with::

      conda update ntlink

   or use the docker container::

      docker pull quay.io/biocontainers/ntlink:<tag>

   (see `ntlink/tags`_ for valid values for ``<tag>``)


.. |downloads_ntlink| image:: https://img.shields.io/conda/dn/bioconda/ntlink.svg?style=flat
   :target: https://anaconda.org/bioconda/ntlink
   :alt:   (downloads)
.. |docker_ntlink| image:: https://quay.io/repository/biocontainers/ntlink/status
   :target: https://quay.io/repository/biocontainers/ntlink
.. _`ntlink/tags`: https://quay.io/repository/biocontainers/ntlink?tab=tags


.. raw:: html

    <script>
        var package = "ntlink";
        var versions = ["1.1.3","1.1.2","1.1.2","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntlink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntlink/README.html