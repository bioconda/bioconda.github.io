:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'naf'
.. highlight: bash

naf
===

.. conda:recipe:: naf
   :replaces_section_title:
   :noindex:

   Compressed binary file format for DNA\/RNA\/protein sequence data

   :homepage: https://github.com/KirillKryukov/naf
   :license: zlib
   :recipe: /`naf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/naf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/naf/meta.yaml>`_

   


.. conda:package:: naf

   |downloads_naf| |docker_naf|

   :versions:
      
      

      ``1.3.0-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends zstd: ``>=1.4.9,<1.5.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install naf

   and update with::

      conda update naf

   or use the docker container::

      docker pull quay.io/biocontainers/naf:<tag>

   (see `naf/tags`_ for valid values for ``<tag>``)


.. |downloads_naf| image:: https://img.shields.io/conda/dn/bioconda/naf.svg?style=flat
   :target: https://anaconda.org/bioconda/naf
   :alt:   (downloads)
.. |docker_naf| image:: https://quay.io/repository/biocontainers/naf/status
   :target: https://quay.io/repository/biocontainers/naf
.. _`naf/tags`: https://quay.io/repository/biocontainers/naf?tab=tags


.. raw:: html

    <script>
        var package = "naf";
        var versions = ["1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/naf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/naf/README.html