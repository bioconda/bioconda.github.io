:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ostir'
.. highlight: bash

ostir
=====

.. conda:recipe:: ostir
   :replaces_section_title:
   :noindex:

   Open Source Transcription Initiation Rates

   :homepage: https://github.com/barricklab/ostir
   :documentation: https://github.com/barricklab/ostir/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ostir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ostir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ostir/meta.yaml>`_

   


.. conda:package:: ostir

   |downloads_ostir| |docker_ostir|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends numpy: ``>=1.20.1``
   :depends python: ``>=3.8``
   :depends viennarna: ``>=2.4.18``
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

      mamba install ostir

   and update with::

      mamba update ostir

  To create a new environment, run::

      mamba create --name myenvname ostir

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ostir:<tag>

   (see `ostir/tags`_ for valid values for ``<tag>``)


.. |downloads_ostir| image:: https://img.shields.io/conda/dn/bioconda/ostir.svg?style=flat
   :target: https://anaconda.org/bioconda/ostir
   :alt:   (downloads)
.. |docker_ostir| image:: https://quay.io/repository/biocontainers/ostir/status
   :target: https://quay.io/repository/biocontainers/ostir
.. _`ostir/tags`: https://quay.io/repository/biocontainers/ostir?tab=tags


.. raw:: html

    <script>
        var package = "ostir";
        var versions = ["1.1.2","1.1.0","1.0.6","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ostir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ostir/README.html