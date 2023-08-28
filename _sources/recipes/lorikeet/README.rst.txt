:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lorikeet'
.. highlight: bash

lorikeet
========

.. conda:recipe:: lorikeet
   :replaces_section_title:
   :noindex:

   Tool for digital spoligotyping of MTB strains from Illumina read data

   :homepage: https://github.com/AbeelLab/lorikeet
   :license: GPL / GPL-3
   :recipe: /`lorikeet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorikeet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorikeet/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pmed.1001880`

   


.. conda:package:: lorikeet

   |downloads_lorikeet| |docker_lorikeet|

   :versions:
      
      

      ``20-1``,  ``20-0``,  ``19-0``,  ``17-0``

      

   
   :depends openjdk: 
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

      mamba install lorikeet

   and update with::

      mamba update lorikeet

  To create a new environment, run::

      mamba create --name myenvname lorikeet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lorikeet:<tag>

   (see `lorikeet/tags`_ for valid values for ``<tag>``)


.. |downloads_lorikeet| image:: https://img.shields.io/conda/dn/bioconda/lorikeet.svg?style=flat
   :target: https://anaconda.org/bioconda/lorikeet
   :alt:   (downloads)
.. |docker_lorikeet| image:: https://quay.io/repository/biocontainers/lorikeet/status
   :target: https://quay.io/repository/biocontainers/lorikeet
.. _`lorikeet/tags`: https://quay.io/repository/biocontainers/lorikeet?tab=tags


.. raw:: html

    <script>
        var package = "lorikeet";
        var versions = ["20","20","19","17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lorikeet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lorikeet/README.html