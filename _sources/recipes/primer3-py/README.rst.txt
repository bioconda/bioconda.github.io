:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primer3-py'
.. highlight: bash

primer3-py
==========

.. conda:recipe:: primer3-py
   :replaces_section_title:
   :noindex:

   Python bindings for Primer3

   :homepage: https://github.com/libnano/primer3-py
   :documentation: https://libnano.github.io/primer3-py/
   
   :license: GPL2 / GPL-2.0-only
   :recipe: /`primer3-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primer3-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primer3-py/meta.yaml>`_

   


.. conda:package:: primer3-py

   |downloads_primer3-py| |docker_primer3-py|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.3-4</code>,  <code>2.0.3-3</code>,  <code>2.0.3-2</code>,  <code>2.0.3-1</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.0.3-4``,  ``2.0.3-3``,  ``2.0.3-2``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.1-0``

      
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

      mamba install primer3-py

   and update with::

      mamba update primer3-py

  To create a new environment, run::

      mamba create --name myenvname primer3-py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/primer3-py:<tag>

   (see `primer3-py/tags`_ for valid values for ``<tag>``)


.. |downloads_primer3-py| image:: https://img.shields.io/conda/dn/bioconda/primer3-py.svg?style=flat
   :target: https://anaconda.org/bioconda/primer3-py
   :alt:   (downloads)
.. |docker_primer3-py| image:: https://quay.io/repository/biocontainers/primer3-py/status
   :target: https://quay.io/repository/biocontainers/primer3-py
.. _`primer3-py/tags`: https://quay.io/repository/biocontainers/primer3-py?tab=tags


.. raw:: html

    <script>
        var package = "primer3-py";
        var versions = ["2.0.3","2.0.3","2.0.3","2.0.3","2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primer3-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primer3-py/README.html