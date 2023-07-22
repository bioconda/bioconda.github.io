:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'demultiplex'
.. highlight: bash

demultiplex
===========

.. conda:recipe:: demultiplex
   :replaces_section_title:
   :noindex:

   Demultiplex any number of FASTA or a FASTQ files based on a list of barcodes

   :homepage: https://github.com/jfjlaros/demultiplex
   :documentation: https://demultiplex.readthedocs.io/en/latest/index.html
   
   :license: MIT / MIT
   :recipe: /`demultiplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demultiplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demultiplex/meta.yaml>`_

   


.. conda:package:: demultiplex

   |downloads_demultiplex| |docker_demultiplex|

   :versions:
      
      

      ``1.2.2-0``

      

   
   :depends biopython: ``>=1.72``
   :depends dict-trie: ``>=1.0.1``
   :depends fastools: ``>=1.1.0``
   :depends jit-open: ``>=1.0.1``
   :depends python: ``>=3.6``
   :depends tssv: ``>=1.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install demultiplex

   and update with::

      conda update demultiplex

   or use the docker container::

      docker pull quay.io/biocontainers/demultiplex:<tag>

   (see `demultiplex/tags`_ for valid values for ``<tag>``)


.. |downloads_demultiplex| image:: https://img.shields.io/conda/dn/bioconda/demultiplex.svg?style=flat
   :target: https://anaconda.org/bioconda/demultiplex
   :alt:   (downloads)
.. |docker_demultiplex| image:: https://quay.io/repository/biocontainers/demultiplex/status
   :target: https://quay.io/repository/biocontainers/demultiplex
.. _`demultiplex/tags`: https://quay.io/repository/biocontainers/demultiplex?tab=tags


.. raw:: html

    <script>
        var package = "demultiplex";
        var versions = ["1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/demultiplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/demultiplex/README.html