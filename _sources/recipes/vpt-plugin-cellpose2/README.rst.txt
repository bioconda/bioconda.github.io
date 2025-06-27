:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vpt-plugin-cellpose2'
.. highlight: bash

vpt-plugin-cellpose2
====================

.. conda:recipe:: vpt-plugin-cellpose2
   :replaces_section_title:
   :noindex:

   Cellpose2 plugin for the Vizgen Post\-processing Tool

   :homepage: https://github.com/Vizgen/vpt-plugin-cellpose2
   :license: Apache-2.0
   :recipe: /`vpt-plugin-cellpose2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpt-plugin-cellpose2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpt-plugin-cellpose2/meta.yaml>`_

   


.. conda:package:: vpt-plugin-cellpose2

   |downloads_vpt-plugin-cellpose2| |docker_vpt-plugin-cellpose2|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends cellpose: ``2.2.3``
   :depends numpy: ``1.24.3``
   :depends onnx: ``>=1.12.0,<1.15.0``
   :depends openvino: ``>=2023.2.0``
   :depends pandas: ``2.0.3``
   :depends python: ``>=3.9,<3.11``
   :depends pytorch: ``2.0.0``
   :depends vpt-core: ``>=1.2.0``
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

      mamba install vpt-plugin-cellpose2

   and update with::

      mamba update vpt-plugin-cellpose2

  To create a new environment, run::

      mamba create --name myenvname vpt-plugin-cellpose2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vpt-plugin-cellpose2:<tag>

   (see `vpt-plugin-cellpose2/tags`_ for valid values for ``<tag>``)


.. |downloads_vpt-plugin-cellpose2| image:: https://img.shields.io/conda/dn/bioconda/vpt-plugin-cellpose2.svg?style=flat
   :target: https://anaconda.org/bioconda/vpt-plugin-cellpose2
   :alt:   (downloads)
.. |docker_vpt-plugin-cellpose2| image:: https://quay.io/repository/biocontainers/vpt-plugin-cellpose2/status
   :target: https://quay.io/repository/biocontainers/vpt-plugin-cellpose2
.. _`vpt-plugin-cellpose2/tags`: https://quay.io/repository/biocontainers/vpt-plugin-cellpose2?tab=tags


.. raw:: html

    <script>
        var package = "vpt-plugin-cellpose2";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vpt-plugin-cellpose2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vpt-plugin-cellpose2/README.html