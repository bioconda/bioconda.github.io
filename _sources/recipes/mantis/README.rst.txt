:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mantis'
.. highlight: bash

mantis
======

.. conda:recipe:: mantis
   :replaces_section_title:
   :noindex:

   Mantis\: A Fast\, Small\, and Exact Large\-Scale Sequence\-Search Index

   :homepage: https://github.com/splatlab/mantis
   :license: BSD / BSD-3-Clause
   :recipe: /`mantis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2018.05.021`

   


.. conda:package:: mantis

   |downloads_mantis| |docker_mantis|

   :versions:
      
      

      ``0.2-3``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install mantis

   and update with::

      mamba update mantis

  To create a new environment, run::

      mamba create --name myenvname mantis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mantis:<tag>

   (see `mantis/tags`_ for valid values for ``<tag>``)


.. |downloads_mantis| image:: https://img.shields.io/conda/dn/bioconda/mantis.svg?style=flat
   :target: https://anaconda.org/bioconda/mantis
   :alt:   (downloads)
.. |docker_mantis| image:: https://quay.io/repository/biocontainers/mantis/status
   :target: https://quay.io/repository/biocontainers/mantis
.. _`mantis/tags`: https://quay.io/repository/biocontainers/mantis?tab=tags


.. raw:: html

    <script>
        var package = "mantis";
        var versions = ["0.2","0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mantis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mantis/README.html