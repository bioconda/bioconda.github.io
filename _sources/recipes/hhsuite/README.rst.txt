:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hhsuite'
.. highlight: bash

hhsuite
=======

.. conda:recipe:: hhsuite
   :replaces_section_title:
   :noindex:

   HH\-suite3 for fast remote homology detection and deep protein annotation

   :homepage: https://github.com/soedinglab/hh-suite
   :documentation: https://github.com/soedinglab/hh-suite/wiki
   
   :license: GPLv3
   :recipe: /`hhsuite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hhsuite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hhsuite/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-019-3019-7`, biotools: :biotools:`hh-suite`

   


.. conda:package:: hhsuite

   |downloads_hhsuite| |docker_hhsuite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.0-13</code>,  <code>3.3.0-12</code>,  <code>3.3.0-11</code>,  <code>3.3.0-10</code>,  <code>3.3.0-9</code>,  <code>3.3.0-8</code>,  <code>3.3.0-6</code>,  <code>3.3.0-5</code>,  <code>3.3.0-4</code>,  </span></summary>
      

      ``3.3.0-13``,  ``3.3.0-12``,  ``3.3.0-11``,  ``3.3.0-10``,  ``3.3.0-9``,  ``3.3.0-8``,  ``3.3.0-6``,  ``3.3.0-5``,  ``3.3.0-4``,  ``3.3.0-3``,  ``3.3.0-2``,  ``3.3.0-1``,  ``3.3.0-0``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.2.0-0``,  ``v3.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install hhsuite

   and update with::

      mamba update hhsuite

  To create a new environment, run::

      mamba create --name myenvname hhsuite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hhsuite:<tag>

   (see `hhsuite/tags`_ for valid values for ``<tag>``)


.. |downloads_hhsuite| image:: https://img.shields.io/conda/dn/bioconda/hhsuite.svg?style=flat
   :target: https://anaconda.org/bioconda/hhsuite
   :alt:   (downloads)
.. |docker_hhsuite| image:: https://quay.io/repository/biocontainers/hhsuite/status
   :target: https://quay.io/repository/biocontainers/hhsuite
.. _`hhsuite/tags`: https://quay.io/repository/biocontainers/hhsuite?tab=tags


.. raw:: html

    <script>
        var package = "hhsuite";
        var versions = ["3.3.0","3.3.0","3.3.0","3.3.0","3.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hhsuite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hhsuite/README.html