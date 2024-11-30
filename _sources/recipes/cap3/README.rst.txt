:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cap3'
.. highlight: bash

cap3
====

.. conda:recipe:: cap3
   :replaces_section_title:
   :noindex:

   DNA sequence assembly program.

   :homepage: http://seq.cs.iastate.edu/
   :license: Michigan Tech.
   :recipe: /`cap3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cap3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cap3/meta.yaml>`_

   


.. conda:package:: cap3

   |downloads_cap3| |docker_cap3|

   :versions:
      
      

      ``10.2011-3``,  ``10.2011-2``,  ``10.2011-1``,  ``10.2011-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
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

      mamba install cap3

   and update with::

      mamba update cap3

  To create a new environment, run::

      mamba create --name myenvname cap3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cap3:<tag>

   (see `cap3/tags`_ for valid values for ``<tag>``)


.. |downloads_cap3| image:: https://img.shields.io/conda/dn/bioconda/cap3.svg?style=flat
   :target: https://anaconda.org/bioconda/cap3
   :alt:   (downloads)
.. |docker_cap3| image:: https://quay.io/repository/biocontainers/cap3/status
   :target: https://quay.io/repository/biocontainers/cap3
.. _`cap3/tags`: https://quay.io/repository/biocontainers/cap3?tab=tags


.. raw:: html

    <script>
        var package = "cap3";
        var versions = ["10.2011","10.2011","10.2011","10.2011"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cap3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cap3/README.html