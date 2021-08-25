:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fasta-splitter'
.. highlight: bash

fasta-splitter
==============

.. conda:recipe:: fasta-splitter
   :replaces_section_title:
   :noindex:

   Divides a large FASTA file into a set of smaller\, approximately equally sized files

   :homepage: http://kirill-kryukov.com/study/tools/fasta-splitter/
   :license: zlib/libpng
   :recipe: /`fasta-splitter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta-splitter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta-splitter/meta.yaml>`_

   


.. conda:package:: fasta-splitter

   |downloads_fasta-splitter| |docker_fasta-splitter|

   :versions:
      
      

      ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.4-1``,  ``0.2.4-0``

      

   
   :depends perl: 
   :depends perl-file-util: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fasta-splitter

   and update with::

      conda update fasta-splitter

   or use the docker container::

      docker pull quay.io/biocontainers/fasta-splitter:<tag>

   (see `fasta-splitter/tags`_ for valid values for ``<tag>``)


.. |downloads_fasta-splitter| image:: https://img.shields.io/conda/dn/bioconda/fasta-splitter.svg?style=flat
   :target: https://anaconda.org/bioconda/fasta-splitter
   :alt:   (downloads)
.. |docker_fasta-splitter| image:: https://quay.io/repository/biocontainers/fasta-splitter/status
   :target: https://quay.io/repository/biocontainers/fasta-splitter
.. _`fasta-splitter/tags`: https://quay.io/repository/biocontainers/fasta-splitter?tab=tags


.. raw:: html

    <script>
        var package = "fasta-splitter";
        var versions = ["0.2.6","0.2.6","0.2.4","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fasta-splitter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fasta-splitter/README.html