:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sloika'
.. highlight: bash

sloika
======

.. conda:recipe:: sloika
   :replaces_section_title:
   :noindex:

   Sloika is Oxford Nanopore Technologies\' software for training neural network models for base calling

   :homepage: https://github.com/nanoporetech/sloika
   :license: OTHER / Mozilla Public License 2.0 (MPL 2.0)
   :recipe: /`sloika <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sloika>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sloika/meta.yaml>`_

   


.. conda:package:: sloika

   |downloads_sloika| |docker_sloika|

   :versions:
      
      

      ``2.0.1-0``

      

   
   :depends biopython: ``>=1.63``
   :depends h5py: ``>=2.2.1,<=2.6.0``
   :depends hdf5: ``1.8.17*``
   :depends numpy: ``1.12*``
   :depends theano: ``0.8.2``
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

      mamba install sloika

   and update with::

      mamba update sloika

  To create a new environment, run::

      mamba create --name myenvname sloika

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sloika:<tag>

   (see `sloika/tags`_ for valid values for ``<tag>``)


.. |downloads_sloika| image:: https://img.shields.io/conda/dn/bioconda/sloika.svg?style=flat
   :target: https://anaconda.org/bioconda/sloika
   :alt:   (downloads)
.. |docker_sloika| image:: https://quay.io/repository/biocontainers/sloika/status
   :target: https://quay.io/repository/biocontainers/sloika
.. _`sloika/tags`: https://quay.io/repository/biocontainers/sloika?tab=tags


.. raw:: html

    <script>
        var package = "sloika";
        var versions = ["2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sloika/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sloika/README.html