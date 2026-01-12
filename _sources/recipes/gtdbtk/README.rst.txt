:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gtdbtk'
.. highlight: bash

gtdbtk
======

.. conda:recipe:: gtdbtk
   :replaces_section_title:
   :noindex:

   A toolkit for assigning objective taxonomic classifications to bacterial and archaeal genomes.

   :homepage: https://github.com/Ecogenomics/GTDBTk
   :documentation: https://ecogenomics.github.io/GTDBTk
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`gtdbtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtdbtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtdbtk/meta.yaml>`_
   :links: biotools: :biotools:`GTDB-Tk`, usegalaxy-eu: :usegalaxy-eu:`gtdbtk_classify_wf`, doi: :doi:`10.1093/bioinformatics/btz848`

   


.. conda:package:: gtdbtk

   |downloads_gtdbtk| |docker_gtdbtk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.1-1</code>,  <code>2.6.1-0</code>,  <code>2.6.0-0</code>,  <code>2.5.2-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-1</code>,  <code>2.5.0-0</code>,  <code>2.4.1-1</code>,  <code>2.4.1-0</code>,  </span></summary>
      

      ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.2-0``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.6-1``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-1``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.0-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-5``,  ``2.1.0-4``,  ``2.1.0-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.3.3-0``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends dendropy: ``>=4.1.0``
   :depends fastani: ``>=1.32``
   :depends fasttree: ``>=2.1.9``
   :depends hmmer: ``3.*``
   :depends numpy: ``>=1.9.0``
   :depends pplacer: ``1.1.alpha19.*``
   :depends prodigal: ``>=2.6.2``
   :depends pydantic: ``>=1.9.2,<2``
   :depends python: ``>=3.6``
   :depends skani: ``>=0.3.0``
   :depends tqdm: ``>=4.35.0``
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

      mamba install gtdbtk

   and update with::

      mamba update gtdbtk

  To create a new environment, run::

      mamba create --name myenvname gtdbtk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gtdbtk:<tag>

   (see `gtdbtk/tags`_ for valid values for ``<tag>``)


.. |downloads_gtdbtk| image:: https://img.shields.io/conda/dn/bioconda/gtdbtk.svg?style=flat
   :target: https://anaconda.org/bioconda/gtdbtk
   :alt:   (downloads)
.. |docker_gtdbtk| image:: https://quay.io/repository/biocontainers/gtdbtk/status
   :target: https://quay.io/repository/biocontainers/gtdbtk
.. _`gtdbtk/tags`: https://quay.io/repository/biocontainers/gtdbtk?tab=tags


.. raw:: html

    <script>
        var package = "gtdbtk";
        var versions = ["2.6.1","2.6.1","2.6.0","2.5.2","2.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtdbtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtdbtk/README.html