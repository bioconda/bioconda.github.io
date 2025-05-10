:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igua'
.. highlight: bash

igua
====

.. conda:recipe:: igua
   :replaces_section_title:
   :noindex:

   Iterative Gene clUster Analysis\, a high\-throughput method for gene cluster family identification.

   :homepage: https://github.com/zellerlab/IGUA
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`igua <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igua>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igua/meta.yaml>`_

   


.. conda:package:: igua

   |downloads_igua| |docker_igua|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends anndata: ``>=0.8,<0.12``
   :depends biopython: ``>=1.79,<2.0``
   :depends gb-io: ``>=0.3.0,<0.4.0``
   :depends mmseqs2: 
   :depends numpy: ``>=1.0,<3.0``
   :depends pandas: ``>=1.3,<3.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends rich: ``>=12.6,<15.0``
   :depends scipy: ``>=1.4,<2``
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

      mamba install igua

   and update with::

      mamba update igua

  To create a new environment, run::

      mamba create --name myenvname igua

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/igua:<tag>

   (see `igua/tags`_ for valid values for ``<tag>``)


.. |downloads_igua| image:: https://img.shields.io/conda/dn/bioconda/igua.svg?style=flat
   :target: https://anaconda.org/bioconda/igua
   :alt:   (downloads)
.. |docker_igua| image:: https://quay.io/repository/biocontainers/igua/status
   :target: https://quay.io/repository/biocontainers/igua
.. _`igua/tags`: https://quay.io/repository/biocontainers/igua?tab=tags


.. raw:: html

    <script>
        var package = "igua";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igua/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igua/README.html