:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aci'
.. highlight: bash

aci
===

.. conda:recipe:: aci
   :replaces_section_title:
   :noindex:

   Visualizes coverage for amplicons

   :homepage: https://github.com/erinyoung/ACI
   :documentation: https://github.com/erinyoung/ACI/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`aci <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aci>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aci/meta.yaml>`_

   


.. conda:package:: aci

   |downloads_aci| |docker_aci|

   :versions:
      
      

      ``1.4.20240116-0``,  ``1.2.20231229-0``

      

   
   :depends matplotlib-base: ``>=3.8.2``
   :depends numpy: ``>=1.26.2``
   :depends pandas: ``>=2.1.4``
   :depends pysam: ``>=0.22.0``
   :depends python: ``>=3.8,<4.0``
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

      mamba install aci

   and update with::

      mamba update aci

  To create a new environment, run::

      mamba create --name myenvname aci

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aci:<tag>

   (see `aci/tags`_ for valid values for ``<tag>``)


.. |downloads_aci| image:: https://img.shields.io/conda/dn/bioconda/aci.svg?style=flat
   :target: https://anaconda.org/bioconda/aci
   :alt:   (downloads)
.. |docker_aci| image:: https://quay.io/repository/biocontainers/aci/status
   :target: https://quay.io/repository/biocontainers/aci
.. _`aci/tags`: https://quay.io/repository/biocontainers/aci?tab=tags


.. raw:: html

    <script>
        var package = "aci";
        var versions = ["1.4.20240116","1.2.20231229"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aci/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aci/README.html