:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'checkm-genome'
.. highlight: bash

checkm-genome
=============

.. conda:recipe:: checkm-genome
   :replaces_section_title:
   :noindex:

   Assess the quality of microbial genomes recovered from isolates\, single cells\, and metagenomes.

   :homepage: https://ecogenomics.github.io/CheckM/
   :license: GPL3
   :recipe: /`checkm-genome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkm-genome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkm-genome/meta.yaml>`_

   


.. conda:package:: checkm-genome

   |downloads_checkm-genome| |docker_checkm-genome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.2-1</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.11-0</code>,  <code>1.1.10-0</code>,  <code>1.1.9-0</code>,  <code>1.1.8-0</code>,  <code>1.1.3-1</code>,  </span></summary>
      

      ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.11-0``,  ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.18-0``,  ``1.0.17-0``,  ``1.0.16-0``,  ``1.0.13-1``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.7-0``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends dendropy: ``>=4.4.0``
   :depends hmmer: ``>=3.1b1``
   :depends matplotlib-base: ``>=2.1.0``
   :depends numpy: ``>=1.13.1``
   :depends pplacer: ``1.1.alpha19``
   :depends prodigal: ``>=2.6.1``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.6``
   :depends scipy: ``>=0.19.1``
   :depends wget: 
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

      mamba install checkm-genome

   and update with::

      mamba update checkm-genome

  To create a new environment, run::

      mamba create --name myenvname checkm-genome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/checkm-genome:<tag>

   (see `checkm-genome/tags`_ for valid values for ``<tag>``)


.. |downloads_checkm-genome| image:: https://img.shields.io/conda/dn/bioconda/checkm-genome.svg?style=flat
   :target: https://anaconda.org/bioconda/checkm-genome
   :alt:   (downloads)
.. |docker_checkm-genome| image:: https://quay.io/repository/biocontainers/checkm-genome/status
   :target: https://quay.io/repository/biocontainers/checkm-genome
.. _`checkm-genome/tags`: https://quay.io/repository/biocontainers/checkm-genome?tab=tags


.. raw:: html

    <script>
        var package = "checkm-genome";
        var versions = ["1.2.2","1.2.2","1.2.1","1.2.0","1.1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/checkm-genome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/checkm-genome/README.html