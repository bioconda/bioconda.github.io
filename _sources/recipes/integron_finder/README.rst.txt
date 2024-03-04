:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'integron_finder'
.. highlight: bash

integron_finder
===============

.. conda:recipe:: integron_finder
   :replaces_section_title:
   :noindex:

   Integron Finder aims at detecting integrons in DNA sequences

   :homepage: https://github.com/gem-pasteur/Integron_Finder/
   :documentation: https://integronfinder.readthedocs.io/en/latest/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`integron_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/integron_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/integron_finder/meta.yaml>`_
   :links: doi: :doi:`10.3390/microorganisms10040700`

   


.. conda:package:: integron_finder

   |downloads_integron_finder| |docker_integron_finder|

   :versions:
      
      

      ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``2.0rc6-0``

      

   
   :depends biopython: ``>=1.82``
   :depends colorlog: 
   :depends hmmer: ``>=3.1b2,<=3.3.2``
   :depends infernal: ``>=1.1.2,<=1.1.4``
   :depends matplotlib-base: ``>=3.8``
   :depends numpy: ``>=1.26``
   :depends pandas: ``>=2``
   :depends prodigal: ``>=2.6.3``
   :depends python: ``>=3.10``
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

      mamba install integron_finder

   and update with::

      mamba update integron_finder

  To create a new environment, run::

      mamba create --name myenvname integron_finder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/integron_finder:<tag>

   (see `integron_finder/tags`_ for valid values for ``<tag>``)


.. |downloads_integron_finder| image:: https://img.shields.io/conda/dn/bioconda/integron_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/integron_finder
   :alt:   (downloads)
.. |docker_integron_finder| image:: https://quay.io/repository/biocontainers/integron_finder/status
   :target: https://quay.io/repository/biocontainers/integron_finder
.. _`integron_finder/tags`: https://quay.io/repository/biocontainers/integron_finder?tab=tags


.. raw:: html

    <script>
        var package = "integron_finder";
        var versions = ["2.0.3","2.0.3","2.0.2","2.0.1","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/integron_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/integron_finder/README.html