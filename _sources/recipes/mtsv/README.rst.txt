:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtsv'
.. highlight: bash

mtsv
====

.. conda:recipe:: mtsv
   :replaces_section_title:
   :noindex:

   MTSv is a suite of metagenomic binning and analysis tools.

   :homepage: https://github.com/FofanovLab/MTSv
   :license: MIT / MIT
   :recipe: /`mtsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtsv/meta.yaml>`_

   


.. conda:package:: mtsv

   |downloads_mtsv| |docker_mtsv|

   :versions:
      
      

      ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends biopython: 
   :depends bwa: 
   :depends click: 
   :depends concoct: 
   :depends ete3: 
   :depends gsl: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends megahit: 
   :depends mtsv-tools: 
   :depends numpy: 
   :depends pandas: ``>=0.20.3``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends pyyaml: 
   :depends samtools: 
   :depends scipy: 
   :depends six: 
   :depends snakemake: ``>=4.1.0``
   :depends wgfast: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install mtsv

   and update with::

      mamba update mtsv

  To create a new environment, run::

      mamba create --name myenvname mtsv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mtsv:<tag>

   (see `mtsv/tags`_ for valid values for ``<tag>``)


.. |downloads_mtsv| image:: https://img.shields.io/conda/dn/bioconda/mtsv.svg?style=flat
   :target: https://anaconda.org/bioconda/mtsv
   :alt:   (downloads)
.. |docker_mtsv| image:: https://quay.io/repository/biocontainers/mtsv/status
   :target: https://quay.io/repository/biocontainers/mtsv
.. _`mtsv/tags`: https://quay.io/repository/biocontainers/mtsv?tab=tags


.. raw:: html

    <script>
        var package = "mtsv";
        var versions = ["1.0.6","1.0.6","1.0.6","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtsv/README.html