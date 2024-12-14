:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'akt'
.. highlight: bash

akt
===

.. conda:recipe:: akt
   :replaces_section_title:
   :noindex:

   Ancestry and Kinship Tools \(AKT\)

   :homepage: https://github.com/Illumina/akt
   :license: GPL3
   :recipe: /`akt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/akt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/akt/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw576`

   Ancestry and Kinship Tools \(AKT\) provides a handful of useful statistical genetics routines using the htslib API for input\/output. This means it can seamlessly read BCF\/VCF files and play nicely with bcftools.


.. conda:package:: akt

   |downloads_akt| |docker_akt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.3-6</code>,  <code>0.3.3-5</code>,  <code>0.3.3-4</code>,  <code>0.3.3-3</code>,  <code>0.3.3-2</code>,  <code>0.3.3-1</code>,  <code>0.3.3-0</code>,  <code>0.3.2-4</code>,  <code>0.3.2-3</code>,  </span></summary>
      

      ``0.3.3-6``,  ``0.3.3-5``,  ``0.3.3-4``,  ``0.3.3-3``,  ``0.3.3-2``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-4``,  ``0.3.2-3``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install akt

   and update with::

      mamba update akt

  To create a new environment, run::

      mamba create --name myenvname akt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/akt:<tag>

   (see `akt/tags`_ for valid values for ``<tag>``)


.. |downloads_akt| image:: https://img.shields.io/conda/dn/bioconda/akt.svg?style=flat
   :target: https://anaconda.org/bioconda/akt
   :alt:   (downloads)
.. |docker_akt| image:: https://quay.io/repository/biocontainers/akt/status
   :target: https://quay.io/repository/biocontainers/akt
.. _`akt/tags`: https://quay.io/repository/biocontainers/akt?tab=tags


.. raw:: html

    <script>
        var package = "akt";
        var versions = ["0.3.3","0.3.3","0.3.3","0.3.3","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/akt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/akt/README.html