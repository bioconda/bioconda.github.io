:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyloh'
.. highlight: bash

pyloh
=====

.. conda:recipe:: pyloh
   :replaces_section_title:
   :noindex:

   Deconvolving tumor purity and ploidy by integrating copy number alterations and loss of heterozygosity

   :homepage: https://github.com/uci-cbcl/PyLOH
   :license: GPLv2
   :recipe: /`pyloh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyloh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyloh/meta.yaml>`_

   


.. conda:package:: pyloh

   |downloads_pyloh| |docker_pyloh|

   :versions:
      
      

      ``1.4.3-2``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.1-1``

      

   
   :depends matplotlib: ``>=1.2``
   :depends numpy: ``>=1.6.1``
   :depends pysam: ``>=0.7``
   :depends python: ``<3``
   :depends scipy: ``>=0.10``
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

      mamba install pyloh

   and update with::

      mamba update pyloh

  To create a new environment, run::

      mamba create --name myenvname pyloh

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyloh:<tag>

   (see `pyloh/tags`_ for valid values for ``<tag>``)


.. |downloads_pyloh| image:: https://img.shields.io/conda/dn/bioconda/pyloh.svg?style=flat
   :target: https://anaconda.org/bioconda/pyloh
   :alt:   (downloads)
.. |docker_pyloh| image:: https://quay.io/repository/biocontainers/pyloh/status
   :target: https://quay.io/repository/biocontainers/pyloh
.. _`pyloh/tags`: https://quay.io/repository/biocontainers/pyloh?tab=tags


.. raw:: html

    <script>
        var package = "pyloh";
        var versions = ["1.4.3","1.4.3","1.4.3","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyloh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyloh/README.html