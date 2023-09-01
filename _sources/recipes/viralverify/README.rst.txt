:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viralverify'
.. highlight: bash

viralverify
===========

.. conda:recipe:: viralverify
   :replaces_section_title:
   :noindex:

   viral contig verification tool

   :homepage: https://github.com/ablab/viralVerify
   :license: GPLv3
   :recipe: /`viralverify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralverify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralverify/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa490`

   


.. conda:package:: viralverify

   |downloads_viralverify| |docker_viralverify|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends hmmer: ``>=3.0``
   :depends prodigal: 
   :depends python: ``>=3.6``
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

      mamba install viralverify

   and update with::

      mamba update viralverify

  To create a new environment, run::

      mamba create --name myenvname viralverify

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/viralverify:<tag>

   (see `viralverify/tags`_ for valid values for ``<tag>``)


.. |downloads_viralverify| image:: https://img.shields.io/conda/dn/bioconda/viralverify.svg?style=flat
   :target: https://anaconda.org/bioconda/viralverify
   :alt:   (downloads)
.. |docker_viralverify| image:: https://quay.io/repository/biocontainers/viralverify/status
   :target: https://quay.io/repository/biocontainers/viralverify
.. _`viralverify/tags`: https://quay.io/repository/biocontainers/viralverify?tab=tags


.. raw:: html

    <script>
        var package = "viralverify";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viralverify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viralverify/README.html