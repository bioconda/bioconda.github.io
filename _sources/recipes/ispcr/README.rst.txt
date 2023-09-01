:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ispcr'
.. highlight: bash

ispcr
=====

.. conda:recipe:: ispcr
   :replaces_section_title:
   :noindex:

   In silico PCR

   :homepage: https://users.soe.ucsc.edu/~kent/
   :license: License is hereby granted for personal, academic, and non-profit use.
   :recipe: /`ispcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ispcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ispcr/meta.yaml>`_
   :links: biotools: :biotools:`ispcr`

   


.. conda:package:: ispcr

   |downloads_ispcr| |docker_ispcr|

   :versions:
      
      

      ``33-5``,  ``33-4``,  ``33-3``,  ``33-2``,  ``33-1``,  ``33-0``

      

   
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

      mamba install ispcr

   and update with::

      mamba update ispcr

  To create a new environment, run::

      mamba create --name myenvname ispcr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ispcr:<tag>

   (see `ispcr/tags`_ for valid values for ``<tag>``)


.. |downloads_ispcr| image:: https://img.shields.io/conda/dn/bioconda/ispcr.svg?style=flat
   :target: https://anaconda.org/bioconda/ispcr
   :alt:   (downloads)
.. |docker_ispcr| image:: https://quay.io/repository/biocontainers/ispcr/status
   :target: https://quay.io/repository/biocontainers/ispcr
.. _`ispcr/tags`: https://quay.io/repository/biocontainers/ispcr?tab=tags


.. raw:: html

    <script>
        var package = "ispcr";
        var versions = ["33","33","33","33","33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ispcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ispcr/README.html