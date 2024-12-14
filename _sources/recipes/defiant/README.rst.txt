:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'defiant'
.. highlight: bash

defiant
=======

.. conda:recipe:: defiant
   :replaces_section_title:
   :noindex:

   Differential methylation\, Easy\, Fast\, Identification and ANnoTation.

   :homepage: https://github.com/hhg7/defiant
   :license: GPL / GPL-2.0
   :recipe: /`defiant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/defiant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/defiant/meta.yaml>`_

   


.. conda:package:: defiant

   |downloads_defiant| |docker_defiant|

   :versions:
      
      

      ``1.1.4-6``,  ``1.1.4-5``,  ``1.1.4-4``,  ``1.1.4-3``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends mpc: ``>=1.3.1,<2.0a0``
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

      mamba install defiant

   and update with::

      mamba update defiant

  To create a new environment, run::

      mamba create --name myenvname defiant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/defiant:<tag>

   (see `defiant/tags`_ for valid values for ``<tag>``)


.. |downloads_defiant| image:: https://img.shields.io/conda/dn/bioconda/defiant.svg?style=flat
   :target: https://anaconda.org/bioconda/defiant
   :alt:   (downloads)
.. |docker_defiant| image:: https://quay.io/repository/biocontainers/defiant/status
   :target: https://quay.io/repository/biocontainers/defiant
.. _`defiant/tags`: https://quay.io/repository/biocontainers/defiant?tab=tags


.. raw:: html

    <script>
        var package = "defiant";
        var versions = ["1.1.4","1.1.4","1.1.4","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/defiant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/defiant/README.html