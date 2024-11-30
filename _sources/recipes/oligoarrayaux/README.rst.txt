:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oligoarrayaux'
.. highlight: bash

oligoarrayaux
=============

.. conda:recipe:: oligoarrayaux
   :replaces_section_title:
   :noindex:

   OligoArrayAux is a subset of the UNAFold package for use with OligoArray.

   :homepage: http://unafold.rna.albany.edu/?q=DINAMelt/OligoArrayAux
   :license: ACADEMIC NON-COMMERCIAL USE LICENSE
   :recipe: /`oligoarrayaux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligoarrayaux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligoarrayaux/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-1-60327-429-6_1`

   


.. conda:package:: oligoarrayaux

   |downloads_oligoarrayaux| |docker_oligoarrayaux|

   :versions:
      
      

      ``3.8-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
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

      mamba install oligoarrayaux

   and update with::

      mamba update oligoarrayaux

  To create a new environment, run::

      mamba create --name myenvname oligoarrayaux

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/oligoarrayaux:<tag>

   (see `oligoarrayaux/tags`_ for valid values for ``<tag>``)


.. |downloads_oligoarrayaux| image:: https://img.shields.io/conda/dn/bioconda/oligoarrayaux.svg?style=flat
   :target: https://anaconda.org/bioconda/oligoarrayaux
   :alt:   (downloads)
.. |docker_oligoarrayaux| image:: https://quay.io/repository/biocontainers/oligoarrayaux/status
   :target: https://quay.io/repository/biocontainers/oligoarrayaux
.. _`oligoarrayaux/tags`: https://quay.io/repository/biocontainers/oligoarrayaux?tab=tags


.. raw:: html

    <script>
        var package = "oligoarrayaux";
        var versions = ["3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oligoarrayaux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oligoarrayaux/README.html