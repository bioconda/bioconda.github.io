:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'py2bit'
.. highlight: bash

py2bit
======

.. conda:recipe:: py2bit
   :replaces_section_title:
   :noindex:

   A package for accessing 2bit files using lib2bit.

   :homepage: https://github.com/deeptools/py2bit
   :documentation: https://github.com/deeptools/py2bit/blob/0.3.3/README.md
   
   :license: MIT / MIT
   :recipe: /`py2bit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/py2bit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/py2bit/meta.yaml>`_

   


.. conda:package:: py2bit

   |downloads_py2bit| |docker_py2bit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.3-1</code>,  <code>0.3.3-0</code>,  <code>0.3.0-11</code>,  <code>0.3.0-10</code>,  <code>0.3.0-9</code>,  <code>0.3.0-8</code>,  <code>0.3.0-7</code>,  <code>0.3.0-6</code>,  <code>0.3.0-5</code>,  </span></summary>
      

      ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.0-11``,  ``0.3.0-10``,  ``0.3.0-9``,  ``0.3.0-8``,  ``0.3.0-7``,  ``0.3.0-6``,  ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install py2bit

   and update with::

      mamba update py2bit

  To create a new environment, run::

      mamba create --name myenvname py2bit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/py2bit:<tag>

   (see `py2bit/tags`_ for valid values for ``<tag>``)


.. |downloads_py2bit| image:: https://img.shields.io/conda/dn/bioconda/py2bit.svg?style=flat
   :target: https://anaconda.org/bioconda/py2bit
   :alt:   (downloads)
.. |docker_py2bit| image:: https://quay.io/repository/biocontainers/py2bit/status
   :target: https://quay.io/repository/biocontainers/py2bit
.. _`py2bit/tags`: https://quay.io/repository/biocontainers/py2bit?tab=tags


.. raw:: html

    <script>
        var package = "py2bit";
        var versions = ["0.3.3","0.3.3","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/py2bit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/py2bit/README.html