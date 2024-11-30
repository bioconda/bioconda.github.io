:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prosic'
.. highlight: bash

prosic
======

.. conda:recipe:: prosic
   :replaces_section_title:
   :noindex:

   A highly sensitive and accurate Bayesian caller for somatic insertions and deletions.

   :homepage: https://prosic.github.io
   :license: GPLv3
   :recipe: /`prosic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosic/meta.yaml>`_

   


.. conda:package:: prosic

   |downloads_prosic| |docker_prosic|

   :versions:
      
      

      ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libcblas: ``>=3.8.0,<4.0a0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install prosic

   and update with::

      mamba update prosic

  To create a new environment, run::

      mamba create --name myenvname prosic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prosic:<tag>

   (see `prosic/tags`_ for valid values for ``<tag>``)


.. |downloads_prosic| image:: https://img.shields.io/conda/dn/bioconda/prosic.svg?style=flat
   :target: https://anaconda.org/bioconda/prosic
   :alt:   (downloads)
.. |docker_prosic| image:: https://quay.io/repository/biocontainers/prosic/status
   :target: https://quay.io/repository/biocontainers/prosic
.. _`prosic/tags`: https://quay.io/repository/biocontainers/prosic?tab=tags


.. raw:: html

    <script>
        var package = "prosic";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prosic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prosic/README.html