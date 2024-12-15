:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'localhgt'
.. highlight: bash

localhgt
========

.. conda:recipe:: localhgt
   :replaces_section_title:
   :noindex:

   An ultrafast horizontal gene transfer detection method from large microbial communities

   :homepage: https://github.com/deepomicslab/LocalHGT
   :license: MIT
   :recipe: /`localhgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/localhgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/localhgt/meta.yaml>`_
   :links: biotools: :biotools:`localhgt`

   


.. conda:package:: localhgt

   |downloads_localhgt| |docker_localhgt|

   :versions:
      
      

      ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends biopython: 
   :depends bwa: ``>=0.7.17``
   :depends fastp: ``>=0.23.2``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends networkx: ``>=2.6.3``
   :depends numpy: ``<=1.24``
   :depends pandas: 
   :depends pyfaidx: 
   :depends pysam: 
   :depends python: ``>=3.7.12``
   :depends samtools: ``>=1.11``
   :depends scikit-bio: ``>=0.5.6``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seqkit: ``>=2.6.1``
   :depends typing-extensions: ``>=4.11.0``
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

      mamba install localhgt

   and update with::

      mamba update localhgt

  To create a new environment, run::

      mamba create --name myenvname localhgt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/localhgt:<tag>

   (see `localhgt/tags`_ for valid values for ``<tag>``)


.. |downloads_localhgt| image:: https://img.shields.io/conda/dn/bioconda/localhgt.svg?style=flat
   :target: https://anaconda.org/bioconda/localhgt
   :alt:   (downloads)
.. |docker_localhgt| image:: https://quay.io/repository/biocontainers/localhgt/status
   :target: https://quay.io/repository/biocontainers/localhgt
.. _`localhgt/tags`: https://quay.io/repository/biocontainers/localhgt?tab=tags


.. raw:: html

    <script>
        var package = "localhgt";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/localhgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/localhgt/README.html