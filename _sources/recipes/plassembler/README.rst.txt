:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plassembler'
.. highlight: bash

plassembler
===========

.. conda:recipe:: plassembler
   :replaces_section_title:
   :noindex:

   Automated Bacterial Plasmid Assembly Program

   :homepage: https://github.com/gbouras13/plassembler
   :documentation: https://plassembler.readthedocs.io
   
   :license: MIT
   :recipe: /`plassembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plassembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plassembler/meta.yaml>`_

   


.. conda:package:: plassembler

   |downloads_plassembler| |docker_plassembler|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends biopython: 
   :depends bwa: 
   :depends fastp: 
   :depends flye: ``>=2.9``
   :depends minimap2: 
   :depends nanofilt: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends seqkit: 
   :depends unicycler: ``>=0.4.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plassembler

   and update with::

      conda update plassembler

   or use the docker container::

      docker pull quay.io/biocontainers/plassembler:<tag>

   (see `plassembler/tags`_ for valid values for ``<tag>``)


.. |downloads_plassembler| image:: https://img.shields.io/conda/dn/bioconda/plassembler.svg?style=flat
   :target: https://anaconda.org/bioconda/plassembler
   :alt:   (downloads)
.. |docker_plassembler| image:: https://quay.io/repository/biocontainers/plassembler/status
   :target: https://quay.io/repository/biocontainers/plassembler
.. _`plassembler/tags`: https://quay.io/repository/biocontainers/plassembler?tab=tags


.. raw:: html

    <script>
        var package = "plassembler";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plassembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plassembler/README.html