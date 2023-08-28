:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virmet'
.. highlight: bash

virmet
======

.. conda:recipe:: virmet
   :replaces_section_title:
   :noindex:

   A pipeline for viral metagenomics

   :homepage: http://virmet.readthedocs.io
   :developer docs: https://github.com/ozagordi/VirMet
   :license: MIT / MIT
   :recipe: /`virmet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virmet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virmet/meta.yaml>`_

   


.. conda:package:: virmet

   |downloads_virmet| |docker_virmet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-0</code>,  <code>v1.1.1-5</code>,  <code>v1.1.1-4</code>,  <code>v1.1.1-3</code>,  <code>v1.1.1-2</code>,  <code>v1.1.1-1</code>,  <code>v1.1.1-0</code>,  <code>v1.1-2</code>,  <code>v1.1-1</code>,  </span></summary>
      

      ``1.1.1-0``,  ``v1.1.1-5``,  ``v1.1.1-4``,  ``v1.1.1-3``,  ``v1.1.1-2``,  ``v1.1.1-1``,  ``v1.1.1-0``,  ``v1.1-2``,  ``v1.1-1``,  ``v1.1-0``,  ``v1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends blast: ``>=2.3``
   :depends bwa: 
   :depends entrez-direct: 
   :depends htslib: 
   :depends pandas: 
   :depends prinseq: 
   :depends python: ``>=3``
   :depends r-ggplot2: 
   :depends samtools: ``>=1.3``
   :depends seqtk: 
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

      mamba install virmet

   and update with::

      mamba update virmet

  To create a new environment, run::

      mamba create --name myenvname virmet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/virmet:<tag>

   (see `virmet/tags`_ for valid values for ``<tag>``)


.. |downloads_virmet| image:: https://img.shields.io/conda/dn/bioconda/virmet.svg?style=flat
   :target: https://anaconda.org/bioconda/virmet
   :alt:   (downloads)
.. |docker_virmet| image:: https://quay.io/repository/biocontainers/virmet/status
   :target: https://quay.io/repository/biocontainers/virmet
.. _`virmet/tags`: https://quay.io/repository/biocontainers/virmet?tab=tags


.. raw:: html

    <script>
        var package = "virmet";
        var versions = ["1.1.1","v1.1.1","v1.1.1","v1.1.1","v1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virmet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virmet/README.html