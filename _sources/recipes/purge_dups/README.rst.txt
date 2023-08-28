:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'purge_dups'
.. highlight: bash

purge_dups
==========

.. conda:recipe:: purge_dups
   :replaces_section_title:
   :noindex:

   purge\_dups is a package used to purge haplotigs and overlaps in an assembly based on read depth.

   :homepage: https://github.com/dfguan/purge_dups
   :license: MIT / MIT
   :recipe: /`purge_dups <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_dups>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_dups/meta.yaml>`_

   


.. conda:package:: purge_dups

   |downloads_purge_dups| |docker_purge_dups|

   :versions:
      
      

      ``1.2.6-1``,  ``1.2.6-0``,  ``1.2.5-2``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.0.1-0``

      

   
   :depends augustus: 
   :depends blast: 
   :depends busco: 
   :depends kmc: 
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends purge-dups-runner: 
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
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

      mamba install purge_dups

   and update with::

      mamba update purge_dups

  To create a new environment, run::

      mamba create --name myenvname purge_dups

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/purge_dups:<tag>

   (see `purge_dups/tags`_ for valid values for ``<tag>``)


.. |downloads_purge_dups| image:: https://img.shields.io/conda/dn/bioconda/purge_dups.svg?style=flat
   :target: https://anaconda.org/bioconda/purge_dups
   :alt:   (downloads)
.. |docker_purge_dups| image:: https://quay.io/repository/biocontainers/purge_dups/status
   :target: https://quay.io/repository/biocontainers/purge_dups
.. _`purge_dups/tags`: https://quay.io/repository/biocontainers/purge_dups?tab=tags


.. raw:: html

    <script>
        var package = "purge_dups";
        var versions = ["1.2.6","1.2.6","1.2.5","1.2.5","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/purge_dups/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/purge_dups/README.html