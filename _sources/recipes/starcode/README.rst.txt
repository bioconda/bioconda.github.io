:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'starcode'
.. highlight: bash

starcode
========

.. conda:recipe:: starcode
   :replaces_section_title:
   :noindex:

   Starcode\: sequence clustering based on all\-pairs search.

   :homepage: https://github.com/gui11aume/starcode
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`starcode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starcode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starcode/meta.yaml>`_

   


.. conda:package:: starcode

   |downloads_starcode| |docker_starcode|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4-7</code>,  <code>1.4-6</code>,  <code>1.4-5</code>,  <code>1.4-4</code>,  <code>1.4-3</code>,  <code>1.4-2</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  <code>1.3-2</code>,  </span></summary>
      

      ``1.4-7``,  ``1.4-6``,  ``1.4-5``,  ``1.4-4``,  ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.1-1``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
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

      mamba install starcode

   and update with::

      mamba update starcode

  To create a new environment, run::

      mamba create --name myenvname starcode

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/starcode:<tag>

   (see `starcode/tags`_ for valid values for ``<tag>``)


.. |downloads_starcode| image:: https://img.shields.io/conda/dn/bioconda/starcode.svg?style=flat
   :target: https://anaconda.org/bioconda/starcode
   :alt:   (downloads)
.. |docker_starcode| image:: https://quay.io/repository/biocontainers/starcode/status
   :target: https://quay.io/repository/biocontainers/starcode
.. _`starcode/tags`: https://quay.io/repository/biocontainers/starcode?tab=tags


.. raw:: html

    <script>
        var package = "starcode";
        var versions = ["1.4","1.4","1.4","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/starcode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/starcode/README.html