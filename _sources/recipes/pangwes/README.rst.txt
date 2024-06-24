:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangwes'
.. highlight: bash

pangwes
=======

.. conda:recipe:: pangwes
   :replaces_section_title:
   :noindex:

   Performing pangenome\-spanning epistasis and co\-selection analysis via de Bruijn graphs

   :homepage: https://github.com/jurikuronen/PANGWES
   :license: MIT
   :recipe: /`pangwes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangwes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangwes/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.09.07.556769`

   


.. conda:package:: pangwes

   |downloads_pangwes| |docker_pangwes|

   :versions:
      
      

      ``0.2.0_alpha-0``

      

   
   :depends cuttlefish: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: 
   :depends spydrpick: 
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

      mamba install pangwes

   and update with::

      mamba update pangwes

  To create a new environment, run::

      mamba create --name myenvname pangwes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pangwes:<tag>

   (see `pangwes/tags`_ for valid values for ``<tag>``)


.. |downloads_pangwes| image:: https://img.shields.io/conda/dn/bioconda/pangwes.svg?style=flat
   :target: https://anaconda.org/bioconda/pangwes
   :alt:   (downloads)
.. |docker_pangwes| image:: https://quay.io/repository/biocontainers/pangwes/status
   :target: https://quay.io/repository/biocontainers/pangwes
.. _`pangwes/tags`: https://quay.io/repository/biocontainers/pangwes?tab=tags


.. raw:: html

    <script>
        var package = "pangwes";
        var versions = ["0.2.0_alpha"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangwes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangwes/README.html