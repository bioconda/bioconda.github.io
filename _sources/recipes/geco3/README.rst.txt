:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geco3'
.. highlight: bash

geco3
=====

.. conda:recipe:: geco3
   :replaces_section_title:
   :noindex:

   An efficient DNA sequence compressor using Neural Networks

   :homepage: https://github.com/cobilab/geco3
   :license: GPL / GPL3
   :recipe: /`geco3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geco3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geco3/meta.yaml>`_

   


.. conda:package:: geco3

   |downloads_geco3| |docker_geco3|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install geco3

   and update with::

      mamba update geco3

  To create a new environment, run::

      mamba create --name myenvname geco3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/geco3:<tag>

   (see `geco3/tags`_ for valid values for ``<tag>``)


.. |downloads_geco3| image:: https://img.shields.io/conda/dn/bioconda/geco3.svg?style=flat
   :target: https://anaconda.org/bioconda/geco3
   :alt:   (downloads)
.. |docker_geco3| image:: https://quay.io/repository/biocontainers/geco3/status
   :target: https://quay.io/repository/biocontainers/geco3
.. _`geco3/tags`: https://quay.io/repository/biocontainers/geco3?tab=tags


.. raw:: html

    <script>
        var package = "geco3";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geco3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geco3/README.html