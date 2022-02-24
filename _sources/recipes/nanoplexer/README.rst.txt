:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoplexer'
.. highlight: bash

nanoplexer
==========

.. conda:recipe:: nanoplexer
   :replaces_section_title:
   :noindex:

   Tool for demultiplexing Nanopore barcode sequence data

   :homepage: https://github.com/hanyue36/nanoplexer
   :license: MIT
   :recipe: /`nanoplexer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplexer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoplexer/meta.yaml>`_

   


.. conda:package:: nanoplexer

   |downloads_nanoplexer| |docker_nanoplexer|

   :versions:
      
      

      ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoplexer

   and update with::

      conda update nanoplexer

   or use the docker container::

      docker pull quay.io/biocontainers/nanoplexer:<tag>

   (see `nanoplexer/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoplexer| image:: https://img.shields.io/conda/dn/bioconda/nanoplexer.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoplexer
   :alt:   (downloads)
.. |docker_nanoplexer| image:: https://quay.io/repository/biocontainers/nanoplexer/status
   :target: https://quay.io/repository/biocontainers/nanoplexer
.. _`nanoplexer/tags`: https://quay.io/repository/biocontainers/nanoplexer?tab=tags


.. raw:: html

    <script>
        var package = "nanoplexer";
        var versions = ["0.1.2","0.1.2","0.1.2","0.1.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoplexer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoplexer/README.html