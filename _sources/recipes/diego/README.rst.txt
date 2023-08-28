:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'diego'
.. highlight: bash

diego
=====

.. conda:recipe:: diego
   :replaces_section_title:
   :noindex:

   Detection of differential alternative splicing using Aitchinson\`s geometry

   :homepage: http://www.bioinf.uni-leipzig.de/Software/DIEGO
   :license: GNU GPL v3.0
   :recipe: /`diego <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diego>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diego/meta.yaml>`_

   


.. conda:package:: diego

   |downloads_diego| |docker_diego|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends bedtools: ``>=2.20``
   :depends matplotlib-base: ``>=1.5.3``
   :depends numpy: ``>=1.11.2``
   :depends perl: ``>=5.26``
   :depends python: ``>=3``
   :depends samtools: ``>=1.3``
   :depends scipy: ``>=0.19.0``
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

      mamba install diego

   and update with::

      mamba update diego

  To create a new environment, run::

      mamba create --name myenvname diego

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/diego:<tag>

   (see `diego/tags`_ for valid values for ``<tag>``)


.. |downloads_diego| image:: https://img.shields.io/conda/dn/bioconda/diego.svg?style=flat
   :target: https://anaconda.org/bioconda/diego
   :alt:   (downloads)
.. |docker_diego| image:: https://quay.io/repository/biocontainers/diego/status
   :target: https://quay.io/repository/biocontainers/diego
.. _`diego/tags`: https://quay.io/repository/biocontainers/diego?tab=tags


.. raw:: html

    <script>
        var package = "diego";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/diego/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/diego/README.html