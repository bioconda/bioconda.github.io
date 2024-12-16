:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'softsv'
.. highlight: bash

softsv
======

.. conda:recipe:: softsv
   :replaces_section_title:
   :noindex:

   SoftSV is a tool for the detection of small and large deletions\, inversions\, tandem duplications and translocations from paired\-end sequencing data.

   :homepage: https://sourceforge.net/projects/softsv
   :license: GPL3 / GPL-3.0-only
   :recipe: /`softsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/softsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/softsv/meta.yaml>`_

   


.. conda:package:: softsv

   |downloads_softsv| |docker_softsv|

   :versions:
      
      

      ``1.4.2-0``

      

   
   :depends bamtools: ``>=2.5.2,<2.6.0a0``
   :depends boost-cpp: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install softsv

   and update with::

      mamba update softsv

  To create a new environment, run::

      mamba create --name myenvname softsv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/softsv:<tag>

   (see `softsv/tags`_ for valid values for ``<tag>``)


.. |downloads_softsv| image:: https://img.shields.io/conda/dn/bioconda/softsv.svg?style=flat
   :target: https://anaconda.org/bioconda/softsv
   :alt:   (downloads)
.. |docker_softsv| image:: https://quay.io/repository/biocontainers/softsv/status
   :target: https://quay.io/repository/biocontainers/softsv
.. _`softsv/tags`: https://quay.io/repository/biocontainers/softsv?tab=tags


.. raw:: html

    <script>
        var package = "softsv";
        var versions = ["1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/softsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/softsv/README.html