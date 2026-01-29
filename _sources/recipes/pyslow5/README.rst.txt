:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyslow5'
.. highlight: bash

pyslow5
=======

.. conda:recipe:: pyslow5
   :replaces_section_title:
   :noindex:

   slow5lib Python binding

   :homepage: https://github.com/hasindu2008/slow5lib
   :license: `MIT / MIT <https://github.com/hasindu2008/slow5lib/blob/master/LICENSE>`_
   :recipe: /`pyslow5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyslow5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyslow5/meta.yaml>`_

   


.. conda:package:: pyslow5

   |downloads_pyslow5| |docker_pyslow5|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-2</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-3</code>,  </span></summary>
      

      ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-3``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends numpy: ``>=1.22.4,<2.0a0``
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

      mamba install pyslow5

   and update with::

      mamba update pyslow5

  To create a new environment, run::

      mamba create --name myenvname pyslow5

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyslow5:<tag>

   (see `pyslow5/tags`_ for valid values for ``<tag>``)


.. |downloads_pyslow5| image:: https://img.shields.io/conda/dn/bioconda/pyslow5.svg?style=flat
   :target: https://anaconda.org/bioconda/pyslow5
   :alt:   (downloads)
.. |docker_pyslow5| image:: https://quay.io/repository/biocontainers/pyslow5/status
   :target: https://quay.io/repository/biocontainers/pyslow5
.. _`pyslow5/tags`: https://quay.io/repository/biocontainers/pyslow5?tab=tags


.. raw:: html

    <script>
        var package = "pyslow5";
        var versions = ["1.4.0","1.3.1","1.3.0","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyslow5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyslow5/README.html