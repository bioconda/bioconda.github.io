:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanonet'
.. highlight: bash

nanonet
=======

.. conda:recipe:: nanonet
   :replaces_section_title:
   :noindex:

   Nanonet provides recurrent neural network basecalling for Oxford Nanopore MinION data.

   :homepage: https://github.com/nanoporetech/nanonet
   :license: MPL-2.0
   :recipe: /`nanonet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanonet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanonet/meta.yaml>`_

   


.. conda:package:: nanonet

   |downloads_nanonet| |docker_nanonet|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends argh: 
   :depends boost: ``1.60*``
   :depends cython: 
   :depends h5py: 
   :depends hdf5: 
   :depends libgcc: 
   :depends myriad: ``>=0.1.2``
   :depends numpy: 
   :depends pathtools: ``>=0.1.1``
   :depends python: ``2.7*``
   :depends pyyaml: ``>=3.10``
   :depends six: 
   :depends watchdog: 
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

      mamba install nanonet

   and update with::

      mamba update nanonet

  To create a new environment, run::

      mamba create --name myenvname nanonet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanonet:<tag>

   (see `nanonet/tags`_ for valid values for ``<tag>``)


.. |downloads_nanonet| image:: https://img.shields.io/conda/dn/bioconda/nanonet.svg?style=flat
   :target: https://anaconda.org/bioconda/nanonet
   :alt:   (downloads)
.. |docker_nanonet| image:: https://quay.io/repository/biocontainers/nanonet/status
   :target: https://quay.io/repository/biocontainers/nanonet
.. _`nanonet/tags`: https://quay.io/repository/biocontainers/nanonet?tab=tags


.. raw:: html

    <script>
        var package = "nanonet";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanonet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanonet/README.html