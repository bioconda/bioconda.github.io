:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hsdfinder'
.. highlight: bash

hsdfinder
=========

.. conda:recipe:: hsdfinder
   :replaces_section_title:
   :noindex:

   a tool to predict highly similar duplicates \(HSDs\) in eukaryotes

   :homepage: https://github.com/zx0223winner/HSDFinder
   :license: MIT
   :recipe: /`hsdfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hsdfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hsdfinder/meta.yaml>`_

   


.. conda:package:: hsdfinder

   |downloads_hsdfinder| |docker_hsdfinder|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends pandas: 
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hsdfinder

   and update with::

      mamba update hsdfinder

  To create a new environment, run::

      mamba create --name myenvname hsdfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hsdfinder:<tag>

   (see `hsdfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_hsdfinder| image:: https://img.shields.io/conda/dn/bioconda/hsdfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/hsdfinder
   :alt:   (downloads)
.. |docker_hsdfinder| image:: https://quay.io/repository/biocontainers/hsdfinder/status
   :target: https://quay.io/repository/biocontainers/hsdfinder
.. _`hsdfinder/tags`: https://quay.io/repository/biocontainers/hsdfinder?tab=tags


.. raw:: html

    <script>
        var package = "hsdfinder";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hsdfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hsdfinder/README.html