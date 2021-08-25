:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dfast_qc'
.. highlight: bash

dfast_qc
========

.. conda:recipe:: dfast_qc
   :replaces_section_title:
   :noindex:

   DFAST\_QC\: Taxonomy and completeness check for prokaryotic genomes

   :homepage: https://dfast.nig.ac.jp
   :developer docs: https://github.com/nigyta/dfast_qc
   :license: GPLv3
   :recipe: /`dfast_qc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfast_qc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dfast_qc/meta.yaml>`_

   


.. conda:package:: dfast_qc

   |downloads_dfast_qc| |docker_dfast_qc|

   :versions:
      
      

      ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-1``,  ``0.2.5-0``

      

   
   :depends biopython: ``>=1.7``
   :depends blast: 
   :depends checkm-genome: 
   :depends ete3: 
   :depends fastani: 
   :depends hmmer: 
   :depends more-itertools: 
   :depends peewee: 
   :depends prodigal: 
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dfast_qc

   and update with::

      conda update dfast_qc

   or use the docker container::

      docker pull quay.io/biocontainers/dfast_qc:<tag>

   (see `dfast_qc/tags`_ for valid values for ``<tag>``)


.. |downloads_dfast_qc| image:: https://img.shields.io/conda/dn/bioconda/dfast_qc.svg?style=flat
   :target: https://anaconda.org/bioconda/dfast_qc
   :alt:   (downloads)
.. |docker_dfast_qc| image:: https://quay.io/repository/biocontainers/dfast_qc/status
   :target: https://quay.io/repository/biocontainers/dfast_qc
.. _`dfast_qc/tags`: https://quay.io/repository/biocontainers/dfast_qc?tab=tags


.. raw:: html

    <script>
        var package = "dfast_qc";
        var versions = ["0.2.9","0.2.8","0.2.7","0.2.6","0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dfast_qc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dfast_qc/README.html