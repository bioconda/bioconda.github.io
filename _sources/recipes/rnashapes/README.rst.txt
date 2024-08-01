:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnashapes'
.. highlight: bash

rnashapes
=========

.. conda:recipe:: rnashapes
   :replaces_section_title:
   :noindex:

   RNAshape abstraction maps structures to a tree\-like domain of shapes\, retaining adjacency and nesting of structural features\, but disregarding helix lengths. Shape abstraction integrates well with dynamic programming algorithms\, and hence it can be applied during structure prediction rather than afterwards. This avoids exponential explosion and can still give us a non\-heuristic and complete account of properties of the molecule\'s folding space.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/rnashapes
   :license: GPL-3.0-or-later
   :recipe: /`rnashapes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnashapes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnashapes/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: rnashapes

   |downloads_rnashapes| |docker_rnashapes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.3.2-3</code>,  <code>3.3.2-2</code>,  <code>3.3.2-1</code>,  <code>3.3.2-0</code>,  <code>3.3.0-7</code>,  <code>3.3.0-6</code>,  <code>3.3.0-5</code>,  </span></summary>
      

      ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.2-3``,  ``3.3.2-2``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.3.0-7``,  ``3.3.0-6``,  ``3.3.0-5``,  ``3.3.0-4``,  ``3.3.0-3``,  ``3.3.0-0``,  ``2.1.6-4``,  ``2.1.6-3``,  ``2.1.6-2``,  ``2.1.6-1``,  ``2.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bellmans-gapc: ``>=2024.01.12``
   :depends bellmans-gapc: ``>=2024.1.12``
   :depends libgcc-ng: ``>=12``
   :depends libopenblas: ``>=0.3.27,<1.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install rnashapes

   and update with::

      mamba update rnashapes

  To create a new environment, run::

      mamba create --name myenvname rnashapes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnashapes:<tag>

   (see `rnashapes/tags`_ for valid values for ``<tag>``)


.. |downloads_rnashapes| image:: https://img.shields.io/conda/dn/bioconda/rnashapes.svg?style=flat
   :target: https://anaconda.org/bioconda/rnashapes
   :alt:   (downloads)
.. |docker_rnashapes| image:: https://quay.io/repository/biocontainers/rnashapes/status
   :target: https://quay.io/repository/biocontainers/rnashapes
.. _`rnashapes/tags`: https://quay.io/repository/biocontainers/rnashapes?tab=tags


.. raw:: html

    <script>
        var package = "rnashapes";
        var versions = ["3.4.0","3.4.0","3.3.2","3.3.2","3.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnashapes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnashapes/README.html