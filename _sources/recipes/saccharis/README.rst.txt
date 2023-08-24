:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'saccharis'
.. highlight: bash

saccharis
=========

.. conda:recipe:: saccharis
   :replaces_section_title:
   :noindex:

   A CAZyme discovery tool.

   :homepage: https://github.com/saccharis/SACCHARIS_2
   :license: GPL v3
   :recipe: /`saccharis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saccharis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/saccharis/meta.yaml>`_

   Bioinformatics pipeline to automate phylogenetic analysis of CAZyme families in FASTA sequences


.. conda:package:: saccharis

   |downloads_saccharis| |docker_saccharis|

   :versions:
      
      

      ``2.0.0.dev19-0``,  ``2.0.0.dev18-0``

      

   
   :depends beautifulsoup4: ``>=4.11.1``
   :depends biopython: ``>=1.79``
   :depends dbcan: ``>=3.0.6,<4``
   :depends diamond: ``>=2.0.15``
   :depends fasttree: ``>=2.1.11``
   :depends hmmer: ``>=3.3``
   :depends lxml: ``>=4.9.0``
   :depends modeltest-ng: ``>=0.1.7``
   :depends muscle: ``>=3.8``
   :depends ncbi-datasets-pylib: ``>=14.*``
   :depends psutil: 
   :depends pyqt: ``>=5,<6``
   :depends pyqt5-sip: ``>=12.11``
   :depends python: ``>=3.8``
   :depends python-dotenv: ``>=0.20.0``
   :depends python-wget: ``>=3.2``
   :depends raxml: ``>=8.2.12``
   :depends requests: ``>=2.28.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install saccharis

   and update with::

      conda update saccharis

   or use the docker container::

      docker pull quay.io/biocontainers/saccharis:<tag>

   (see `saccharis/tags`_ for valid values for ``<tag>``)


.. |downloads_saccharis| image:: https://img.shields.io/conda/dn/bioconda/saccharis.svg?style=flat
   :target: https://anaconda.org/bioconda/saccharis
   :alt:   (downloads)
.. |docker_saccharis| image:: https://quay.io/repository/biocontainers/saccharis/status
   :target: https://quay.io/repository/biocontainers/saccharis
.. _`saccharis/tags`: https://quay.io/repository/biocontainers/saccharis?tab=tags


.. raw:: html

    <script>
        var package = "saccharis";
        var versions = ["2.0.0.dev19","2.0.0.dev18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/saccharis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/saccharis/README.html