:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqtk'
.. highlight: bash

seqtk
=====

.. conda:recipe:: seqtk
   :replaces_section_title:
   :noindex:

   Seqtk is a fast and lightweight tool for processing sequences in the FASTA or FASTQ format

   :homepage: https://github.com/lh3/seqtk
   :license: MIT
   :recipe: /`seqtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqtk/meta.yaml>`_
   :links: biotools: :biotools:`seqtk`

   


.. conda:package:: seqtk

   |downloads_seqtk| |docker_seqtk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4-3</code>,  <code>1.4-2</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  <code>1.3-6</code>,  <code>1.3-5</code>,  <code>1.3-4</code>,  <code>1.3-3</code>,  <code>1.3-2</code>,  </span></summary>
      

      ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3-6``,  ``1.3-5``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-1``,  ``1.2-0``,  ``r93-0``,  ``r82-1``,  ``r82-0``,  ``r75-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install seqtk

   and update with::

      mamba update seqtk

  To create a new environment, run::

      mamba create --name myenvname seqtk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqtk:<tag>

   (see `seqtk/tags`_ for valid values for ``<tag>``)


.. |downloads_seqtk| image:: https://img.shields.io/conda/dn/bioconda/seqtk.svg?style=flat
   :target: https://anaconda.org/bioconda/seqtk
   :alt:   (downloads)
.. |docker_seqtk| image:: https://quay.io/repository/biocontainers/seqtk/status
   :target: https://quay.io/repository/biocontainers/seqtk
.. _`seqtk/tags`: https://quay.io/repository/biocontainers/seqtk?tab=tags


.. raw:: html

    <script>
        var package = "seqtk";
        var versions = ["1.4","1.4","1.4","1.4","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqtk/README.html