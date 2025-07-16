:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pcangsd'
.. highlight: bash

pcangsd
=======

.. conda:recipe:: pcangsd
   :replaces_section_title:
   :noindex:

   Framework for analyzing low\-depth next\-generation sequencing \(NGS\)
   data in heterogeneous\/structured populations using principal component
   analysis \(PCA\).


   :homepage: https://github.com/Rosemeis/pcangsd
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pcangsd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcangsd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcangsd/meta.yaml>`_

   


.. conda:package:: pcangsd

   |downloads_pcangsd| |docker_pcangsd|

   :versions:
      
      

      ``1.36.4-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends numpy: ``>2.0.0``
   :depends numpy: ``>=1.21,<3``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: ``>1.14.0``
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

      mamba install pcangsd

   and update with::

      mamba update pcangsd

  To create a new environment, run::

      mamba create --name myenvname pcangsd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pcangsd:<tag>

   (see `pcangsd/tags`_ for valid values for ``<tag>``)


.. |downloads_pcangsd| image:: https://img.shields.io/conda/dn/bioconda/pcangsd.svg?style=flat
   :target: https://anaconda.org/bioconda/pcangsd
   :alt:   (downloads)
.. |docker_pcangsd| image:: https://quay.io/repository/biocontainers/pcangsd/status
   :target: https://quay.io/repository/biocontainers/pcangsd
.. _`pcangsd/tags`: https://quay.io/repository/biocontainers/pcangsd?tab=tags


.. raw:: html

    <script>
        var package = "pcangsd";
        var versions = ["1.36.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pcangsd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pcangsd/README.html