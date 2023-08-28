:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virulencefinder'
.. highlight: bash

virulencefinder
===============

.. conda:recipe:: virulencefinder
   :replaces_section_title:
   :noindex:

   VirulenceFinder identifies virulence genes in total or partial sequenced isolates of bacteria

   :homepage: https://bitbucket.org/genomicepidemiology/virulencefinder
   :license: APACHE / Apache-2.0
   :recipe: /`virulencefinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virulencefinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virulencefinder/meta.yaml>`_
   :links: doi: :doi:`10.1128/JCM.03617-13`

   


.. conda:package:: virulencefinder

   |downloads_virulencefinder| |docker_virulencefinder|

   :versions:
      
      

      ``2.0.4-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends cgecore: 
   :depends kma: 
   :depends python: ``>=3``
   :depends tabulate: 
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

      mamba install virulencefinder

   and update with::

      mamba update virulencefinder

  To create a new environment, run::

      mamba create --name myenvname virulencefinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/virulencefinder:<tag>

   (see `virulencefinder/tags`_ for valid values for ``<tag>``)


.. |downloads_virulencefinder| image:: https://img.shields.io/conda/dn/bioconda/virulencefinder.svg?style=flat
   :target: https://anaconda.org/bioconda/virulencefinder
   :alt:   (downloads)
.. |docker_virulencefinder| image:: https://quay.io/repository/biocontainers/virulencefinder/status
   :target: https://quay.io/repository/biocontainers/virulencefinder
.. _`virulencefinder/tags`: https://quay.io/repository/biocontainers/virulencefinder?tab=tags


.. raw:: html

    <script>
        var package = "virulencefinder";
        var versions = ["2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virulencefinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virulencefinder/README.html