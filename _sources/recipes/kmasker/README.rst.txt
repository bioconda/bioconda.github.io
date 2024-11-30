:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmasker'
.. highlight: bash

kmasker
=======

.. conda:recipe:: kmasker
   :replaces_section_title:
   :noindex:

   A tool for masking and exploring of sequences from plant species.

   :homepage: https://kmasker.ipk-gatersleben.de/
   :developer docs: https://github.com/tschmutzer/kmasker
   :license: GPL3
   :recipe: /`kmasker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmasker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmasker/meta.yaml>`_
   :links: biotools: :biotools:`kmasker`

   


.. conda:package:: kmasker

   |downloads_kmasker| |docker_kmasker|

   :versions:
      
      

      ``1.1.1-6``,  ``1.1.1-5``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends blast: 
   :depends coreutils: ``>=8.15``
   :depends ea-utils: 
   :depends gffread: 
   :depends jellyfish: ``2.2.10.*``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.24.3,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends which: ``>=2.21``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install kmasker

   and update with::

      mamba update kmasker

  To create a new environment, run::

      mamba create --name myenvname kmasker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmasker:<tag>

   (see `kmasker/tags`_ for valid values for ``<tag>``)


.. |downloads_kmasker| image:: https://img.shields.io/conda/dn/bioconda/kmasker.svg?style=flat
   :target: https://anaconda.org/bioconda/kmasker
   :alt:   (downloads)
.. |docker_kmasker| image:: https://quay.io/repository/biocontainers/kmasker/status
   :target: https://quay.io/repository/biocontainers/kmasker
.. _`kmasker/tags`: https://quay.io/repository/biocontainers/kmasker?tab=tags


.. raw:: html

    <script>
        var package = "kmasker";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmasker/README.html