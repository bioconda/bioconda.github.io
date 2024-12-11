:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wfa2-lib'
.. highlight: bash

wfa2-lib
========

.. conda:recipe:: wfa2-lib
   :replaces_section_title:
   :noindex:

   Wavefront alignment algorithm library v2.

   :homepage: https://github.com/smarco/WFA2-lib
   :documentation: https://github.com/smarco/WFA2-lib/blob/v2.3.5/README.md
   
   :license: MIT / MIT
   :recipe: /`wfa2-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wfa2-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wfa2-lib/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa777`, doi: :doi:`10.1101/2022.04.14.488380`

   


.. conda:package:: wfa2-lib

   |downloads_wfa2-lib| |docker_wfa2-lib|

   :versions:
      
      

      ``2.3.5-3``,  ``2.3.5-2``,  ``2.3.5-1``,  ``2.3.5-0``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.3-2``,  ``2.3.3-1``,  ``2.3.3-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install wfa2-lib

   and update with::

      mamba update wfa2-lib

  To create a new environment, run::

      mamba create --name myenvname wfa2-lib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wfa2-lib:<tag>

   (see `wfa2-lib/tags`_ for valid values for ``<tag>``)


.. |downloads_wfa2-lib| image:: https://img.shields.io/conda/dn/bioconda/wfa2-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/wfa2-lib
   :alt:   (downloads)
.. |docker_wfa2-lib| image:: https://quay.io/repository/biocontainers/wfa2-lib/status
   :target: https://quay.io/repository/biocontainers/wfa2-lib
.. _`wfa2-lib/tags`: https://quay.io/repository/biocontainers/wfa2-lib?tab=tags


.. raw:: html

    <script>
        var package = "wfa2-lib";
        var versions = ["2.3.5","2.3.5","2.3.5","2.3.5","2.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wfa2-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wfa2-lib/README.html