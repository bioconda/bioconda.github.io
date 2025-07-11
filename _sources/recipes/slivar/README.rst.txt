:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slivar'
.. highlight: bash

slivar
======

.. conda:recipe:: slivar
   :replaces_section_title:
   :noindex:

   filter\/annotate variants in VCF\/BCF format with simple expressions.

   :homepage: https://github.com/brentp/slivar
   :documentation: https://github.com/brentp/slivar/blob/v0.3.2/README.md
   
   :license: MIT / MIT
   :recipe: /`slivar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slivar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slivar/meta.yaml>`_
   :links: biotools: :biotools:`somalier`, doi: :doi:`10.1186/s13073-020-00761-2`

   


.. conda:package:: slivar

   |downloads_slivar| |docker_slivar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.2-0</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-2</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.9-0</code>,  <code>0.2.8-0</code>,  </span></summary>
      

      ``0.3.2-0``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.13-1``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
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

      mamba install slivar

   and update with::

      mamba update slivar

  To create a new environment, run::

      mamba create --name myenvname slivar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/slivar:<tag>

   (see `slivar/tags`_ for valid values for ``<tag>``)


.. |downloads_slivar| image:: https://img.shields.io/conda/dn/bioconda/slivar.svg?style=flat
   :target: https://anaconda.org/bioconda/slivar
   :alt:   (downloads)
.. |docker_slivar| image:: https://quay.io/repository/biocontainers/slivar/status
   :target: https://quay.io/repository/biocontainers/slivar
.. _`slivar/tags`: https://quay.io/repository/biocontainers/slivar?tab=tags


.. raw:: html

    <script>
        var package = "slivar";
        var versions = ["0.3.2","0.3.1","0.3.1","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slivar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slivar/README.html