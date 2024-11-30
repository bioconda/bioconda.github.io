:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hylight'
.. highlight: bash

hylight
=======

.. conda:recipe:: hylight
   :replaces_section_title:
   :noindex:

   Strain aware assembly of low coverage metagenomes.

   :homepage: https://github.com/LuoGroup2023/HyLight
   :license: MIT / MIT
   :recipe: /`hylight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hylight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hylight/meta.yaml>`_

   


.. conda:package:: hylight

   |downloads_hylight| |docker_hylight|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bfc: ``r181``
   :depends boost-cpp: ``1.82``
   :depends fmlrc2: ``0.1.7``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends minimap2: ``2.26``
   :depends numpy: ``1.19.5``
   :depends pandas: ``1.1.5``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends racon: ``1.5.0``
   :depends ropebwt2: ``r187``
   :depends scipy: ``1.5.3``
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

      mamba install hylight

   and update with::

      mamba update hylight

  To create a new environment, run::

      mamba create --name myenvname hylight

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hylight:<tag>

   (see `hylight/tags`_ for valid values for ``<tag>``)


.. |downloads_hylight| image:: https://img.shields.io/conda/dn/bioconda/hylight.svg?style=flat
   :target: https://anaconda.org/bioconda/hylight
   :alt:   (downloads)
.. |docker_hylight| image:: https://quay.io/repository/biocontainers/hylight/status
   :target: https://quay.io/repository/biocontainers/hylight
.. _`hylight/tags`: https://quay.io/repository/biocontainers/hylight?tab=tags


.. raw:: html

    <script>
        var package = "hylight";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hylight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hylight/README.html