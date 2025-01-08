:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taranys'
.. highlight: bash

taranys
=======

.. conda:recipe:: taranys
   :replaces_section_title:
   :noindex:

   cg\/wgMLST allele calling software\, schema evaluation and allele distance estimation for outbreak reserch.

   :homepage: https://github.com/BU-ISCIII/taranys
   :license: GPL-3.0-or-later
   :recipe: /`taranys <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taranys>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taranys/meta.yaml>`_

   


.. conda:package:: taranys

   |downloads_taranys| |docker_taranys|

   :versions:
      
      

      ``3.0.1-0``

      

   
   :depends bio: ``>=1.6.0``
   :depends blast: ``>=2.9``
   :depends click: ``>=8.1.3``
   :depends igraph: ``>=0.9.8``
   :depends leidenalg: ``>=0.9.1``
   :depends mafft: ``>=7.505``
   :depends mash: ``>=2``
   :depends plotly: ``>=5.11.0``
   :depends poetry: ``>=1.7.1``
   :depends prodigal: ``>=2.6.3``
   :depends prokka: ``>=1.14``
   :depends python: ``>=3.10``
   :depends python-kaleido: ``>=0.2.1``
   :depends questionary: ``>=1.10.0``
   :depends rich: ``>=13.4.1``
   :depends scikit-learn: ``>=1.2.0``
   :depends six: ``>=1.16.0``
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

      mamba install taranys

   and update with::

      mamba update taranys

  To create a new environment, run::

      mamba create --name myenvname taranys

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taranys:<tag>

   (see `taranys/tags`_ for valid values for ``<tag>``)


.. |downloads_taranys| image:: https://img.shields.io/conda/dn/bioconda/taranys.svg?style=flat
   :target: https://anaconda.org/bioconda/taranys
   :alt:   (downloads)
.. |docker_taranys| image:: https://quay.io/repository/biocontainers/taranys/status
   :target: https://quay.io/repository/biocontainers/taranys
.. _`taranys/tags`: https://quay.io/repository/biocontainers/taranys?tab=tags


.. raw:: html

    <script>
        var package = "taranys";
        var versions = ["3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taranys/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taranys/README.html