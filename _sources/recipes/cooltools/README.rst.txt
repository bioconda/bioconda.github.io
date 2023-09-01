:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cooltools'
.. highlight: bash

cooltools
=========

.. conda:recipe:: cooltools
   :replaces_section_title:
   :noindex:

   Analysis tools for genomic interaction data stored in .cool format

   :homepage: https://github.com/open2c/cooltools
   :documentation: https://cooltools.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`cooltools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooltools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooltools/meta.yaml>`_

   


.. conda:package:: cooltools

   |downloads_cooltools| |docker_cooltools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.4-2</code>,  <code>0.5.4-1</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-3</code>,  <code>0.5.2-2</code>,  <code>0.5.2-1</code>,  <code>0.5.2-0</code>,  <code>0.5.1-1</code>,  </span></summary>
      

      ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-3``,  ``0.5.2-2``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.2-3``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioframe: ``>=0.3.3``
   :depends click: ``>=7``
   :depends cooler: ``>=0.9.1``
   :depends joblib: 
   :depends libgcc-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: ``<1.24``
   :depends numpy: ``>=1.23.5,<2.0a0``
   :depends pandas: ``>=1.5.1,<2``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-image: 
   :depends scikit-learn: ``>=1.1.2``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cooltools

   and update with::

      mamba update cooltools

  To create a new environment, run::

      mamba create --name myenvname cooltools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cooltools:<tag>

   (see `cooltools/tags`_ for valid values for ``<tag>``)


.. |downloads_cooltools| image:: https://img.shields.io/conda/dn/bioconda/cooltools.svg?style=flat
   :target: https://anaconda.org/bioconda/cooltools
   :alt:   (downloads)
.. |docker_cooltools| image:: https://quay.io/repository/biocontainers/cooltools/status
   :target: https://quay.io/repository/biocontainers/cooltools
.. _`cooltools/tags`: https://quay.io/repository/biocontainers/cooltools?tab=tags


.. raw:: html

    <script>
        var package = "cooltools";
        var versions = ["0.5.4","0.5.4","0.5.4","0.5.3","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cooltools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cooltools/README.html