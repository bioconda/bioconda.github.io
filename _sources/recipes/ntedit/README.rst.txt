:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntedit'
.. highlight: bash

ntedit
======

.. conda:recipe:: ntedit
   :replaces_section_title:
   :noindex:

   Ultrafast\, lightweight\, scalable genome assembly polishing\, and SNV detection \& annotation

   :homepage: https://github.com/bcgsc/ntEdit
   :documentation: https://github.com/bcgsc/ntEdit/blob/master/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ntedit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntedit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntedit/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz400`, biotools: :biotools:`ntEdit`

   


.. conda:package:: ntedit

   |downloads_ntedit| |docker_ntedit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.2-1</code>,  <code>2.0.2-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.4.3-0</code>,  <code>1.3.5-4</code>,  <code>1.3.5-3</code>,  <code>1.3.5-2</code>,  </span></summary>
      

      ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.3-0``,  ``1.3.5-4``,  ``1.3.5-3``,  ``1.3.5-2``,  ``1.3.5-1``,  ``1.3.5-0``,  ``1.3.4-1``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends btllib: ``>=1.7.2,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends ntcard: 
   :depends nthits: ``>=1.0.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python_abi: ``3.12.* *_cp312``
   :depends snakemake-minimal: 
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

      mamba install ntedit

   and update with::

      mamba update ntedit

  To create a new environment, run::

      mamba create --name myenvname ntedit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ntedit:<tag>

   (see `ntedit/tags`_ for valid values for ``<tag>``)


.. |downloads_ntedit| image:: https://img.shields.io/conda/dn/bioconda/ntedit.svg?style=flat
   :target: https://anaconda.org/bioconda/ntedit
   :alt:   (downloads)
.. |docker_ntedit| image:: https://quay.io/repository/biocontainers/ntedit/status
   :target: https://quay.io/repository/biocontainers/ntedit
.. _`ntedit/tags`: https://quay.io/repository/biocontainers/ntedit?tab=tags


.. raw:: html

    <script>
        var package = "ntedit";
        var versions = ["2.0.2","2.0.2","2.0.1","2.0.1","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntedit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntedit/README.html