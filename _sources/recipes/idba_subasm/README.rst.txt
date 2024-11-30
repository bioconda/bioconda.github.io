:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'idba_subasm'
.. highlight: bash

idba_subasm
===========

.. conda:recipe:: idba_subasm
   :replaces_section_title:
   :noindex:

   Fork of IDBA with modifications to perform subassembly for the read cloud metagenomic assembler Athena

   :homepage: https://github.com/abishara/idba
   :license: GPL2
   :recipe: /`idba_subasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idba_subasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idba_subasm/meta.yaml>`_

   


.. conda:package:: idba_subasm

   |downloads_idba_subasm| |docker_idba_subasm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.3a2-8</code>,  <code>1.1.3a2-7</code>,  <code>1.1.3a2-6</code>,  <code>1.1.3a2-5</code>,  <code>1.1.3a2-4</code>,  <code>1.1.3a2-3</code>,  <code>1.1.3a2-2</code>,  <code>1.1.3a2-1</code>,  <code>1.1.3a2-0</code>,  </span></summary>
      

      ``1.1.3a2-8``,  ``1.1.3a2-7``,  ``1.1.3a2-6``,  ``1.1.3a2-5``,  ``1.1.3a2-4``,  ``1.1.3a2-3``,  ``1.1.3a2-2``,  ``1.1.3a2-1``,  ``1.1.3a2-0``,  ``1.1.3a1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install idba_subasm

   and update with::

      mamba update idba_subasm

  To create a new environment, run::

      mamba create --name myenvname idba_subasm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/idba_subasm:<tag>

   (see `idba_subasm/tags`_ for valid values for ``<tag>``)


.. |downloads_idba_subasm| image:: https://img.shields.io/conda/dn/bioconda/idba_subasm.svg?style=flat
   :target: https://anaconda.org/bioconda/idba_subasm
   :alt:   (downloads)
.. |docker_idba_subasm| image:: https://quay.io/repository/biocontainers/idba_subasm/status
   :target: https://quay.io/repository/biocontainers/idba_subasm
.. _`idba_subasm/tags`: https://quay.io/repository/biocontainers/idba_subasm?tab=tags


.. raw:: html

    <script>
        var package = "idba_subasm";
        var versions = ["1.1.3a2","1.1.3a2","1.1.3a2","1.1.3a2","1.1.3a2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/idba_subasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/idba_subasm/README.html