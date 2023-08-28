:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastaindex'
.. highlight: bash

fastaindex
==========

.. conda:recipe:: fastaindex
   :replaces_section_title:
   :noindex:

   FastA indexing and sequence retrival.

   :homepage: https://github.com/lpryszcz/FastaIndex
   :license: GPLv3
   :recipe: /`fastaindex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastaindex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastaindex/meta.yaml>`_

   


.. conda:package:: fastaindex

   |downloads_fastaindex| |docker_fastaindex|

   :versions:
      
      

      ``0.11c-3``,  ``0.11c-2``,  ``0.11c-1``,  ``0.11c-0``

      

   
   :depends python: ``<3``
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

      mamba install fastaindex

   and update with::

      mamba update fastaindex

  To create a new environment, run::

      mamba create --name myenvname fastaindex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastaindex:<tag>

   (see `fastaindex/tags`_ for valid values for ``<tag>``)


.. |downloads_fastaindex| image:: https://img.shields.io/conda/dn/bioconda/fastaindex.svg?style=flat
   :target: https://anaconda.org/bioconda/fastaindex
   :alt:   (downloads)
.. |docker_fastaindex| image:: https://quay.io/repository/biocontainers/fastaindex/status
   :target: https://quay.io/repository/biocontainers/fastaindex
.. _`fastaindex/tags`: https://quay.io/repository/biocontainers/fastaindex?tab=tags


.. raw:: html

    <script>
        var package = "fastaindex";
        var versions = ["0.11c","0.11c","0.11c","0.11c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastaindex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastaindex/README.html