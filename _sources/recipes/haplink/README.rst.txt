:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplink'
.. highlight: bash

haplink
=======

.. conda:recipe:: haplink
   :replaces_section_title:
   :noindex:

   Viral haplotype calling via linkage disequilibrium

   :homepage: https://ksumngs.github.io/HapLink.jl
   :license: MIT
   :recipe: /`haplink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplink/meta.yaml>`_

   


.. conda:package:: haplink

   |downloads_haplink| |docker_haplink|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends julia: ``>=1.8``
   :depends libgcc-ng: ``>=12``
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

      mamba install haplink

   and update with::

      mamba update haplink

  To create a new environment, run::

      mamba create --name myenvname haplink

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haplink:<tag>

   (see `haplink/tags`_ for valid values for ``<tag>``)


.. |downloads_haplink| image:: https://img.shields.io/conda/dn/bioconda/haplink.svg?style=flat
   :target: https://anaconda.org/bioconda/haplink
   :alt:   (downloads)
.. |docker_haplink| image:: https://quay.io/repository/biocontainers/haplink/status
   :target: https://quay.io/repository/biocontainers/haplink
.. _`haplink/tags`: https://quay.io/repository/biocontainers/haplink?tab=tags


.. raw:: html

    <script>
        var package = "haplink";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplink/README.html