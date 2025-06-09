:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyvcf3'
.. highlight: bash

pyvcf3
======

.. conda:recipe:: pyvcf3
   :replaces_section_title:
   :noindex:

   A Variant Call Format reader for Python.

   :homepage: https://github.com/dridk/PyVCF3
   :documentation: http://pyvcf.readthedocs.org/en/latest/index.html
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pyvcf3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyvcf3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyvcf3/meta.yaml>`_

   


.. conda:package:: pyvcf3

   |downloads_pyvcf3| |docker_pyvcf3|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``

      

   
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

      mamba install pyvcf3

   and update with::

      mamba update pyvcf3

  To create a new environment, run::

      mamba create --name myenvname pyvcf3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyvcf3:<tag>

   (see `pyvcf3/tags`_ for valid values for ``<tag>``)


.. |downloads_pyvcf3| image:: https://img.shields.io/conda/dn/bioconda/pyvcf3.svg?style=flat
   :target: https://anaconda.org/bioconda/pyvcf3
   :alt:   (downloads)
.. |docker_pyvcf3| image:: https://quay.io/repository/biocontainers/pyvcf3/status
   :target: https://quay.io/repository/biocontainers/pyvcf3
.. _`pyvcf3/tags`: https://quay.io/repository/biocontainers/pyvcf3?tab=tags


.. raw:: html

    <script>
        var package = "pyvcf3";
        var versions = ["1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyvcf3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyvcf3/README.html