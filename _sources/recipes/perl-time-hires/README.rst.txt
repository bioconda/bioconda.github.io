:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-time-hires'
.. highlight: bash

perl-time-hires
===============

.. conda:recipe:: perl-time-hires
   :replaces_section_title:
   :noindex:

   High resolution alarm\, sleep\, gettimeofday\, interval timers

   :homepage: http://metacpan.org/pod/Time::HiRes
   :license: perl_5
   :recipe: /`perl-time-hires <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-hires>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-hires/meta.yaml>`_

   


.. conda:package:: perl-time-hires

   |downloads_perl-time-hires| |docker_perl-time-hires|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9764-4</code>,  <code>1.9764-3</code>,  <code>1.9764-2</code>,  <code>1.9764-1</code>,  <code>1.9760-2</code>,  <code>1.9760-1</code>,  <code>1.9760-0</code>,  <code>1.9758-1</code>,  <code>1.9758-0</code>,  </span></summary>
      

      ``1.9764-4``,  ``1.9764-3``,  ``1.9764-2``,  ``1.9764-1``,  ``1.9760-2``,  ``1.9760-1``,  ``1.9760-0``,  ``1.9758-1``,  ``1.9758-0``,  ``1.9728-5``,  ``1.9728-4``,  ``1.9728-2``,  ``1.9728-1``,  ``1.9728-0``,  ``1.9726-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-extutils-makemaker: 
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

      mamba install perl-time-hires

   and update with::

      mamba update perl-time-hires

  To create a new environment, run::

      mamba create --name myenvname perl-time-hires

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-time-hires:<tag>

   (see `perl-time-hires/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-time-hires| image:: https://img.shields.io/conda/dn/bioconda/perl-time-hires.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-time-hires
   :alt:   (downloads)
.. |docker_perl-time-hires| image:: https://quay.io/repository/biocontainers/perl-time-hires/status
   :target: https://quay.io/repository/biocontainers/perl-time-hires
.. _`perl-time-hires/tags`: https://quay.io/repository/biocontainers/perl-time-hires?tab=tags


.. raw:: html

    <script>
        var package = "perl-time-hires";
        var versions = ["1.9764","1.9764","1.9764","1.9764","1.9760"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-time-hires/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-time-hires/README.html