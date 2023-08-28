:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'linkstats'
.. highlight: bash

linkstats
=========

.. conda:recipe:: linkstats
   :replaces_section_title:
   :noindex:

   Collect and process statistics from aligned linked\-reads.

   :homepage: https://github.com/wtsi-hpag/LinkStats
   :license: MIT / MIT
   :recipe: /`linkstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkstats/meta.yaml>`_

   


.. conda:package:: linkstats

   |downloads_linkstats| |docker_linkstats|

   :versions:
      
      

      ``0.1.3-6``,  ``0.1.3-5``,  ``0.1.3-4``,  ``0.1.3-3``,  ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends click: ``>=8.0.3``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: ``>=3.5.1``
   :depends numpy: ``>=1.22.0``
   :depends pandas: ``>=1.3.5``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends seaborn: ``>=0.11.2``
   :depends tqdm: ``>=4.62.3``
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

      mamba install linkstats

   and update with::

      mamba update linkstats

  To create a new environment, run::

      mamba create --name myenvname linkstats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/linkstats:<tag>

   (see `linkstats/tags`_ for valid values for ``<tag>``)


.. |downloads_linkstats| image:: https://img.shields.io/conda/dn/bioconda/linkstats.svg?style=flat
   :target: https://anaconda.org/bioconda/linkstats
   :alt:   (downloads)
.. |docker_linkstats| image:: https://quay.io/repository/biocontainers/linkstats/status
   :target: https://quay.io/repository/biocontainers/linkstats
.. _`linkstats/tags`: https://quay.io/repository/biocontainers/linkstats?tab=tags


.. raw:: html

    <script>
        var package = "linkstats";
        var versions = ["0.1.3","0.1.3","0.1.3","0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/linkstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/linkstats/README.html