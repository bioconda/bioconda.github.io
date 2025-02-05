:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vpt-segmentation-packing'
.. highlight: bash

vpt-segmentation-packing
========================

.. conda:recipe:: vpt-segmentation-packing
   :replaces_section_title:
   :noindex:

   Packs cell boundaries for the Vizgen vzg2 file format

   :homepage: https://github.com/Vizgen/vpt-segmentation-packing
   :license: Apache-2.0
   :recipe: /`vpt-segmentation-packing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpt-segmentation-packing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpt-segmentation-packing/meta.yaml>`_

   


.. conda:package:: vpt-segmentation-packing

   |downloads_vpt-segmentation-packing| |docker_vpt-segmentation-packing|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends mapbox_earcut: ``>=1.0.1``
   :depends numpy: ``>=1.24.3``
   :depends pandas: ``>=2.0.3``
   :depends pyarrow: ``>=8.0.0``
   :depends python: ``>=3.9,<3.11``
   :depends shapely: ``>=2.0.0``
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

      mamba install vpt-segmentation-packing

   and update with::

      mamba update vpt-segmentation-packing

  To create a new environment, run::

      mamba create --name myenvname vpt-segmentation-packing

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vpt-segmentation-packing:<tag>

   (see `vpt-segmentation-packing/tags`_ for valid values for ``<tag>``)


.. |downloads_vpt-segmentation-packing| image:: https://img.shields.io/conda/dn/bioconda/vpt-segmentation-packing.svg?style=flat
   :target: https://anaconda.org/bioconda/vpt-segmentation-packing
   :alt:   (downloads)
.. |docker_vpt-segmentation-packing| image:: https://quay.io/repository/biocontainers/vpt-segmentation-packing/status
   :target: https://quay.io/repository/biocontainers/vpt-segmentation-packing
.. _`vpt-segmentation-packing/tags`: https://quay.io/repository/biocontainers/vpt-segmentation-packing?tab=tags


.. raw:: html

    <script>
        var package = "vpt-segmentation-packing";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vpt-segmentation-packing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vpt-segmentation-packing/README.html