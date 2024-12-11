:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoblaster'
.. highlight: bash

nanoblaster
===========

.. conda:recipe:: nanoblaster
   :replaces_section_title:
   :noindex:

   Basic Local Alignment and Search Tool for Oxford Nanopore Long Sequences

   :homepage: https://github.com/ruhulsbu/NanoBLASTer
   :license: MIT
   :recipe: /`nanoblaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoblaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoblaster/meta.yaml>`_

   


.. conda:package:: nanoblaster

   |downloads_nanoblaster| |docker_nanoblaster|

   :versions:
      
      

      ``0.16-7``,  ``0.16-6``,  ``0.16-5``,  ``0.16-4``,  ``0.16-3``,  ``0.16-2``,  ``0.16-1``,  ``0.16-0``

      

   
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

      mamba install nanoblaster

   and update with::

      mamba update nanoblaster

  To create a new environment, run::

      mamba create --name myenvname nanoblaster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanoblaster:<tag>

   (see `nanoblaster/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoblaster| image:: https://img.shields.io/conda/dn/bioconda/nanoblaster.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoblaster
   :alt:   (downloads)
.. |docker_nanoblaster| image:: https://quay.io/repository/biocontainers/nanoblaster/status
   :target: https://quay.io/repository/biocontainers/nanoblaster
.. _`nanoblaster/tags`: https://quay.io/repository/biocontainers/nanoblaster?tab=tags


.. raw:: html

    <script>
        var package = "nanoblaster";
        var versions = ["0.16","0.16","0.16","0.16","0.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoblaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoblaster/README.html