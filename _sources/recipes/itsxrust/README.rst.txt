:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'itsxrust'
.. highlight: bash

itsxrust
========

.. conda:recipe:: itsxrust
   :replaces_section_title:
   :noindex:

   ITSxRust is a tool for extracting ITS regions from DNA sequences.

   :homepage: https://github.com/ayobi/ITSxRust
   :license: MIT
   :recipe: /`itsxrust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itsxrust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itsxrust/meta.yaml>`_

   


.. conda:package:: itsxrust

   |downloads_itsxrust| |docker_itsxrust|

   :versions:
      
      

      ``0.2.1-0``,  ``0.1.0-0``

      

   
   :depends hmmer: 
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

      mamba install itsxrust

   and update with::

      mamba update itsxrust

  To create a new environment, run::

      mamba create --name myenvname itsxrust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/itsxrust:<tag>

   (see `itsxrust/tags`_ for valid values for ``<tag>``)


.. |downloads_itsxrust| image:: https://img.shields.io/conda/dn/bioconda/itsxrust.svg?style=flat
   :target: https://anaconda.org/bioconda/itsxrust
   :alt:   (downloads)
.. |docker_itsxrust| image:: https://quay.io/repository/biocontainers/itsxrust/status
   :target: https://quay.io/repository/biocontainers/itsxrust
.. _`itsxrust/tags`: https://quay.io/repository/biocontainers/itsxrust?tab=tags


.. raw:: html

    <script>
        var package = "itsxrust";
        var versions = ["0.2.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itsxrust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itsxrust/README.html