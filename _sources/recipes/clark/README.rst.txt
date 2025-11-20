:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clark'
.. highlight: bash

clark
=====

.. conda:recipe:: clark
   :replaces_section_title:
   :noindex:

   Fast\, accurate and versatile k\-mer based classification system.

   :homepage: https://github.com/rouni001/CLARK
   :documentation: http://clark.cs.ucr.edu
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`clark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clark/meta.yaml>`_
   :links: biotools: :biotools:`clark`, doi: :doi:`10.1186/s12864-015-1419-2`

   


.. conda:package:: clark

   |downloads_clark| |docker_clark|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0.0-0</code>,  <code>1.2.6.1-5</code>,  <code>1.2.6.1-4</code>,  <code>1.2.6.1-3</code>,  <code>1.2.6.1-2</code>,  <code>1.2.6.1-1</code>,  <code>1.2.6.1-0</code>,  <code>1.2.5.1-0</code>,  <code>1.2.5-1</code>,  </span></summary>
      

      ``1.3.0.0-0``,  ``1.2.6.1-5``,  ``1.2.6.1-4``,  ``1.2.6.1-3``,  ``1.2.6.1-2``,  ``1.2.6.1-1``,  ``1.2.6.1-0``,  ``1.2.5.1-0``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.3.1-0``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.2_b-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends tar: 
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

      mamba install clark

   and update with::

      mamba update clark

  To create a new environment, run::

      mamba create --name myenvname clark

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clark:<tag>

   (see `clark/tags`_ for valid values for ``<tag>``)


.. |downloads_clark| image:: https://img.shields.io/conda/dn/bioconda/clark.svg?style=flat
   :target: https://anaconda.org/bioconda/clark
   :alt:   (downloads)
.. |docker_clark| image:: https://quay.io/repository/biocontainers/clark/status
   :target: https://quay.io/repository/biocontainers/clark
.. _`clark/tags`: https://quay.io/repository/biocontainers/clark?tab=tags


.. raw:: html

    <script>
        var package = "clark";
        var versions = ["1.3.0.0","1.2.6.1","1.2.6.1","1.2.6.1","1.2.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clark/README.html