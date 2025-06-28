:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'resistify'
.. highlight: bash

resistify
=========

.. conda:recipe:: resistify
   :replaces_section_title:
   :noindex:

   A resistance gene annotation tool.

   :homepage: https://github.com/swiftseal/resistify
   :documentation: https://github.com/SwiftSeal/resistify/blob/v1.3.0/README.md
   
   :developer docs: https://github.com/SwiftSeal/resistify
   :license: `GPL3 / GPL-3.0-or-later <https://github.com/SwiftSeal/resistify/blob/main/LICENSE>`_
   :recipe: /`resistify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/resistify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/resistify/meta.yaml>`_

   Resistify is a program which rapidly identifies and classifies plant resistance genes from protein sequences.
   It is designed to be lightweight and easy to use.


.. conda:package:: resistify

   |downloads_resistify| |docker_resistify|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.0-0</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  </span></summary>
      

      ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.70.0-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-2``,  ``0.6.1-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends fair-esm: 
   :depends hmmer: 
   :depends libopenblas: 
   :depends loguru: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.9,<3.13``
   :depends pytorch: 
   :depends scikit-learn: ``>=0.24.2``
   :depends sentencepiece: 
   :depends threadpoolctl: 
   :depends transformers: 
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

      mamba install resistify

   and update with::

      mamba update resistify

  To create a new environment, run::

      mamba create --name myenvname resistify

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/resistify:<tag>

   (see `resistify/tags`_ for valid values for ``<tag>``)


.. |downloads_resistify| image:: https://img.shields.io/conda/dn/bioconda/resistify.svg?style=flat
   :target: https://anaconda.org/bioconda/resistify
   :alt:   (downloads)
.. |docker_resistify| image:: https://quay.io/repository/biocontainers/resistify/status
   :target: https://quay.io/repository/biocontainers/resistify
.. _`resistify/tags`: https://quay.io/repository/biocontainers/resistify?tab=tags


.. raw:: html

    <script>
        var package = "resistify";
        var versions = ["1.3.0","1.2.1","1.2.1","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/resistify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/resistify/README.html