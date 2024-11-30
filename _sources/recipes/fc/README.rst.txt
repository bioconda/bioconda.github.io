:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fc'
.. highlight: bash

fc
==

.. conda:recipe:: fc
   :replaces_section_title:
   :noindex:

   Accurate Assembly of Full\-length Consensus for Viral Quasispecies.

   :homepage: https://github.com/qdu-bioinfo/fc-virus
   :license: MIT / MIT
   :recipe: /`fc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fc/meta.yaml>`_

   


.. conda:package:: fc

   |downloads_fc| |docker_fc|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install fc

   and update with::

      mamba update fc

  To create a new environment, run::

      mamba create --name myenvname fc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fc:<tag>

   (see `fc/tags`_ for valid values for ``<tag>``)


.. |downloads_fc| image:: https://img.shields.io/conda/dn/bioconda/fc.svg?style=flat
   :target: https://anaconda.org/bioconda/fc
   :alt:   (downloads)
.. |docker_fc| image:: https://quay.io/repository/biocontainers/fc/status
   :target: https://quay.io/repository/biocontainers/fc
.. _`fc/tags`: https://quay.io/repository/biocontainers/fc?tab=tags


.. raw:: html

    <script>
        var package = "fc";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fc/README.html