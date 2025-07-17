:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isorefiner'
.. highlight: bash

isorefiner
==========

.. conda:recipe:: isorefiner
   :replaces_section_title:
   :noindex:

   A refinement tool to identify exon\-intron structures of transcript \(RNA\) isoforms using long reads

   :homepage: https://github.com/rkajitani/IsoRefiner
   :license: MIT / MIT
   :recipe: /`isorefiner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isorefiner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isorefiner/meta.yaml>`_

   


.. conda:package:: isorefiner

   |downloads_isorefiner| |docker_isorefiner|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends bedtools: ``>=2.31.0``
   :depends bioconductor-bambu: ``>=3.4.0``
   :depends espresso: ``>=1.3.2``
   :depends gffcompare: ``>=0.12.6``
   :depends gffread: ``>=0.12.7``
   :depends gmap: ``>=2023.07.20``
   :depends isoquant: ``>=3.3.1``
   :depends perl: ``>=5.22.0.1``
   :depends polars: ``>=0.19.18``
   :depends porechop_abi: ``>=0.5.0``
   :depends pysam: 
   :depends python: 
   :depends r-biocmanager: 
   :depends r-xgboost: ``<=1.7.6``
   :depends rnabloom: ``>=2.0.1``
   :depends samtools: ``>=1.17``
   :depends seqkit: ``>=2.4.0``
   :depends stringtie: ``>=2.2.1``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install isorefiner

   and update with::

      mamba update isorefiner

  To create a new environment, run::

      mamba create --name myenvname isorefiner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isorefiner:<tag>

   (see `isorefiner/tags`_ for valid values for ``<tag>``)


.. |downloads_isorefiner| image:: https://img.shields.io/conda/dn/bioconda/isorefiner.svg?style=flat
   :target: https://anaconda.org/bioconda/isorefiner
   :alt:   (downloads)
.. |docker_isorefiner| image:: https://quay.io/repository/biocontainers/isorefiner/status
   :target: https://quay.io/repository/biocontainers/isorefiner
.. _`isorefiner/tags`: https://quay.io/repository/biocontainers/isorefiner?tab=tags


.. raw:: html

    <script>
        var package = "isorefiner";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isorefiner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isorefiner/README.html