:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'showali'
.. highlight: bash

showali
=======

.. conda:recipe:: showali
   :replaces_section_title:
   :noindex:

   Minimalistic TUI viewer for aligned biological sequences \(FASTA\, ALN\, MAF\, PHYLIP\)

   :homepage: https://github.com/kirilenkobm/showali
   :license: Unlicense
   :recipe: /`showali <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/showali>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/showali/meta.yaml>`_

   


.. conda:package:: showali

   |downloads_showali| |docker_showali|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install showali

   and update with::

      mamba update showali

  To create a new environment, run::

      mamba create --name myenvname showali

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/showali:<tag>

   (see `showali/tags`_ for valid values for ``<tag>``)


.. |downloads_showali| image:: https://img.shields.io/conda/dn/bioconda/showali.svg?style=flat
   :target: https://anaconda.org/bioconda/showali
   :alt:   (downloads)
.. |docker_showali| image:: https://quay.io/repository/biocontainers/showali/status
   :target: https://quay.io/repository/biocontainers/showali
.. _`showali/tags`: https://quay.io/repository/biocontainers/showali?tab=tags


.. raw:: html

    <script>
        var package = "showali";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/showali/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/showali/README.html