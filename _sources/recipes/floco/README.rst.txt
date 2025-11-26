:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'floco'
.. highlight: bash

floco
=====

.. conda:recipe:: floco
   :replaces_section_title:
   :noindex:

   Sequence\-to\-graph alignment based copy number calling using a network flow formulation

   :homepage: https://github.com/hugocarmaga/floco
   :license: MIT
   :recipe: /`floco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/floco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/floco/meta.yaml>`_

   


.. conda:package:: floco

   |downloads_floco| |docker_floco|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends numpy: ``>=2.3.2``
   :depends python: ``>=3.10``
   :depends scikit-learn: ``>=1.7.1``
   :depends scipy: ``>=1.16.1``
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

      mamba install floco

   and update with::

      mamba update floco

  To create a new environment, run::

      mamba create --name myenvname floco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/floco:<tag>

   (see `floco/tags`_ for valid values for ``<tag>``)


.. |downloads_floco| image:: https://img.shields.io/conda/dn/bioconda/floco.svg?style=flat
   :target: https://anaconda.org/bioconda/floco
   :alt:   (downloads)
.. |docker_floco| image:: https://quay.io/repository/biocontainers/floco/status
   :target: https://quay.io/repository/biocontainers/floco
.. _`floco/tags`: https://quay.io/repository/biocontainers/floco?tab=tags


.. raw:: html

    <script>
        var package = "floco";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/floco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/floco/README.html