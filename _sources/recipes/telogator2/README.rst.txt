:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'telogator2'
.. highlight: bash

telogator2
==========

.. conda:recipe:: telogator2
   :replaces_section_title:
   :noindex:

   Analyze allele\-specific telomere length from PacBio and Nanopore reads

   :homepage: https://github.com/zstephens/telogator2
   :documentation: https://github.com/zstephens/telogator2/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`telogator2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telogator2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telogator2/meta.yaml>`_

   Telogator2 is a bioinformatics tool for analyzing telomeres from long\-read sequencing data.
   It measures allele\-specific telomere length and characterizes telomere variant repeat \(TVR\)
   sequences from PacBio HiFi and Oxford Nanopore sequencing platforms. The tool supports
   human and non\-human reference genomes and provides detailed output including TSV results
   and visualization plots.



.. conda:package:: telogator2

   |downloads_telogator2| |docker_telogator2|

   :versions:
      
      

      ``2.2.2-0``

      

   
   :depends biopython: ``>=1.86``
   :depends matplotlib-base: ``>=3.3.4``
   :depends minimap2: 
   :depends numpy: ``>=1.19.0``
   :depends pysam: ``>=0.16.0,<=0.22.0``
   :depends python: ``>=3.10``
   :depends pywavelets: ``>=1.1.1``
   :depends scipy: ``>=1.6.0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install telogator2

   and update with::

      mamba update telogator2

  To create a new environment, run::

      mamba create --name myenvname telogator2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/telogator2:<tag>

   (see `telogator2/tags`_ for valid values for ``<tag>``)


.. |downloads_telogator2| image:: https://img.shields.io/conda/dn/bioconda/telogator2.svg?style=flat
   :target: https://anaconda.org/bioconda/telogator2
   :alt:   (downloads)
.. |docker_telogator2| image:: https://quay.io/repository/biocontainers/telogator2/status
   :target: https://quay.io/repository/biocontainers/telogator2
.. _`telogator2/tags`: https://quay.io/repository/biocontainers/telogator2?tab=tags


.. raw:: html

    <script>
        var package = "telogator2";
        var versions = ["2.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/telogator2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/telogator2/README.html