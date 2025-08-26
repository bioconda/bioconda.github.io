:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'probe'
.. highlight: bash

probe
=====

.. conda:recipe:: probe
   :replaces_section_title:
   :noindex:

   Evaluate and visualize protein interatomic packing

   :homepage: http://kinemage.biochem.duke.edu/software/probe/
   :developer docs: https://github.com/rlabduke/probe
   :license: Apache 2.0
   :recipe: /`probe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probe/meta.yaml>`_

   


.. conda:package:: probe

   |downloads_probe| |docker_probe|

   :versions:
      
      

      ``2.18-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install probe

   and update with::

      mamba update probe

  To create a new environment, run::

      mamba create --name myenvname probe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/probe:<tag>

   (see `probe/tags`_ for valid values for ``<tag>``)


.. |downloads_probe| image:: https://img.shields.io/conda/dn/bioconda/probe.svg?style=flat
   :target: https://anaconda.org/bioconda/probe
   :alt:   (downloads)
.. |docker_probe| image:: https://quay.io/repository/biocontainers/probe/status
   :target: https://quay.io/repository/biocontainers/probe
.. _`probe/tags`: https://quay.io/repository/biocontainers/probe?tab=tags


.. raw:: html

    <script>
        var package = "probe";
        var versions = ["2.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/probe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/probe/README.html