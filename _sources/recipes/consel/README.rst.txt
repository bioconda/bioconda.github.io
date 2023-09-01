:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'consel'
.. highlight: bash

consel
======

.. conda:recipe:: consel
   :replaces_section_title:
   :noindex:

   CONSEL calculates the probability value \(i.e.\, p\-value\) to assess the confidence in the selection problem. Although CONSEL is applicable to any selection problem\, it is mainly designed for the phylogenetic tree selection

   :homepage: http://stat.sys.i.kyoto-u.ac.jp/prog/consel/
   :license: GNU GENERAL PUBLIC LICENSE Version 2
   :recipe: /`consel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/consel/meta.yaml>`_

   


.. conda:package:: consel

   |downloads_consel| |docker_consel|

   :versions:
      
      

      ``0.20-1``,  ``0.20-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
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

      mamba install consel

   and update with::

      mamba update consel

  To create a new environment, run::

      mamba create --name myenvname consel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/consel:<tag>

   (see `consel/tags`_ for valid values for ``<tag>``)


.. |downloads_consel| image:: https://img.shields.io/conda/dn/bioconda/consel.svg?style=flat
   :target: https://anaconda.org/bioconda/consel
   :alt:   (downloads)
.. |docker_consel| image:: https://quay.io/repository/biocontainers/consel/status
   :target: https://quay.io/repository/biocontainers/consel
.. _`consel/tags`: https://quay.io/repository/biocontainers/consel?tab=tags


.. raw:: html

    <script>
        var package = "consel";
        var versions = ["0.20","0.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/consel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/consel/README.html