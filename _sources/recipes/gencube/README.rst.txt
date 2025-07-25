:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gencube'
.. highlight: bash

gencube
=======

.. conda:recipe:: gencube
   :replaces_section_title:
   :noindex:

   GenCube enables researchers to search for\, download\, retrieve metadata\, and unify genome assemblies and diverse types of annotations for sequencing\-based experimental data.

   :homepage: https://github.com/snu-cdrc/gencube
   :license: MIT / MIT
   :recipe: /`gencube <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gencube>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gencube/meta.yaml>`_

   


.. conda:package:: gencube

   |downloads_gencube| |docker_gencube|

   :versions:
      
      

      ``1.11.0-0``,  ``1.9.0-0``,  ``1.1.0-0``

      

   
   :depends beautifulsoup4: ``>=4.9.3``
   :depends biopython: ``>=1.79``
   :depends numpy: ``>=1.21.0,<2``
   :depends pandas: ``>=1.0.0``
   :depends python: 
   :depends requests: ``>=2.25.1``
   :depends tabulate: ``>=0.8.9``
   :depends tqdm: ``>=4.61.2``
   :depends urllib3: ``>=1.26.5``
   :depends xmltodict: ``>=0.12.0``
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

      mamba install gencube

   and update with::

      mamba update gencube

  To create a new environment, run::

      mamba create --name myenvname gencube

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gencube:<tag>

   (see `gencube/tags`_ for valid values for ``<tag>``)


.. |downloads_gencube| image:: https://img.shields.io/conda/dn/bioconda/gencube.svg?style=flat
   :target: https://anaconda.org/bioconda/gencube
   :alt:   (downloads)
.. |docker_gencube| image:: https://quay.io/repository/biocontainers/gencube/status
   :target: https://quay.io/repository/biocontainers/gencube
.. _`gencube/tags`: https://quay.io/repository/biocontainers/gencube?tab=tags


.. raw:: html

    <script>
        var package = "gencube";
        var versions = ["1.11.0","1.9.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gencube/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gencube/README.html