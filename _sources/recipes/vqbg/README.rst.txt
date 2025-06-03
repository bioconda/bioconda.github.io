:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vqbg'
.. highlight: bash

vqbg
====

.. conda:recipe:: vqbg
   :replaces_section_title:
   :noindex:

   De Novo Reconstruction of Viral Quasispecies from Bubble Graph

   :homepage: https://github.com/qdu-bioinfo/VQBG
   :license: MIT / MIT
   :recipe: /`vqbg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vqbg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vqbg/meta.yaml>`_

   


.. conda:package:: vqbg

   |downloads_vqbg| |docker_vqbg|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends glpk: ``>=5.0,<6.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install vqbg

   and update with::

      mamba update vqbg

  To create a new environment, run::

      mamba create --name myenvname vqbg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vqbg:<tag>

   (see `vqbg/tags`_ for valid values for ``<tag>``)


.. |downloads_vqbg| image:: https://img.shields.io/conda/dn/bioconda/vqbg.svg?style=flat
   :target: https://anaconda.org/bioconda/vqbg
   :alt:   (downloads)
.. |docker_vqbg| image:: https://quay.io/repository/biocontainers/vqbg/status
   :target: https://quay.io/repository/biocontainers/vqbg
.. _`vqbg/tags`: https://quay.io/repository/biocontainers/vqbg?tab=tags


.. raw:: html

    <script>
        var package = "vqbg";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vqbg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vqbg/README.html