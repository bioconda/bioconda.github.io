:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tiddit'
.. highlight: bash

tiddit
======

.. conda:recipe:: tiddit
   :replaces_section_title:
   :noindex:

   TIDDIT \- structural variant calling.

   :homepage: https://github.com/SciLifeLab/TIDDIT
   :documentation: https://github.com/SciLifeLab/TIDDIT/blob/TIDDIT-3.9.0/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`tiddit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiddit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiddit/meta.yaml>`_

   


.. conda:package:: tiddit

   |downloads_tiddit| |docker_tiddit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.9.0-0</code>,  <code>3.7.0-0</code>,  <code>3.6.1-2</code>,  <code>3.6.1-1</code>,  <code>3.6.1-0</code>,  <code>3.6.0-1</code>,  <code>3.6.0-0</code>,  <code>3.4.0-0</code>,  <code>3.3.2-0</code>,  </span></summary>
      

      ``3.9.0-0``,  ``3.7.0-0``,  ``3.6.1-2``,  ``3.6.1-1``,  ``3.6.1-0``,  ``3.6.0-1``,  ``3.6.0-0``,  ``3.4.0-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.1-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.12.1-0``,  ``2.12.0-4``,  ``2.12.0-3``,  ``2.12.0-2``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.8.1-2``,  ``2.8.1-1``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.7.1-1``,  ``2.7.1-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: 
   :depends fermi2: 
   :depends joblib: 
   :depends libgcc: ``>=13``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pysam: ``>=0.22.1,<0.23.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends ropebwt2: 
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

      mamba install tiddit

   and update with::

      mamba update tiddit

  To create a new environment, run::

      mamba create --name myenvname tiddit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tiddit:<tag>

   (see `tiddit/tags`_ for valid values for ``<tag>``)


.. |downloads_tiddit| image:: https://img.shields.io/conda/dn/bioconda/tiddit.svg?style=flat
   :target: https://anaconda.org/bioconda/tiddit
   :alt:   (downloads)
.. |docker_tiddit| image:: https://quay.io/repository/biocontainers/tiddit/status
   :target: https://quay.io/repository/biocontainers/tiddit
.. _`tiddit/tags`: https://quay.io/repository/biocontainers/tiddit?tab=tags


.. raw:: html

    <script>
        var package = "tiddit";
        var versions = ["3.9.0","3.7.0","3.6.1","3.6.1","3.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tiddit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tiddit/README.html