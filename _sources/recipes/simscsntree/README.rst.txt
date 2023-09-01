:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simscsntree'
.. highlight: bash

simscsntree
===========

.. conda:recipe:: simscsntree
   :replaces_section_title:
   :noindex:

   Simulating single cell sequencing data

   :homepage: https://github.com/compbiofan/SimSCSnTree
   :license: MIT / MIT
   :recipe: /`simscsntree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simscsntree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simscsntree/meta.yaml>`_

   


.. conda:package:: simscsntree

   |downloads_simscsntree| |docker_simscsntree|

   :versions:
      
      

      ``0.0.9-0``,  ``0.0.8-0``

      

   
   :depends anytree: 
   :depends numpy: ``>=1.18.0``
   :depends python: 
   :depends scipy: ``1.5.0``
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

      mamba install simscsntree

   and update with::

      mamba update simscsntree

  To create a new environment, run::

      mamba create --name myenvname simscsntree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/simscsntree:<tag>

   (see `simscsntree/tags`_ for valid values for ``<tag>``)


.. |downloads_simscsntree| image:: https://img.shields.io/conda/dn/bioconda/simscsntree.svg?style=flat
   :target: https://anaconda.org/bioconda/simscsntree
   :alt:   (downloads)
.. |docker_simscsntree| image:: https://quay.io/repository/biocontainers/simscsntree/status
   :target: https://quay.io/repository/biocontainers/simscsntree
.. _`simscsntree/tags`: https://quay.io/repository/biocontainers/simscsntree?tab=tags


.. raw:: html

    <script>
        var package = "simscsntree";
        var versions = ["0.0.9","0.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simscsntree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simscsntree/README.html