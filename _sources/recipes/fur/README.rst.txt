:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fur'
.. highlight: bash

fur
===

.. conda:recipe:: fur
   :replaces_section_title:
   :noindex:

   Find unique genomic regions from target and neighbor genomes

   :homepage: https://github.com/evolbioinf/fur
   :license: GPL-3.0-or-later
   :recipe: /`fur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fur/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab022`, doi: :doi:`10.1093/bioadv/vbae113`

   


.. conda:package:: fur

   |downloads_fur| |docker_fur|

   :versions:
      
      

      ``4.3-0``

      

   
   :depends blast: 
   :depends libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends libgcc: ``>=14``
   :depends phylonium: 
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

      mamba install fur

   and update with::

      mamba update fur

  To create a new environment, run::

      mamba create --name myenvname fur

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fur:<tag>

   (see `fur/tags`_ for valid values for ``<tag>``)


.. |downloads_fur| image:: https://img.shields.io/conda/dn/bioconda/fur.svg?style=flat
   :target: https://anaconda.org/bioconda/fur
   :alt:   (downloads)
.. |docker_fur| image:: https://quay.io/repository/biocontainers/fur/status
   :target: https://quay.io/repository/biocontainers/fur
.. _`fur/tags`: https://quay.io/repository/biocontainers/fur?tab=tags


.. raw:: html

    <script>
        var package = "fur";
        var versions = ["4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fur/README.html