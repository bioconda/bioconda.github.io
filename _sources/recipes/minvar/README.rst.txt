:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minvar'
.. highlight: bash

minvar
======

.. conda:recipe:: minvar
   :replaces_section_title:
   :noindex:

   A tool to detect minority variants in HIV\-1 and HCV populations

   :homepage: https://git.io/minvar
   :license: Custom
   :recipe: /`minvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minvar/meta.yaml>`_

   


.. conda:package:: minvar

   |downloads_minvar| |docker_minvar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.2-1</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-1</code>,  <code>2.1.2-0</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  </span></summary>
      

      ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1.3-0``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1-1``,  ``2.1-0``,  ``2.0-1``,  ``2.0-0``,  ``1.2b-1``,  ``1.2b-0``,  ``1.2a3-1``,  ``1.2a3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends biopython: 
   :depends blast: ``>=2.3``
   :depends bwa: 
   :depends emboss: 
   :depends htslib: 
   :depends lofreq: ``>=2.1.3.1``
   :depends pandas: 
   :depends pandoc: 
   :depends python: ``>=3``
   :depends samtools: ``>=1.3``
   :depends seqtk: 
   :depends setuptools_scm_git_archive: 
   :depends sierrapy: 
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

      mamba install minvar

   and update with::

      mamba update minvar

  To create a new environment, run::

      mamba create --name myenvname minvar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minvar:<tag>

   (see `minvar/tags`_ for valid values for ``<tag>``)


.. |downloads_minvar| image:: https://img.shields.io/conda/dn/bioconda/minvar.svg?style=flat
   :target: https://anaconda.org/bioconda/minvar
   :alt:   (downloads)
.. |docker_minvar| image:: https://quay.io/repository/biocontainers/minvar/status
   :target: https://quay.io/repository/biocontainers/minvar
.. _`minvar/tags`: https://quay.io/repository/biocontainers/minvar?tab=tags


.. raw:: html

    <script>
        var package = "minvar";
        var versions = ["2.2.2","2.2.2","2.2.1","2.2","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minvar/README.html