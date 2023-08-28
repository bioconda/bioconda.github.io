:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaomestats'
.. highlight: bash

metaomestats
============

.. conda:recipe:: metaomestats
   :replaces_section_title:
   :noindex:

   Scripts for calculating statistics from FASTA sequences

   :homepage: https://github.com/raw-lab/metaome_stats
   :license: MIT / MIT
   :recipe: /`metaomestats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaomestats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaomestats/meta.yaml>`_

   


.. conda:package:: metaomestats

   |downloads_metaomestats| |docker_metaomestats|

   :versions:
      
      

      ``0.4-0``

      

   
   :depends python: 
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

      mamba install metaomestats

   and update with::

      mamba update metaomestats

  To create a new environment, run::

      mamba create --name myenvname metaomestats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaomestats:<tag>

   (see `metaomestats/tags`_ for valid values for ``<tag>``)


.. |downloads_metaomestats| image:: https://img.shields.io/conda/dn/bioconda/metaomestats.svg?style=flat
   :target: https://anaconda.org/bioconda/metaomestats
   :alt:   (downloads)
.. |docker_metaomestats| image:: https://quay.io/repository/biocontainers/metaomestats/status
   :target: https://quay.io/repository/biocontainers/metaomestats
.. _`metaomestats/tags`: https://quay.io/repository/biocontainers/metaomestats?tab=tags


.. raw:: html

    <script>
        var package = "metaomestats";
        var versions = ["0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaomestats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaomestats/README.html