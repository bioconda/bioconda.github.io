:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chiron'
.. highlight: bash

chiron
======

.. conda:recipe:: chiron
   :replaces_section_title:
   :noindex:

   A deep neural network basecaller for nanopore sequencing.

   :homepage: https://github.com/haotianteng/chiron
   :license: OTHER / Mozilla Public License 2.0 (MPL 2.0)
   :recipe: /`chiron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chiron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chiron/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/giy037`, biotools: :biotools:`Chiron`

   


.. conda:package:: chiron

   |downloads_chiron| |docker_chiron|

   :versions:
      
      

      ``0.6.1.1-0``,  ``0.6.1-0``,  ``0.4.2.1-1``,  ``0.4.2.1-0``

      

   
   :depends h5py: ``>=2.7.0``
   :depends mappy: ``>=2.10.0``
   :depends numpy: ``>=1.13.3``
   :depends python: ``2.7.*``
   :depends statsmodels: ``>=0.8.0``
   :depends tensorflow: ``>=1.3.0``
   :depends tqdm: ``>=4.23.0``
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

      mamba install chiron

   and update with::

      mamba update chiron

  To create a new environment, run::

      mamba create --name myenvname chiron

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chiron:<tag>

   (see `chiron/tags`_ for valid values for ``<tag>``)


.. |downloads_chiron| image:: https://img.shields.io/conda/dn/bioconda/chiron.svg?style=flat
   :target: https://anaconda.org/bioconda/chiron
   :alt:   (downloads)
.. |docker_chiron| image:: https://quay.io/repository/biocontainers/chiron/status
   :target: https://quay.io/repository/biocontainers/chiron
.. _`chiron/tags`: https://quay.io/repository/biocontainers/chiron?tab=tags


.. raw:: html

    <script>
        var package = "chiron";
        var versions = ["0.6.1.1","0.6.1","0.4.2.1","0.4.2.1"];
    </script>





Notes
-----
conda\-forge\:\:tensorflow requires GLIBC \>\=2.16. It should be present on most\, but not all systems. See https\:\/\/github.com\/conda\-forge\/tensorflow\-feedstock\/issues\/67


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chiron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chiron/README.html