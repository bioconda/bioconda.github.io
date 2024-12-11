:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kalign3'
.. highlight: bash

kalign3
=======

.. conda:recipe:: kalign3
   :replaces_section_title:
   :noindex:

   Kalign is a fast and accurate multiple sequence alignment algorithm.

   :homepage: https://github.com/TimoLassmann/kalign
   :license: GPL-3.0-only
   :recipe: /`kalign3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalign3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalign3/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz795`

   


.. conda:package:: kalign3

   |downloads_kalign3| |docker_kalign3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-2</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.3.5-0</code>,  <code>3.3.2-2</code>,  <code>3.3.2-1</code>,  <code>3.3.2-0</code>,  <code>3.2.2-3</code>,  <code>3.2.2-2</code>,  </span></summary>
      

      ``3.4.0-2``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.5-0``,  ``3.3.2-2``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.2.2-3``,  ``3.2.2-2``,  ``3.2.2-1``,  ``3.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcxx: ``>=18``
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

      mamba install kalign3

   and update with::

      mamba update kalign3

  To create a new environment, run::

      mamba create --name myenvname kalign3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kalign3:<tag>

   (see `kalign3/tags`_ for valid values for ``<tag>``)


.. |downloads_kalign3| image:: https://img.shields.io/conda/dn/bioconda/kalign3.svg?style=flat
   :target: https://anaconda.org/bioconda/kalign3
   :alt:   (downloads)
.. |docker_kalign3| image:: https://quay.io/repository/biocontainers/kalign3/status
   :target: https://quay.io/repository/biocontainers/kalign3
.. _`kalign3/tags`: https://quay.io/repository/biocontainers/kalign3?tab=tags


.. raw:: html

    <script>
        var package = "kalign3";
        var versions = ["3.4.0","3.4.0","3.4.0","3.3.5","3.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kalign3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kalign3/README.html