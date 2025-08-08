:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dinopy'
.. highlight: bash

dinopy
======

.. conda:recipe:: dinopy
   :replaces_section_title:
   :noindex:

   DNA input and output library for Python and Cython. Includes reader and writer for FASTA and FASTQ files\, support for samtools faidx files\, and generators for solid and gapped q\-grams \(k\-mers\).

   :homepage: https://bitbucket.org/HenningTimm/dinopy
   :documentation: https://dinopy.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`dinopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinopy/meta.yaml>`_

   


.. conda:package:: dinopy

   |downloads_dinopy| |docker_dinopy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-2</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.2.1-5</code>,  <code>2.2.1-3</code>,  <code>2.2.1-2</code>,  <code>2.2.1-0</code>,  <code>2.2.0-3</code>,  <code>2.2.0-2</code>,  </span></summary>
      

      ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.2.1-5``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-0``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends numpy: ``1.26.4.*``
   :depends numpy: ``>=1.26.4,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install dinopy

   and update with::

      mamba update dinopy

  To create a new environment, run::

      mamba create --name myenvname dinopy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dinopy:<tag>

   (see `dinopy/tags`_ for valid values for ``<tag>``)


.. |downloads_dinopy| image:: https://img.shields.io/conda/dn/bioconda/dinopy.svg?style=flat
   :target: https://anaconda.org/bioconda/dinopy
   :alt:   (downloads)
.. |docker_dinopy| image:: https://quay.io/repository/biocontainers/dinopy/status
   :target: https://quay.io/repository/biocontainers/dinopy
.. _`dinopy/tags`: https://quay.io/repository/biocontainers/dinopy?tab=tags


.. raw:: html

    <script>
        var package = "dinopy";
        var versions = ["3.0.0","3.0.0","3.0.0","2.2.1","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dinopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dinopy/README.html