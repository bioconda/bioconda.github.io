:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nrpys'
.. highlight: bash

nrpys
=====

.. conda:recipe:: nrpys
   :replaces_section_title:
   :noindex:

   Python language bindings for nrps\-rs substrate specificity predictor.

   :homepage: https://github.com/kblin/nrpys
   :license: AGPL-3.0-or-later
   :recipe: /`nrpys <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nrpys>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nrpys/meta.yaml>`_

   


.. conda:package:: nrpys

   |downloads_nrpys| |docker_nrpys|

   :versions:
      
      

      ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.11,<3.12.0a0``
   :depends python_abi: ``3.11.* *_cp311``
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

      mamba install nrpys

   and update with::

      mamba update nrpys

  To create a new environment, run::

      mamba create --name myenvname nrpys

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nrpys:<tag>

   (see `nrpys/tags`_ for valid values for ``<tag>``)


.. |downloads_nrpys| image:: https://img.shields.io/conda/dn/bioconda/nrpys.svg?style=flat
   :target: https://anaconda.org/bioconda/nrpys
   :alt:   (downloads)
.. |docker_nrpys| image:: https://quay.io/repository/biocontainers/nrpys/status
   :target: https://quay.io/repository/biocontainers/nrpys
.. _`nrpys/tags`: https://quay.io/repository/biocontainers/nrpys?tab=tags


.. raw:: html

    <script>
        var package = "nrpys";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nrpys/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nrpys/README.html