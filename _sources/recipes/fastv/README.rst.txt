:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastv'
.. highlight: bash

fastv
=====

.. conda:recipe:: fastv
   :replaces_section_title:
   :noindex:

   An ultra\-fast tool for identification of SARS\-CoV\-2 and other microbes from sequencing data.

   :homepage: https://github.com/OpenGene/fastv
   :license: MIT / MIT
   :recipe: /`fastv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastv/meta.yaml>`_

   


.. conda:package:: fastv

   |downloads_fastv| |docker_fastv|

   :versions:
      
      

      ``0.8.1-1``,  ``0.8.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastv

   and update with::

      conda update fastv

   or use the docker container::

      docker pull quay.io/biocontainers/fastv:<tag>

   (see `fastv/tags`_ for valid values for ``<tag>``)


.. |downloads_fastv| image:: https://img.shields.io/conda/dn/bioconda/fastv.svg?style=flat
   :target: https://anaconda.org/bioconda/fastv
   :alt:   (downloads)
.. |docker_fastv| image:: https://quay.io/repository/biocontainers/fastv/status
   :target: https://quay.io/repository/biocontainers/fastv
.. _`fastv/tags`: https://quay.io/repository/biocontainers/fastv?tab=tags


.. raw:: html

    <script>
        var package = "fastv";
        var versions = ["0.8.1","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastv/README.html