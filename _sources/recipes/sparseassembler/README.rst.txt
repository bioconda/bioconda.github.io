:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sparseassembler'
.. highlight: bash

sparseassembler
===============

.. conda:recipe:: sparseassembler
   :replaces_section_title:
   :noindex:

   A sparse k\-mer graph based\, memory\-efficient genome assembler

   :homepage: https://github.com/yechengxi/SparseAssembler
   :license: GPL / GPL-3.0
   :recipe: /`sparseassembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparseassembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparseassembler/meta.yaml>`_

   


.. conda:package:: sparseassembler

   |downloads_sparseassembler| |docker_sparseassembler|

   :versions:
      
      

      ``20160205-6``,  ``20160205-5``,  ``20160205-4``,  ``20160205-3``,  ``20160205-2``,  ``20160205-1``,  ``20160205-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sparseassembler

   and update with::

      conda update sparseassembler

   or use the docker container::

      docker pull quay.io/biocontainers/sparseassembler:<tag>

   (see `sparseassembler/tags`_ for valid values for ``<tag>``)


.. |downloads_sparseassembler| image:: https://img.shields.io/conda/dn/bioconda/sparseassembler.svg?style=flat
   :target: https://anaconda.org/bioconda/sparseassembler
   :alt:   (downloads)
.. |docker_sparseassembler| image:: https://quay.io/repository/biocontainers/sparseassembler/status
   :target: https://quay.io/repository/biocontainers/sparseassembler
.. _`sparseassembler/tags`: https://quay.io/repository/biocontainers/sparseassembler?tab=tags


.. raw:: html

    <script>
        var package = "sparseassembler";
        var versions = ["20160205","20160205","20160205","20160205","20160205"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sparseassembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sparseassembler/README.html