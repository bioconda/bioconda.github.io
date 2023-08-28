:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pauda'
.. highlight: bash

pauda
=====

.. conda:recipe:: pauda
   :replaces_section_title:
   :noindex:

   PAUDA is a new approach toward the problem of comparing DNA reads against a database of protein reference sequences that is applicable to very large datasets consisting of hundreds of millions or billions of reads.

   :homepage: https://ab.inf.uni-tuebingen.de/software/pauda
   :license: GPL
   :recipe: /`pauda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pauda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pauda/meta.yaml>`_

   


.. conda:package:: pauda

   |downloads_pauda| |docker_pauda|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends bowtie2: 
   :depends java-jdk: 
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

      mamba install pauda

   and update with::

      mamba update pauda

  To create a new environment, run::

      mamba create --name myenvname pauda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pauda:<tag>

   (see `pauda/tags`_ for valid values for ``<tag>``)


.. |downloads_pauda| image:: https://img.shields.io/conda/dn/bioconda/pauda.svg?style=flat
   :target: https://anaconda.org/bioconda/pauda
   :alt:   (downloads)
.. |docker_pauda| image:: https://quay.io/repository/biocontainers/pauda/status
   :target: https://quay.io/repository/biocontainers/pauda
.. _`pauda/tags`: https://quay.io/repository/biocontainers/pauda?tab=tags


.. raw:: html

    <script>
        var package = "pauda";
        var versions = ["1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pauda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pauda/README.html