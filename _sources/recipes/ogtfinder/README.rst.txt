:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ogtfinder'
.. highlight: bash

ogtfinder
=========

.. conda:recipe:: ogtfinder
   :replaces_section_title:
   :noindex:

   OGTFinder is an optimal growth temperature prediction tool for prokaryotes using proteome\-derived features.

   :homepage: https://github.com/SC-Git1/OGTFinder
   :license: MIT / MIT
   :recipe: /`ogtfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ogtfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ogtfinder/meta.yaml>`_

   


.. conda:package:: ogtfinder

   |downloads_ogtfinder| |docker_ogtfinder|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends biopython: ``>=1.84``
   :depends numpy: ``2.0.0``
   :depends pandas: ``2.2.2``
   :depends python: ``>=3.9``
   :depends scikit-learn: ``1.5.1``
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

      mamba install ogtfinder

   and update with::

      mamba update ogtfinder

  To create a new environment, run::

      mamba create --name myenvname ogtfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ogtfinder:<tag>

   (see `ogtfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_ogtfinder| image:: https://img.shields.io/conda/dn/bioconda/ogtfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/ogtfinder
   :alt:   (downloads)
.. |docker_ogtfinder| image:: https://quay.io/repository/biocontainers/ogtfinder/status
   :target: https://quay.io/repository/biocontainers/ogtfinder
.. _`ogtfinder/tags`: https://quay.io/repository/biocontainers/ogtfinder?tab=tags


.. raw:: html

    <script>
        var package = "ogtfinder";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ogtfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ogtfinder/README.html