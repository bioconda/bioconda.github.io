:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minimac4'
.. highlight: bash

minimac4
========

.. conda:recipe:: minimac4
   :replaces_section_title:
   :noindex:

   Computationally efficient genotype imputation

   :homepage: https://github.com/statgen/Minimac4
   :license: GPL-3.0-or-later
   :recipe: /`minimac4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimac4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimac4/meta.yaml>`_

   Minimac4 is a lower memory and more computationally efficient implementation of the genotype imputation algorithms in minimac\/mininac2\/minimac3.


.. conda:package:: minimac4

   |downloads_minimac4| |docker_minimac4|

   :versions:
      
      

      ``4.1.6-0``

      

   
   :depends bcftools: ``>=1.21,<2.0a0``
   :depends cget: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install minimac4

   and update with::

      mamba update minimac4

  To create a new environment, run::

      mamba create --name myenvname minimac4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minimac4:<tag>

   (see `minimac4/tags`_ for valid values for ``<tag>``)


.. |downloads_minimac4| image:: https://img.shields.io/conda/dn/bioconda/minimac4.svg?style=flat
   :target: https://anaconda.org/bioconda/minimac4
   :alt:   (downloads)
.. |docker_minimac4| image:: https://quay.io/repository/biocontainers/minimac4/status
   :target: https://quay.io/repository/biocontainers/minimac4
.. _`minimac4/tags`: https://quay.io/repository/biocontainers/minimac4?tab=tags


.. raw:: html

    <script>
        var package = "minimac4";
        var versions = ["4.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minimac4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minimac4/README.html