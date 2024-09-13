:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lra'
.. highlight: bash

lra
===

.. conda:recipe:: lra
   :replaces_section_title:
   :noindex:

   Long read aligner for sequences and contigs

   :homepage: https://github.com/ChaissonLab/LRA
   :license: USC-RL v1.0
   :recipe: /`lra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lra/meta.yaml>`_

   


.. conda:package:: lra

   |downloads_lra| |docker_lra|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.7.2-2</code>,  <code>1.3.7.2-1</code>,  <code>1.3.7.2-0</code>,  <code>1.3.4-2</code>,  <code>1.3.4-1</code>,  <code>1.3.4-0</code>,  <code>1.3.2-2</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  </span></summary>
      

      ``1.3.7.2-2``,  ``1.3.7.2-1``,  ``1.3.7.2-0``,  ``1.3.4-2``,  ``1.3.4-1``,  ``1.3.4-0``,  ``1.3.2-2``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.20,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install lra

   and update with::

      mamba update lra

  To create a new environment, run::

      mamba create --name myenvname lra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lra:<tag>

   (see `lra/tags`_ for valid values for ``<tag>``)


.. |downloads_lra| image:: https://img.shields.io/conda/dn/bioconda/lra.svg?style=flat
   :target: https://anaconda.org/bioconda/lra
   :alt:   (downloads)
.. |docker_lra| image:: https://quay.io/repository/biocontainers/lra/status
   :target: https://quay.io/repository/biocontainers/lra
.. _`lra/tags`: https://quay.io/repository/biocontainers/lra?tab=tags


.. raw:: html

    <script>
        var package = "lra";
        var versions = ["1.3.7.2","1.3.7.2","1.3.7.2","1.3.4","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lra/README.html