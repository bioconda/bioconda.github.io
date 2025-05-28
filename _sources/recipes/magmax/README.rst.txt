:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magmax'
.. highlight: bash

magmax
======

.. conda:recipe:: magmax
   :replaces_section_title:
   :noindex:

   MAGmax is a robust tool for dereplicating MAGs through bin merging and reassembly.

   :homepage: https://github.com/soedinglab/MAGmax
   :license: GPL / GPL-3.0
   :recipe: /`magmax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magmax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magmax/meta.yaml>`_

   


.. conda:package:: magmax

   |downloads_magmax| |docker_magmax|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends seqtk: 
   :depends skani: 
   :depends spades: 
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

      mamba install magmax

   and update with::

      mamba update magmax

  To create a new environment, run::

      mamba create --name myenvname magmax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/magmax:<tag>

   (see `magmax/tags`_ for valid values for ``<tag>``)


.. |downloads_magmax| image:: https://img.shields.io/conda/dn/bioconda/magmax.svg?style=flat
   :target: https://anaconda.org/bioconda/magmax
   :alt:   (downloads)
.. |docker_magmax| image:: https://quay.io/repository/biocontainers/magmax/status
   :target: https://quay.io/repository/biocontainers/magmax
.. _`magmax/tags`: https://quay.io/repository/biocontainers/magmax?tab=tags


.. raw:: html

    <script>
        var package = "magmax";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magmax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magmax/README.html