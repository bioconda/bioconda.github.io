:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bacgwasim'
.. highlight: bash

bacgwasim
=========

.. conda:recipe:: bacgwasim
   :replaces_section_title:
   :noindex:

   BacGWASim is a simulator for Bacterial Machine learning and Genome\-wide Association studies.


   :homepage: https://github.com/Morteza-M-Saber/BacGWASim
   :license: MIT
   :recipe: /`bacgwasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bacgwasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bacgwasim/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bth457`

   


.. conda:package:: bacgwasim

   |downloads_bacgwasim| |docker_bacgwasim|

   :versions:
      
      

      ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends bcftools: ``1.10.2``
   :depends dendropy: 
   :depends gcta: 
   :depends matplotlib-base: ``>=3.4``
   :depends numpy: 
   :depends pandas: 
   :depends plink: 
   :depends python: ``>=3``
   :depends pyvcf: 
   :depends scipy: 
   :depends simbac: 
   :depends snakemake: 
   :depends snp-sites: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bacgwasim

   and update with::

      mamba update bacgwasim

  To create a new environment, run::

      mamba create --name myenvname bacgwasim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bacgwasim:<tag>

   (see `bacgwasim/tags`_ for valid values for ``<tag>``)


.. |downloads_bacgwasim| image:: https://img.shields.io/conda/dn/bioconda/bacgwasim.svg?style=flat
   :target: https://anaconda.org/bioconda/bacgwasim
   :alt:   (downloads)
.. |docker_bacgwasim| image:: https://quay.io/repository/biocontainers/bacgwasim/status
   :target: https://quay.io/repository/biocontainers/bacgwasim
.. _`bacgwasim/tags`: https://quay.io/repository/biocontainers/bacgwasim?tab=tags


.. raw:: html

    <script>
        var package = "bacgwasim";
        var versions = ["2.1.1","2.1.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bacgwasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bacgwasim/README.html