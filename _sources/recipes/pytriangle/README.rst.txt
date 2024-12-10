:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytriangle'
.. highlight: bash

pytriangle
==========

.. conda:recipe:: pytriangle
   :replaces_section_title:
   :noindex:

   A python interface to the 2D triangulation program TRIANGLE

   :homepage: https://github.com/pletzer/pytriangle
   :license: MIT
   :recipe: /`pytriangle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytriangle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytriangle/meta.yaml>`_

   


.. conda:package:: pytriangle

   |downloads_pytriangle| |docker_pytriangle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.9-10</code>,  <code>1.0.9-9</code>,  <code>1.0.9-8</code>,  <code>1.0.9-7</code>,  <code>1.0.9-6</code>,  <code>1.0.9-5</code>,  <code>1.0.9-4</code>,  <code>1.0.9-3</code>,  <code>1.0.9-2</code>,  </span></summary>
      

      ``1.0.9-10``,  ``1.0.9-9``,  ``1.0.9-8``,  ``1.0.9-7``,  ``1.0.9-6``,  ``1.0.9-5``,  ``1.0.9-4``,  ``1.0.9-3``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
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

      mamba install pytriangle

   and update with::

      mamba update pytriangle

  To create a new environment, run::

      mamba create --name myenvname pytriangle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pytriangle:<tag>

   (see `pytriangle/tags`_ for valid values for ``<tag>``)


.. |downloads_pytriangle| image:: https://img.shields.io/conda/dn/bioconda/pytriangle.svg?style=flat
   :target: https://anaconda.org/bioconda/pytriangle
   :alt:   (downloads)
.. |docker_pytriangle| image:: https://quay.io/repository/biocontainers/pytriangle/status
   :target: https://quay.io/repository/biocontainers/pytriangle
.. _`pytriangle/tags`: https://quay.io/repository/biocontainers/pytriangle?tab=tags


.. raw:: html

    <script>
        var package = "pytriangle";
        var versions = ["1.0.9","1.0.9","1.0.9","1.0.9","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytriangle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytriangle/README.html