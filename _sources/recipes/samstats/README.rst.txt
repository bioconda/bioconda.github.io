:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samstats'
.. highlight: bash

samstats
========

.. conda:recipe:: samstats
   :replaces_section_title:
   :noindex:

   SAM file alignment statistics at the read level

   :homepage: https://github.com/kundajelab/SAMstats
   :license: MIT
   :recipe: /`samstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samstats/meta.yaml>`_

   Scripts that implement samtools flagstat functionality\, but provide statistics for individual reads rather than individual alignments


.. conda:package:: samstats

   |downloads_samstats| |docker_samstats|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends multiprocess: 
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

      mamba install samstats

   and update with::

      mamba update samstats

  To create a new environment, run::

      mamba create --name myenvname samstats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samstats:<tag>

   (see `samstats/tags`_ for valid values for ``<tag>``)


.. |downloads_samstats| image:: https://img.shields.io/conda/dn/bioconda/samstats.svg?style=flat
   :target: https://anaconda.org/bioconda/samstats
   :alt:   (downloads)
.. |docker_samstats| image:: https://quay.io/repository/biocontainers/samstats/status
   :target: https://quay.io/repository/biocontainers/samstats
.. _`samstats/tags`: https://quay.io/repository/biocontainers/samstats?tab=tags


.. raw:: html

    <script>
        var package = "samstats";
        var versions = ["0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samstats/README.html