:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'breakdancer'
.. highlight: bash

breakdancer
===========

.. conda:recipe:: breakdancer
   :replaces_section_title:
   :noindex:

   SV detection from paired end reads mapping

   :homepage: https://github.com/genome/breakdancer
   :license: GPLv3
   :recipe: /`breakdancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakdancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakdancer/meta.yaml>`_
   :links: biotools: :biotools:`breakdancer`

   


.. conda:package:: breakdancer

   |downloads_breakdancer| |docker_breakdancer|

   :versions:
      
      

      ``1.4.5-11``,  ``1.4.5-10``,  ``1.4.5-9``,  ``1.4.5-8``,  ``1.4.5-7``,  ``1.4.5-6``,  ``1.4.5-2``,  ``1.4.5-1``,  ``1.4.5-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ncurses: ``>=6.3,<7.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-gdgraph-histogram: 
   :depends perl-math-cdf: 
   :depends perl-statistics-descriptive: 
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

      mamba install breakdancer

   and update with::

      mamba update breakdancer

  To create a new environment, run::

      mamba create --name myenvname breakdancer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/breakdancer:<tag>

   (see `breakdancer/tags`_ for valid values for ``<tag>``)


.. |downloads_breakdancer| image:: https://img.shields.io/conda/dn/bioconda/breakdancer.svg?style=flat
   :target: https://anaconda.org/bioconda/breakdancer
   :alt:   (downloads)
.. |docker_breakdancer| image:: https://quay.io/repository/biocontainers/breakdancer/status
   :target: https://quay.io/repository/biocontainers/breakdancer
.. _`breakdancer/tags`: https://quay.io/repository/biocontainers/breakdancer?tab=tags


.. raw:: html

    <script>
        var package = "breakdancer";
        var versions = ["1.4.5","1.4.5","1.4.5","1.4.5","1.4.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breakdancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breakdancer/README.html