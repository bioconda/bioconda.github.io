:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'estmapper'
.. highlight: bash

estmapper
=========

.. conda:recipe:: estmapper
   :replaces_section_title:
   :noindex:

   Software package for the high\-throughput alignment of large cDNA \(EST\, mRNA\) sequence sets to a large eukaryotic genome of the same species.

   :homepage: https://sourceforge.net/projects/kmer
   :license: GPL-3.0-or-later
   :recipe: /`estmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estmapper/meta.yaml>`_

   


.. conda:package:: estmapper

   |downloads_estmapper| |docker_estmapper|

   :versions:
      
      

      ``2008-7``,  ``2008-6``,  ``2008-5``,  ``2008-4``,  ``2008-3``,  ``2008-2``,  ``2008-1``,  ``2008-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install estmapper

   and update with::

      mamba update estmapper

  To create a new environment, run::

      mamba create --name myenvname estmapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/estmapper:<tag>

   (see `estmapper/tags`_ for valid values for ``<tag>``)


.. |downloads_estmapper| image:: https://img.shields.io/conda/dn/bioconda/estmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/estmapper
   :alt:   (downloads)
.. |docker_estmapper| image:: https://quay.io/repository/biocontainers/estmapper/status
   :target: https://quay.io/repository/biocontainers/estmapper
.. _`estmapper/tags`: https://quay.io/repository/biocontainers/estmapper?tab=tags


.. raw:: html

    <script>
        var package = "estmapper";
        var versions = ["2008","2008","2008","2008","2008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/estmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/estmapper/README.html