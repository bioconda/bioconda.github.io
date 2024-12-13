:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pandora'
.. highlight: bash

pandora
=======

.. conda:recipe:: pandora
   :replaces_section_title:
   :noindex:

   Pan\-genome inference and genotyping with long noisy or short accurate reads

   :homepage: https://github.com/rmcolq/pandora
   :license: MIT / MIT
   :recipe: /`pandora <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandora>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandora/meta.yaml>`_

   


.. conda:package:: pandora

   |downloads_pandora| |docker_pandora|

   :versions:
      
      

      ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install pandora

   and update with::

      mamba update pandora

  To create a new environment, run::

      mamba create --name myenvname pandora

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pandora:<tag>

   (see `pandora/tags`_ for valid values for ``<tag>``)


.. |downloads_pandora| image:: https://img.shields.io/conda/dn/bioconda/pandora.svg?style=flat
   :target: https://anaconda.org/bioconda/pandora
   :alt:   (downloads)
.. |docker_pandora| image:: https://quay.io/repository/biocontainers/pandora/status
   :target: https://quay.io/repository/biocontainers/pandora
.. _`pandora/tags`: https://quay.io/repository/biocontainers/pandora?tab=tags


.. raw:: html

    <script>
        var package = "pandora";
        var versions = ["0.9.2","0.9.2","0.9.1","0.9.1","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pandora/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pandora/README.html