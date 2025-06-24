:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dadaist2'
.. highlight: bash

dadaist2
========

.. conda:recipe:: dadaist2
   :replaces_section_title:
   :noindex:

   Command line wrapper to run DADA2 on a set of paired\-end reads

   :homepage: https://quadram-institute-bioscience.github.io/dadaist2
   :developer docs: https://github.com/quadram-institute-bioscience/dadaist2
   :license: MIT
   :recipe: /`dadaist2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadaist2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadaist2/meta.yaml>`_
   :links: biotools: :biotools:`dadaist2`, doi: :doi:`10.3390/ijms22105309`

   Command line wrapper to run DADA2 on a set of paired\-end reads with several exporting tools to generate plots and numerical ecology analyses


.. conda:package:: dadaist2

   |downloads_dadaist2| |docker_dadaist2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.0-1</code>,  </span></summary>
      

      ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.7-1``,  ``0.7.7-0``,  ``0.7.5-0``,  ``0.7.3-2``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.4.00-2``,  ``0.4.00-1``,  ``0.4.00-0``,  ``0.2.00-0``,  ``0.1.04-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dada2: ``>=1.34.0``
   :depends bioconductor-decipher: 
   :depends bioconductor-microbiome: 
   :depends bioconductor-phyloseq: 
   :depends biom-format: ``2.1.10.*``
   :depends click: 
   :depends clustalo: 
   :depends cutadapt: ``>=3.4``
   :depends fastp: 
   :depends fasttree: 
   :depends iqtree: 
   :depends mafft: 
   :depends matplotlib-base: 
   :depends pandas: ``>=1.0``
   :depends perl: 
   :depends perl-fastx-reader: ``>=0.90``
   :depends python: ``>=3.7``
   :depends r-matrix: ``>=1.4``
   :depends rich: 
   :depends scikit-learn: 
   :depends seaborn: 
   :depends seqfu: 
   :depends usearch: 
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

      mamba install dadaist2

   and update with::

      mamba update dadaist2

  To create a new environment, run::

      mamba create --name myenvname dadaist2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dadaist2:<tag>

   (see `dadaist2/tags`_ for valid values for ``<tag>``)


.. |downloads_dadaist2| image:: https://img.shields.io/conda/dn/bioconda/dadaist2.svg?style=flat
   :target: https://anaconda.org/bioconda/dadaist2
   :alt:   (downloads)
.. |docker_dadaist2| image:: https://quay.io/repository/biocontainers/dadaist2/status
   :target: https://quay.io/repository/biocontainers/dadaist2
.. _`dadaist2/tags`: https://quay.io/repository/biocontainers/dadaist2?tab=tags


.. raw:: html

    <script>
        var package = "dadaist2";
        var versions = ["1.3.1","1.3.1","1.3.0","1.2.5","1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dadaist2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dadaist2/README.html