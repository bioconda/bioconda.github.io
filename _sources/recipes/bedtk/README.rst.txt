:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bedtk'
.. highlight: bash

bedtk
=====

.. conda:recipe:: bedtk
   :replaces_section_title:
   :noindex:

   Bedtk is a set of simple tools to process BED files.

   :homepage: https://github.com/lh3/bedtk
   :license: MIT / MIT
   :recipe: /`bedtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedtk/meta.yaml>`_
   :links: biotools: :biotools:`bedtk`

   Bedtk is a set of simple tools to process BED files. It so far implements intersection\, subtraction\, sorting\, merging and computing the breadth of coverage. Bedtk is not as versatile as bedtools and never aims to match the bedtools feature set. It instead focuses on performance. Bedtk is several to tens of times faster and uses a fraction of memory. It also provides a few convenient functions. For example\, sorting\, merging and intersection can be done in one go without Unix pipes.



.. conda:package:: bedtk

   |downloads_bedtk| |docker_bedtk|

   :versions:
      
      

      ``1.2-0``,  ``1.1-0``,  ``0.0.r25.dirty-6``,  ``0.0.r25.dirty-5``,  ``0.0.r25.dirty-4``,  ``0.0.r25.dirty-3``,  ``0.0.r25.dirty-2``,  ``0.0.r25.dirty-1``,  ``0.0.r25.dirty-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install bedtk

   and update with::

      mamba update bedtk

  To create a new environment, run::

      mamba create --name myenvname bedtk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bedtk:<tag>

   (see `bedtk/tags`_ for valid values for ``<tag>``)


.. |downloads_bedtk| image:: https://img.shields.io/conda/dn/bioconda/bedtk.svg?style=flat
   :target: https://anaconda.org/bioconda/bedtk
   :alt:   (downloads)
.. |docker_bedtk| image:: https://quay.io/repository/biocontainers/bedtk/status
   :target: https://quay.io/repository/biocontainers/bedtk
.. _`bedtk/tags`: https://quay.io/repository/biocontainers/bedtk?tab=tags


.. raw:: html

    <script>
        var package = "bedtk";
        var versions = ["1.2","1.1","0.0.r25.dirty","0.0.r25.dirty","0.0.r25.dirty"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bedtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bedtk/README.html