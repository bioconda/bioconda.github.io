:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'intervalstats'
.. highlight: bash

intervalstats
=============

.. conda:recipe:: intervalstats
   :replaces_section_title:
   :noindex:

   Tool for assessing similarity between sets of intervals

   :homepage: http://sonorus.princeton.edu/IntervalStats/
   :license: unknown
   :recipe: /`intervalstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intervalstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intervalstats/meta.yaml>`_

   


.. conda:package:: intervalstats

   |downloads_intervalstats| |docker_intervalstats|

   :versions:
      
      

      ``1.01-0``

      

   
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

      mamba install intervalstats

   and update with::

      mamba update intervalstats

  To create a new environment, run::

      mamba create --name myenvname intervalstats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/intervalstats:<tag>

   (see `intervalstats/tags`_ for valid values for ``<tag>``)


.. |downloads_intervalstats| image:: https://img.shields.io/conda/dn/bioconda/intervalstats.svg?style=flat
   :target: https://anaconda.org/bioconda/intervalstats
   :alt:   (downloads)
.. |docker_intervalstats| image:: https://quay.io/repository/biocontainers/intervalstats/status
   :target: https://quay.io/repository/biocontainers/intervalstats
.. _`intervalstats/tags`: https://quay.io/repository/biocontainers/intervalstats?tab=tags


.. raw:: html

    <script>
        var package = "intervalstats";
        var versions = ["1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intervalstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intervalstats/README.html