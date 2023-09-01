:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igor_vdj'
.. highlight: bash

igor_vdj
========

.. conda:recipe:: igor_vdj
   :replaces_section_title:
   :noindex:

   IGoR is a C\+\+ software designed to infer V\(D\)J recombination related processes from sequencing data.

   :homepage: https://github.com/qmarcou/IGoR
   :license: GPL3
   :recipe: /`igor_vdj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igor_vdj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igor_vdj/meta.yaml>`_

   


.. conda:package:: igor_vdj

   |downloads_igor_vdj| |docker_igor_vdj|

   :versions:
      
      

      ``1.4.0-0``,  ``1.3.0-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
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

      mamba install igor_vdj

   and update with::

      mamba update igor_vdj

  To create a new environment, run::

      mamba create --name myenvname igor_vdj

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/igor_vdj:<tag>

   (see `igor_vdj/tags`_ for valid values for ``<tag>``)


.. |downloads_igor_vdj| image:: https://img.shields.io/conda/dn/bioconda/igor_vdj.svg?style=flat
   :target: https://anaconda.org/bioconda/igor_vdj
   :alt:   (downloads)
.. |docker_igor_vdj| image:: https://quay.io/repository/biocontainers/igor_vdj/status
   :target: https://quay.io/repository/biocontainers/igor_vdj
.. _`igor_vdj/tags`: https://quay.io/repository/biocontainers/igor_vdj?tab=tags


.. raw:: html

    <script>
        var package = "igor_vdj";
        var versions = ["1.4.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igor_vdj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igor_vdj/README.html