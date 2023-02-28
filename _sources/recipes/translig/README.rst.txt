:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'translig'
.. highlight: bash

translig
========

.. conda:recipe:: translig
   :replaces_section_title:
   :noindex:

   A de novo transcriptome assembler that uses line graph iteration

   :homepage: https://sourceforge.net/projects/transcriptomeassembly/
   :license: GPL3
   :recipe: /`translig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/translig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/translig/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-019-1690-7`

   


.. conda:package:: translig

   |downloads_translig| |docker_translig|

   :versions:
      
      

      ``1.3-0``

      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install translig

   and update with::

      conda update translig

   or use the docker container::

      docker pull quay.io/biocontainers/translig:<tag>

   (see `translig/tags`_ for valid values for ``<tag>``)


.. |downloads_translig| image:: https://img.shields.io/conda/dn/bioconda/translig.svg?style=flat
   :target: https://anaconda.org/bioconda/translig
   :alt:   (downloads)
.. |docker_translig| image:: https://quay.io/repository/biocontainers/translig/status
   :target: https://quay.io/repository/biocontainers/translig
.. _`translig/tags`: https://quay.io/repository/biocontainers/translig?tab=tags


.. raw:: html

    <script>
        var package = "translig";
        var versions = ["1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/translig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/translig/README.html