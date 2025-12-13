:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nucflag'
.. highlight: bash

nucflag
=======

.. conda:recipe:: nucflag
   :replaces_section_title:
   :noindex:

   NucFlag misassembly identifier.

   :homepage: https://github.com/logsdon-lab/NucFlag
   :license: MIT
   :recipe: /`nucflag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucflag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucflag/meta.yaml>`_

   


.. conda:package:: nucflag

   |downloads_nucflag| |docker_nucflag|

   :versions:
      
      

      ``0.3.8-0``,  ``0.3.7-0``

      

   
   :depends intervaltree: ``>=3.1.0``
   :depends matplotlib-base: ``>=3.8.3``
   :depends numpy: ``>=1.26.4``
   :depends polars: ``>=1.6.0``
   :depends pybigwig: ``>=0.3.24``
   :depends pysam: ``>=0.22.0``
   :depends python: ``>=3.12``
   :depends scipy: ``>=1.12.0``
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

      mamba install nucflag

   and update with::

      mamba update nucflag

  To create a new environment, run::

      mamba create --name myenvname nucflag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nucflag:<tag>

   (see `nucflag/tags`_ for valid values for ``<tag>``)


.. |downloads_nucflag| image:: https://img.shields.io/conda/dn/bioconda/nucflag.svg?style=flat
   :target: https://anaconda.org/bioconda/nucflag
   :alt:   (downloads)
.. |docker_nucflag| image:: https://quay.io/repository/biocontainers/nucflag/status
   :target: https://quay.io/repository/biocontainers/nucflag
.. _`nucflag/tags`: https://quay.io/repository/biocontainers/nucflag?tab=tags


.. raw:: html

    <script>
        var package = "nucflag";
        var versions = ["0.3.8","0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nucflag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nucflag/README.html