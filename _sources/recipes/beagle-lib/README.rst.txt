:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beagle-lib'
.. highlight: bash

beagle-lib
==========

.. conda:recipe:: beagle-lib
   :replaces_section_title:
   :noindex:

   A general purpose library for evaluating the likelihood of sequence evolution on phylogenetic trees.

   :homepage: https://github.com/beagle-dev/beagle-lib
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`beagle-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle-lib/meta.yaml>`_

   


.. conda:package:: beagle-lib

   |downloads_beagle-lib| |docker_beagle-lib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.1-2</code>,  <code>4.0.1-1</code>,  <code>4.0.1-0</code>,  <code>4.0.0-2</code>,  <code>4.0.0-1</code>,  <code>4.0.0-0</code>,  <code>3.1.2-4</code>,  <code>3.1.2-3</code>,  <code>3.1.2-2</code>,  </span></summary>
      

      ``4.0.1-2``,  ``4.0.1-1``,  ``4.0.1-0``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.1.2-4``,  ``3.1.2-3``,  ``3.1.2-2``,  ``3.1.2-1``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.2-0``,  ``2.1.2-7``,  ``2.1.2-6``,  ``2.1.2-5``,  ``2.1.2-4``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install beagle-lib

   and update with::

      mamba update beagle-lib

  To create a new environment, run::

      mamba create --name myenvname beagle-lib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/beagle-lib:<tag>

   (see `beagle-lib/tags`_ for valid values for ``<tag>``)


.. |downloads_beagle-lib| image:: https://img.shields.io/conda/dn/bioconda/beagle-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/beagle-lib
   :alt:   (downloads)
.. |docker_beagle-lib| image:: https://quay.io/repository/biocontainers/beagle-lib/status
   :target: https://quay.io/repository/biocontainers/beagle-lib
.. _`beagle-lib/tags`: https://quay.io/repository/biocontainers/beagle-lib?tab=tags


.. raw:: html

    <script>
        var package = "beagle-lib";
        var versions = ["4.0.1","4.0.1","4.0.1","4.0.0","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beagle-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beagle-lib/README.html