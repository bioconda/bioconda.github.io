:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaclock'
.. highlight: bash

metaclock
=========

.. conda:recipe:: metaclock
   :replaces_section_title:
   :noindex:

   A python package for facilitating strain\-level phylogenetic and molecular clock analysis

   :homepage: https://github.com/SegataLab/metaclock
   :license: A-GPL 3.0
   :recipe: /`metaclock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaclock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaclock/meta.yaml>`_

   


.. conda:package:: metaclock

   |downloads_metaclock| |docker_metaclock|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends blast: ``>=2.6.0``
   :depends bowtie2: 
   :depends bzip2: 
   :depends cmseq: 
   :depends dendropy: 
   :depends ete3: 
   :depends mapdamage2: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends perl-bioperl: 
   :depends prokka: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends raxml: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends seaborn: 
   :depends trimal: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaclock

   and update with::

      conda update metaclock

   or use the docker container::

      docker pull quay.io/biocontainers/metaclock:<tag>

   (see `metaclock/tags`_ for valid values for ``<tag>``)


.. |downloads_metaclock| image:: https://img.shields.io/conda/dn/bioconda/metaclock.svg?style=flat
   :target: https://anaconda.org/bioconda/metaclock
   :alt:   (downloads)
.. |docker_metaclock| image:: https://quay.io/repository/biocontainers/metaclock/status
   :target: https://quay.io/repository/biocontainers/metaclock
.. _`metaclock/tags`: https://quay.io/repository/biocontainers/metaclock?tab=tags


.. raw:: html

    <script>
        var package = "metaclock";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaclock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaclock/README.html