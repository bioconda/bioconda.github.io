:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'regtools'
.. highlight: bash

regtools
========

.. conda:recipe:: regtools
   :replaces_section_title:
   :noindex:

   Tools that integrate DNA\-seq and RNA\-seq data to help interpret mutations in a regulatory and splicing context.

   :homepage: https://github.com/griffithlab/regtools/
   :license: MIT / MIT
   :recipe: /`regtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regtools/meta.yaml>`_

   


.. conda:package:: regtools

   |downloads_regtools| |docker_regtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.0-4</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-2</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  </span></summary>
      

      ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.6.1-0``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install regtools

   and update with::

      mamba update regtools

  To create a new environment, run::

      mamba create --name myenvname regtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/regtools:<tag>

   (see `regtools/tags`_ for valid values for ``<tag>``)


.. |downloads_regtools| image:: https://img.shields.io/conda/dn/bioconda/regtools.svg?style=flat
   :target: https://anaconda.org/bioconda/regtools
   :alt:   (downloads)
.. |docker_regtools| image:: https://quay.io/repository/biocontainers/regtools/status
   :target: https://quay.io/repository/biocontainers/regtools
.. _`regtools/tags`: https://quay.io/repository/biocontainers/regtools?tab=tags


.. raw:: html

    <script>
        var package = "regtools";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/regtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/regtools/README.html