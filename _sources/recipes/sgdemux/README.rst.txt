:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sgdemux'
.. highlight: bash

sgdemux
=======

.. conda:recipe:: sgdemux
   :replaces_section_title:
   :noindex:

   Tool for demultiplexing sequencing data generated on Singular Genomics\' sequencing instruments.

   :homepage: https://github.com/Singular-Genomics/singular-demux
   :license: Other / For Singular G4™ Sequencing Platform only
   :recipe: /`sgdemux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sgdemux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sgdemux/meta.yaml>`_

   


.. conda:package:: sgdemux

   |downloads_sgdemux| |docker_sgdemux|

   :versions:
      
      

      ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sgdemux

   and update with::

      mamba update sgdemux

  To create a new environment, run::

      mamba create --name myenvname sgdemux

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sgdemux:<tag>

   (see `sgdemux/tags`_ for valid values for ``<tag>``)


.. |downloads_sgdemux| image:: https://img.shields.io/conda/dn/bioconda/sgdemux.svg?style=flat
   :target: https://anaconda.org/bioconda/sgdemux
   :alt:   (downloads)
.. |docker_sgdemux| image:: https://quay.io/repository/biocontainers/sgdemux/status
   :target: https://quay.io/repository/biocontainers/sgdemux
.. _`sgdemux/tags`: https://quay.io/repository/biocontainers/sgdemux?tab=tags


.. raw:: html

    <script>
        var package = "sgdemux";
        var versions = ["1.2.0","1.2.0","1.2.0","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sgdemux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sgdemux/README.html