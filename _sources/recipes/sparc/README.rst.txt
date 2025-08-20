:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sparc'
.. highlight: bash

sparc
=====

.. conda:recipe:: sparc
   :replaces_section_title:
   :noindex:

   A sparsity\-based consensus algorithm for long erroneous sequencing reads.

   :homepage: https://github.com/yechengxi/Sparc
   :license: MIT / MIT
   :recipe: /`sparc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparc/meta.yaml>`_

   


.. conda:package:: sparc

   |downloads_sparc| |docker_sparc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20160205-12</code>,  <code>20160205-11</code>,  <code>20160205-10</code>,  <code>20160205-9</code>,  <code>20160205-8</code>,  <code>20160205-7</code>,  <code>20160205-6</code>,  <code>20160205-5</code>,  <code>20160205-4</code>,  </span></summary>
      

      ``20160205-12``,  ``20160205-11``,  ``20160205-10``,  ``20160205-9``,  ``20160205-8``,  ``20160205-7``,  ``20160205-6``,  ``20160205-5``,  ``20160205-4``,  ``20160205-3``,  ``20160205-2``,  ``20160205-1``,  ``20160205-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install sparc

   and update with::

      mamba update sparc

  To create a new environment, run::

      mamba create --name myenvname sparc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sparc:<tag>

   (see `sparc/tags`_ for valid values for ``<tag>``)


.. |downloads_sparc| image:: https://img.shields.io/conda/dn/bioconda/sparc.svg?style=flat
   :target: https://anaconda.org/bioconda/sparc
   :alt:   (downloads)
.. |docker_sparc| image:: https://quay.io/repository/biocontainers/sparc/status
   :target: https://quay.io/repository/biocontainers/sparc
.. _`sparc/tags`: https://quay.io/repository/biocontainers/sparc?tab=tags


.. raw:: html

    <script>
        var package = "sparc";
        var versions = ["20160205","20160205","20160205","20160205","20160205"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sparc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sparc/README.html