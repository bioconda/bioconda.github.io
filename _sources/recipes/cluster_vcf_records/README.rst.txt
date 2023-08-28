:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cluster_vcf_records'
.. highlight: bash

cluster_vcf_records
===================

.. conda:recipe:: cluster_vcf_records
   :replaces_section_title:
   :noindex:

   Package to cluster VCF records. For use by gramtools and minos

   :homepage: https://github.com/iqbal-lab-org/cluster_vcf_records
   :license: MIT / MIT
   :recipe: /`cluster_vcf_records <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cluster_vcf_records>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cluster_vcf_records/meta.yaml>`_

   


.. conda:package:: cluster_vcf_records

   |downloads_cluster_vcf_records| |docker_cluster_vcf_records|

   :versions:
      
      

      ``0.13.3-0``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.4-1``,  ``0.12.4-0``

      

   
   :depends bitarray: 
   :depends pyfastaq: ``>=3.14.0``
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends vcflib: 
   :depends vt: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cluster_vcf_records

   and update with::

      mamba update cluster_vcf_records

  To create a new environment, run::

      mamba create --name myenvname cluster_vcf_records

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cluster_vcf_records:<tag>

   (see `cluster_vcf_records/tags`_ for valid values for ``<tag>``)


.. |downloads_cluster_vcf_records| image:: https://img.shields.io/conda/dn/bioconda/cluster_vcf_records.svg?style=flat
   :target: https://anaconda.org/bioconda/cluster_vcf_records
   :alt:   (downloads)
.. |docker_cluster_vcf_records| image:: https://quay.io/repository/biocontainers/cluster_vcf_records/status
   :target: https://quay.io/repository/biocontainers/cluster_vcf_records
.. _`cluster_vcf_records/tags`: https://quay.io/repository/biocontainers/cluster_vcf_records?tab=tags


.. raw:: html

    <script>
        var package = "cluster_vcf_records";
        var versions = ["0.13.3","0.13.2","0.13.1","0.13.0","0.12.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cluster_vcf_records/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cluster_vcf_records/README.html