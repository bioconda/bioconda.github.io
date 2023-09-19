:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'verticall'
.. highlight: bash

verticall
=========

.. conda:recipe:: verticall
   :replaces_section_title:
   :noindex:

   A tool for building recombination\-free trees

   :homepage: https://github.com/rrwick/Verticall
   :documentation: https://github.com/rrwick/Verticall/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`verticall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verticall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verticall/meta.yaml>`_

   


.. conda:package:: verticall

   |downloads_verticall| |docker_verticall|

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.1-0``

      

   
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends plotnine: 
   :depends pytest: 
   :depends python: ``>=3.7``
   :depends svgwrite: 
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

      mamba install verticall

   and update with::

      mamba update verticall

  To create a new environment, run::

      mamba create --name myenvname verticall

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/verticall:<tag>

   (see `verticall/tags`_ for valid values for ``<tag>``)


.. |downloads_verticall| image:: https://img.shields.io/conda/dn/bioconda/verticall.svg?style=flat
   :target: https://anaconda.org/bioconda/verticall
   :alt:   (downloads)
.. |docker_verticall| image:: https://quay.io/repository/biocontainers/verticall/status
   :target: https://quay.io/repository/biocontainers/verticall
.. _`verticall/tags`: https://quay.io/repository/biocontainers/verticall?tab=tags


.. raw:: html

    <script>
        var package = "verticall";
        var versions = ["0.4.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verticall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verticall/README.html