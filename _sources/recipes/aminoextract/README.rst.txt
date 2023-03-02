:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aminoextract'
.. highlight: bash

aminoextract
============

.. conda:recipe:: aminoextract
   :replaces_section_title:
   :noindex:

   AminoExtract is an application to extract aminoacid sequences from a fasta file based on a GFF.

   :homepage: https://pypi.org/project/AminoExtract/
   :developer docs: https://github.com/RIVM-bioinformatics/AminoExtract
   :license: MIT
   :recipe: /`aminoextract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aminoextract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aminoextract/meta.yaml>`_

   


.. conda:package:: aminoextract

   |downloads_aminoextract| |docker_aminoextract|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends biopython: ``>=1.79``
   :depends pandas: 
   :depends python: ``>=3.10``
   :depends python-magic: ``0.4.*``
   :depends rich: ``13.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aminoextract

   and update with::

      conda update aminoextract

   or use the docker container::

      docker pull quay.io/biocontainers/aminoextract:<tag>

   (see `aminoextract/tags`_ for valid values for ``<tag>``)


.. |downloads_aminoextract| image:: https://img.shields.io/conda/dn/bioconda/aminoextract.svg?style=flat
   :target: https://anaconda.org/bioconda/aminoextract
   :alt:   (downloads)
.. |docker_aminoextract| image:: https://quay.io/repository/biocontainers/aminoextract/status
   :target: https://quay.io/repository/biocontainers/aminoextract
.. _`aminoextract/tags`: https://quay.io/repository/biocontainers/aminoextract?tab=tags


.. raw:: html

    <script>
        var package = "aminoextract";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aminoextract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aminoextract/README.html