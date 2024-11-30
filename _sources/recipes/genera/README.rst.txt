:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genera'
.. highlight: bash

genera
======

.. conda:recipe:: genera
   :replaces_section_title:
   :noindex:

   Uncovering gene\-family founder events during major evolutionary transitions in animals\, plants and fungi using GenEra

   :homepage: https://github.com/josuebarrera/GenEra
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`genera <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genera>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genera/meta.yaml>`_

   


.. conda:package:: genera

   |downloads_genera| |docker_genera|

   :versions:
      
      

      ``1.4.2-0``

      

   
   :depends absense: ``>=1.0.1``
   :depends diamond: ``>=2.1.10``
   :depends foldseek: ``3.915ef7d.*``
   :depends mmseqs2: ``14.7e284.*``
   :depends ncbitax2lin: ``>=2.3.2``
   :depends orthofinder: ``2.5.5.*``
   :depends python: ``>=3.8,<3.9``
   :depends r-bio3d: ``2.4_3.*``
   :depends r-optparse: ``1.7.3.*``
   :depends r-phytools: ``>=0.6_99``
   :depends r-seqinr: ``4.2_16.*``
   :depends r-tidyverse: ``1.3.2.*``
   :depends scipy: ``1.7.3.*``
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

      mamba install genera

   and update with::

      mamba update genera

  To create a new environment, run::

      mamba create --name myenvname genera

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genera:<tag>

   (see `genera/tags`_ for valid values for ``<tag>``)


.. |downloads_genera| image:: https://img.shields.io/conda/dn/bioconda/genera.svg?style=flat
   :target: https://anaconda.org/bioconda/genera
   :alt:   (downloads)
.. |docker_genera| image:: https://quay.io/repository/biocontainers/genera/status
   :target: https://quay.io/repository/biocontainers/genera
.. _`genera/tags`: https://quay.io/repository/biocontainers/genera?tab=tags


.. raw:: html

    <script>
        var package = "genera";
        var versions = ["1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genera/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genera/README.html