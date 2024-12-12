:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'centrifuge-core'
.. highlight: bash

centrifuge-core
===============

.. conda:recipe:: centrifuge-core
   :replaces_section_title:
   :noindex:

   Classifier for metagenomic sequences. Does not include evaluation scripts

   :homepage: http://www.ccb.jhu.edu/software/centrifuge
   :documentation: https://genome.cshlp.org/content/26/12/1721
   
   :developer docs: https://github.com/DaehwanKimLab/centrifuge
   :license: GPL3 / GPL-3.0-only
   :recipe: /`centrifuge-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrifuge-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrifuge-core/meta.yaml>`_
   :links: biotools: :biotools:`Centrifuge`, doi: :doi:`10.1101/gr.210641.116`

   


.. conda:package:: centrifuge-core

   |downloads_centrifuge-core| |docker_centrifuge-core|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4.2-2</code>,  <code>1.0.4.2-1</code>,  <code>1.0.4.2-0</code>,  <code>1.0.4.1-0</code>,  <code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.4_beta-2</code>,  <code>1.0.4_beta-1</code>,  </span></summary>
      

      ``1.0.4.2-2``,  ``1.0.4.2-1``,  ``1.0.4.2-0``,  ``1.0.4.1-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.4_beta-2``,  ``1.0.4_beta-1``,  ``1.0.4_beta-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: 
   :depends python: ``>=3.6``
   :depends tar: 
   :depends wget: 
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

      mamba install centrifuge-core

   and update with::

      mamba update centrifuge-core

  To create a new environment, run::

      mamba create --name myenvname centrifuge-core

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/centrifuge-core:<tag>

   (see `centrifuge-core/tags`_ for valid values for ``<tag>``)


.. |downloads_centrifuge-core| image:: https://img.shields.io/conda/dn/bioconda/centrifuge-core.svg?style=flat
   :target: https://anaconda.org/bioconda/centrifuge-core
   :alt:   (downloads)
.. |docker_centrifuge-core| image:: https://quay.io/repository/biocontainers/centrifuge-core/status
   :target: https://quay.io/repository/biocontainers/centrifuge-core
.. _`centrifuge-core/tags`: https://quay.io/repository/biocontainers/centrifuge-core?tab=tags


.. raw:: html

    <script>
        var package = "centrifuge-core";
        var versions = ["1.0.4.2","1.0.4.2","1.0.4.2","1.0.4.1","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/centrifuge-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/centrifuge-core/README.html