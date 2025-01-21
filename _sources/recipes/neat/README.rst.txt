:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neat'
.. highlight: bash

neat
====

.. conda:recipe:: neat
   :replaces_section_title:
   :noindex:

   Toolset for generating synthethic FASTQ\, VCF and BAM files.

   :homepage: https://github.com/ncsa/NEAT/
   :license: BSD / BSD-3-Clause
   :recipe: /`neat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neat/meta.yaml>`_

   


.. conda:package:: neat

   |downloads_neat| |docker_neat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.8-0</code>,  <code>4.2.7-0</code>,  <code>4.2.6-0</code>,  <code>4.2.5-0</code>,  <code>4.2.4-0</code>,  <code>4.2.3-0</code>,  <code>4.2.2-0</code>,  <code>4.2.1-0</code>,  <code>4.1.2-0</code>,  </span></summary>
      

      ``4.2.8-0``,  ``4.2.7-0``,  ``4.2.6-0``,  ``4.2.5-0``,  ``4.2.4-0``,  ``4.2.3-0``,  ``4.2.2-0``,  ``4.2.1-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends biopython: ``1.79.*``
   :depends frozendict: 
   :depends htslib: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pkginfo: 
   :depends pybedtools: ``>=0.9.0``
   :depends pysam: 
   :depends python: ``>=3.10``
   :depends pyyaml: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install neat

   and update with::

      mamba update neat

  To create a new environment, run::

      mamba create --name myenvname neat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/neat:<tag>

   (see `neat/tags`_ for valid values for ``<tag>``)


.. |downloads_neat| image:: https://img.shields.io/conda/dn/bioconda/neat.svg?style=flat
   :target: https://anaconda.org/bioconda/neat
   :alt:   (downloads)
.. |docker_neat| image:: https://quay.io/repository/biocontainers/neat/status
   :target: https://quay.io/repository/biocontainers/neat
.. _`neat/tags`: https://quay.io/repository/biocontainers/neat?tab=tags


.. raw:: html

    <script>
        var package = "neat";
        var versions = ["4.2.8","4.2.7","4.2.6","4.2.5","4.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neat/README.html