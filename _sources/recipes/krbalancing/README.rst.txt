:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krbalancing'
.. highlight: bash

krbalancing
===========

.. conda:recipe:: krbalancing
   :replaces_section_title:
   :noindex:

   This is a c\+\+ extension for python which computes K.R. balanced matrices.

   :homepage: https://github.com/deeptools/Knight-Ruiz-Matrix-balancing-algorithm
   :license: GPL3
   :recipe: /`krbalancing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krbalancing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krbalancing/meta.yaml>`_

   


.. conda:package:: krbalancing

   |downloads_krbalancing| |docker_krbalancing|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.5-10</code>,  <code>0.0.5-9</code>,  <code>0.0.5-8</code>,  <code>0.0.5-7</code>,  <code>0.0.5-5</code>,  <code>0.0.5-4</code>,  <code>0.0.5-3</code>,  <code>0.0.5-2</code>,  <code>0.0.5-1</code>,  </span></summary>
      

      ``0.0.5-10``,  ``0.0.5-9``,  ``0.0.5-8``,  ``0.0.5-7``,  ``0.0.5-5``,  ``0.0.5-4``,  ``0.0.5-3``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends eigen: ``>=3.3.7``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends pybind11: ``>=2.2.4``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install krbalancing

   and update with::

      mamba update krbalancing

  To create a new environment, run::

      mamba create --name myenvname krbalancing

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/krbalancing:<tag>

   (see `krbalancing/tags`_ for valid values for ``<tag>``)


.. |downloads_krbalancing| image:: https://img.shields.io/conda/dn/bioconda/krbalancing.svg?style=flat
   :target: https://anaconda.org/bioconda/krbalancing
   :alt:   (downloads)
.. |docker_krbalancing| image:: https://quay.io/repository/biocontainers/krbalancing/status
   :target: https://quay.io/repository/biocontainers/krbalancing
.. _`krbalancing/tags`: https://quay.io/repository/biocontainers/krbalancing?tab=tags


.. raw:: html

    <script>
        var package = "krbalancing";
        var versions = ["0.0.5","0.0.5","0.0.5","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krbalancing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krbalancing/README.html