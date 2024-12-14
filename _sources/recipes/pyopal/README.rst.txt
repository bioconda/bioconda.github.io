:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyopal'
.. highlight: bash

pyopal
======

.. conda:recipe:: pyopal
   :replaces_section_title:
   :noindex:

   Cython bindings and Python interface to Opal\, a SIMD\-accelerated pairwise aligner.

   :homepage: https://github.com/althonos/pyopal
   :documentation: https://pyopal.readthedocs.org
   
   :license: MIT / MIT
   :recipe: /`pyopal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopal/meta.yaml>`_

   


.. conda:package:: pyopal

   |downloads_pyopal| |docker_pyopal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.1-1</code>,  <code>0.6.1-0</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  </span></summary>
      

      ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends archspec: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scoring-matrices: ``>=0.2``
   :depends scoring-matrices: ``>=0.2.2,<0.3.0a0``
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

      mamba install pyopal

   and update with::

      mamba update pyopal

  To create a new environment, run::

      mamba create --name myenvname pyopal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyopal:<tag>

   (see `pyopal/tags`_ for valid values for ``<tag>``)


.. |downloads_pyopal| image:: https://img.shields.io/conda/dn/bioconda/pyopal.svg?style=flat
   :target: https://anaconda.org/bioconda/pyopal
   :alt:   (downloads)
.. |docker_pyopal| image:: https://quay.io/repository/biocontainers/pyopal/status
   :target: https://quay.io/repository/biocontainers/pyopal
.. _`pyopal/tags`: https://quay.io/repository/biocontainers/pyopal?tab=tags


.. raw:: html

    <script>
        var package = "pyopal";
        var versions = ["0.7.0","0.7.0","0.6.1","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyopal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyopal/README.html