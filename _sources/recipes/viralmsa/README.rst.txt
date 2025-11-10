:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viralmsa'
.. highlight: bash

viralmsa
========

.. conda:recipe:: viralmsa
   :replaces_section_title:
   :noindex:

   Reference\-guided multiple sequence alignment of viral genomes

   :homepage: https://github.com/niemasd/ViralMSA
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`viralmsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralmsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralmsa/meta.yaml>`_
   :links: biotools: :biotools:`viralmsa`, doi: :doi:`10.1093/bioinformatics/btaa743`

   


.. conda:package:: viralmsa

   |downloads_viralmsa| |docker_viralmsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.46-0</code>,  <code>1.1.45-1</code>,  <code>1.1.45-0</code>,  <code>1.1.44-1</code>,  <code>1.1.44-0</code>,  <code>1.1.43-0</code>,  <code>1.1.42-0</code>,  <code>1.1.41-0</code>,  <code>1.1.40-0</code>,  </span></summary>
      

      ``1.1.46-0``,  ``1.1.45-1``,  ``1.1.45-0``,  ``1.1.44-1``,  ``1.1.44-0``,  ``1.1.43-0``,  ``1.1.42-0``,  ``1.1.41-0``,  ``1.1.40-0``,  ``1.1.39-0``,  ``1.1.38-0``,  ``1.1.36-0``,  ``1.1.35-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends bowtie2: 
   :depends dragmap: 
   :depends hisat2: 
   :depends lra: 
   :depends minimap2: 
   :depends ngmlr: 
   :depends python: ``>=3.7``
   :depends star: 
   :depends unimap: 
   :depends wfmash: 
   :depends winnowmap: 
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

      mamba install viralmsa

   and update with::

      mamba update viralmsa

  To create a new environment, run::

      mamba create --name myenvname viralmsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/viralmsa:<tag>

   (see `viralmsa/tags`_ for valid values for ``<tag>``)


.. |downloads_viralmsa| image:: https://img.shields.io/conda/dn/bioconda/viralmsa.svg?style=flat
   :target: https://anaconda.org/bioconda/viralmsa
   :alt:   (downloads)
.. |docker_viralmsa| image:: https://quay.io/repository/biocontainers/viralmsa/status
   :target: https://quay.io/repository/biocontainers/viralmsa
.. _`viralmsa/tags`: https://quay.io/repository/biocontainers/viralmsa?tab=tags


.. raw:: html

    <script>
        var package = "viralmsa";
        var versions = ["1.1.46","1.1.45","1.1.45","1.1.44","1.1.44"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viralmsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viralmsa/README.html