:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'uniqsketch'
.. highlight: bash

uniqsketch
==========

.. conda:recipe:: uniqsketch
   :replaces_section_title:
   :noindex:

   UniqSketch\: sensitive and resource\-efficient strain\-level detection in metagenomes.

   :homepage: https://github.com/amazon-science/uniqsketch
   :documentation: https://github.com/amazon-science/uniqsketch/README.md
   
   :license: MIT / MIT
   :recipe: /`uniqsketch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uniqsketch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uniqsketch/meta.yaml>`_

   


.. conda:package:: uniqsketch

   |downloads_uniqsketch| |docker_uniqsketch|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install uniqsketch

   and update with::

      mamba update uniqsketch

  To create a new environment, run::

      mamba create --name myenvname uniqsketch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/uniqsketch:<tag>

   (see `uniqsketch/tags`_ for valid values for ``<tag>``)


.. |downloads_uniqsketch| image:: https://img.shields.io/conda/dn/bioconda/uniqsketch.svg?style=flat
   :target: https://anaconda.org/bioconda/uniqsketch
   :alt:   (downloads)
.. |docker_uniqsketch| image:: https://quay.io/repository/biocontainers/uniqsketch/status
   :target: https://quay.io/repository/biocontainers/uniqsketch
.. _`uniqsketch/tags`: https://quay.io/repository/biocontainers/uniqsketch?tab=tags


.. raw:: html

    <script>
        var package = "uniqsketch";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uniqsketch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uniqsketch/README.html