:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'illuminate'
.. highlight: bash

illuminate
==========

.. conda:recipe:: illuminate
   :replaces_section_title:
   :noindex:

   Analytics toolkit for Illumina sequencer metrics.

   :homepage: https://bitbucket.org/invitae/illuminate
   :license: MIT / MIT
   :recipe: /`illuminate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illuminate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illuminate/meta.yaml>`_
   :links: biotools: :biotools:`illuminate`

   


.. conda:package:: illuminate

   |downloads_illuminate| |docker_illuminate|

   :versions:
      
      

      ``0.6.3-0``

      

   
   :depends bitstring: ``>=3.1.0``
   :depends docopt: 
   :depends numpy: ``>=1.6.2``
   :depends openpyxl: ``==1.8.6``
   :depends pandas: ``>=0.14``
   :depends python: ``2.7*``
   :depends xmltodict: 
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

      mamba install illuminate

   and update with::

      mamba update illuminate

  To create a new environment, run::

      mamba create --name myenvname illuminate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/illuminate:<tag>

   (see `illuminate/tags`_ for valid values for ``<tag>``)


.. |downloads_illuminate| image:: https://img.shields.io/conda/dn/bioconda/illuminate.svg?style=flat
   :target: https://anaconda.org/bioconda/illuminate
   :alt:   (downloads)
.. |docker_illuminate| image:: https://quay.io/repository/biocontainers/illuminate/status
   :target: https://quay.io/repository/biocontainers/illuminate
.. _`illuminate/tags`: https://quay.io/repository/biocontainers/illuminate?tab=tags


.. raw:: html

    <script>
        var package = "illuminate";
        var versions = ["0.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/illuminate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/illuminate/README.html