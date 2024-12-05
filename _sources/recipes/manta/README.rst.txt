:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'manta'
.. highlight: bash

manta
=====

.. conda:recipe:: manta
   :replaces_section_title:
   :noindex:

   Structural variant and indel caller for mapped sequencing data

   :homepage: https://github.com/Illumina/manta
   :license: GPL-3.0-only
   :recipe: /`manta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/manta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/manta/meta.yaml>`_
   :links: biotools: :biotools:`Manta9235`

   


.. conda:package:: manta

   |downloads_manta| |docker_manta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-4</code>,  <code>1.6.0-3</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.3.2-0</code>,  </span></summary>
      

      ``1.6.0-4``,  ``1.6.0-3``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.0-0``,  ``0.29.6-0``,  ``0.29.3-0``,  ``0.29.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
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

      mamba install manta

   and update with::

      mamba update manta

  To create a new environment, run::

      mamba create --name myenvname manta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/manta:<tag>

   (see `manta/tags`_ for valid values for ``<tag>``)


.. |downloads_manta| image:: https://img.shields.io/conda/dn/bioconda/manta.svg?style=flat
   :target: https://anaconda.org/bioconda/manta
   :alt:   (downloads)
.. |docker_manta| image:: https://quay.io/repository/biocontainers/manta/status
   :target: https://quay.io/repository/biocontainers/manta
.. _`manta/tags`: https://quay.io/repository/biocontainers/manta?tab=tags


.. raw:: html

    <script>
        var package = "manta";
        var versions = ["1.6.0","1.6.0","1.6.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/manta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/manta/README.html