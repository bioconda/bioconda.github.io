:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stainwarpy'
.. highlight: bash

stainwarpy
==========

.. conda:recipe:: stainwarpy
   :replaces_section_title:
   :noindex:

   Tools for image registration between multiplexed and H\&E stained tissue images

   :homepage: https://github.com/tckumarasekara/stainwarpy
   :license: MIT
   :recipe: /`stainwarpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stainwarpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stainwarpy/meta.yaml>`_

   


.. conda:package:: stainwarpy

   |downloads_stainwarpy| |docker_stainwarpy|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.8-0``,  ``0.1.7-0``

      

   
   :depends imagecodecs: ``>=2025.11.11``
   :depends numpy: ``>=2.2``
   :depends python: ``>=3.11,<3.13``
   :depends scikit-image: ``>=0.25``
   :depends scipy: ``>=1.16``
   :depends tifffile: ``>=2025.5.10``
   :depends typer: ``>=0.20``
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

      mamba install stainwarpy

   and update with::

      mamba update stainwarpy

  To create a new environment, run::

      mamba create --name myenvname stainwarpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stainwarpy:<tag>

   (see `stainwarpy/tags`_ for valid values for ``<tag>``)


.. |downloads_stainwarpy| image:: https://img.shields.io/conda/dn/bioconda/stainwarpy.svg?style=flat
   :target: https://anaconda.org/bioconda/stainwarpy
   :alt:   (downloads)
.. |docker_stainwarpy| image:: https://quay.io/repository/biocontainers/stainwarpy/status
   :target: https://quay.io/repository/biocontainers/stainwarpy
.. _`stainwarpy/tags`: https://quay.io/repository/biocontainers/stainwarpy?tab=tags


.. raw:: html

    <script>
        var package = "stainwarpy";
        var versions = ["0.2.3","0.2.1","0.2.0","0.1.8","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stainwarpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stainwarpy/README.html