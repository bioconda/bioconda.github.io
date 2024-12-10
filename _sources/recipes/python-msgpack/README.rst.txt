:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-msgpack'
.. highlight: bash

python-msgpack
==============

.. conda:recipe:: python-msgpack
   :replaces_section_title:
   :noindex:

   It\'s like JSON. But fast and small.

   :homepage: https://pypi.org/project/msgpack/#description
   :license: Apache 2.0
   :recipe: /`python-msgpack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-msgpack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-msgpack/meta.yaml>`_

   


.. conda:package:: python-msgpack

   |downloads_python-msgpack| |docker_python-msgpack|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-11</code>,  <code>0.6.1-10</code>,  <code>0.6.1-9</code>,  <code>0.6.1-8</code>,  <code>0.6.1-6</code>,  <code>0.6.1-5</code>,  <code>0.6.1-4</code>,  <code>0.6.1-3</code>,  <code>0.6.1-2</code>,  </span></summary>
      

      ``0.6.1-11``,  ``0.6.1-10``,  ``0.6.1-9``,  ``0.6.1-8``,  ``0.6.1-6``,  ``0.6.1-5``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install python-msgpack

   and update with::

      mamba update python-msgpack

  To create a new environment, run::

      mamba create --name myenvname python-msgpack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-msgpack:<tag>

   (see `python-msgpack/tags`_ for valid values for ``<tag>``)


.. |downloads_python-msgpack| image:: https://img.shields.io/conda/dn/bioconda/python-msgpack.svg?style=flat
   :target: https://anaconda.org/bioconda/python-msgpack
   :alt:   (downloads)
.. |docker_python-msgpack| image:: https://quay.io/repository/biocontainers/python-msgpack/status
   :target: https://quay.io/repository/biocontainers/python-msgpack
.. _`python-msgpack/tags`: https://quay.io/repository/biocontainers/python-msgpack?tab=tags


.. raw:: html

    <script>
        var package = "python-msgpack";
        var versions = ["0.6.1","0.6.1","0.6.1","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-msgpack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-msgpack/README.html