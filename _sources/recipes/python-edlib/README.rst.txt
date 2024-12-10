:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-edlib'
.. highlight: bash

python-edlib
============

.. conda:recipe:: python-edlib
   :replaces_section_title:
   :noindex:

   Lightweight\, super fast C\/C\+\+ \(\& Python\) library for sequence alignment using edit \(Levenshtein\) distance.

   :homepage: https://github.com/Martinsos/edlib
   :documentation: https://martinsos.github.io/edlib
   
   :license: MIT / MIT
   :recipe: /`python-edlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-edlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-edlib/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw753`

   


.. conda:package:: python-edlib

   |downloads_python-edlib| |docker_python-edlib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.9.post1-1</code>,  <code>1.3.9.post1-0</code>,  <code>1.3.9-8</code>,  <code>1.3.9-7</code>,  <code>1.3.9-6</code>,  <code>1.3.9-5</code>,  <code>1.3.9-4</code>,  <code>1.3.9-3</code>,  <code>1.3.9-2</code>,  </span></summary>
      

      ``1.3.9.post1-1``,  ``1.3.9.post1-0``,  ``1.3.9-8``,  ``1.3.9-7``,  ``1.3.9-6``,  ``1.3.9-5``,  ``1.3.9-4``,  ``1.3.9-3``,  ``1.3.9-2``,  ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8.post2-1``,  ``1.3.8.post2-0``,  ``1.3.8.post1-2``,  ``1.3.8.post1-1``,  ``1.3.8.post1-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.2.4.post1-0``,  ``1.2.4-0``,  ``1.2.3.post1-0``,  ``1.2.3-1``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install python-edlib

   and update with::

      mamba update python-edlib

  To create a new environment, run::

      mamba create --name myenvname python-edlib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-edlib:<tag>

   (see `python-edlib/tags`_ for valid values for ``<tag>``)


.. |downloads_python-edlib| image:: https://img.shields.io/conda/dn/bioconda/python-edlib.svg?style=flat
   :target: https://anaconda.org/bioconda/python-edlib
   :alt:   (downloads)
.. |docker_python-edlib| image:: https://quay.io/repository/biocontainers/python-edlib/status
   :target: https://quay.io/repository/biocontainers/python-edlib
.. _`python-edlib/tags`: https://quay.io/repository/biocontainers/python-edlib?tab=tags


.. raw:: html

    <script>
        var package = "python-edlib";
        var versions = ["1.3.9.post1","1.3.9.post1","1.3.9","1.3.9","1.3.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-edlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-edlib/README.html