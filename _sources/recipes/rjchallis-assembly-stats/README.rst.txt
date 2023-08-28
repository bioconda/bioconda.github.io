:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rjchallis-assembly-stats'
.. highlight: bash

rjchallis-assembly-stats
========================

.. conda:recipe:: rjchallis-assembly-stats
   :replaces_section_title:
   :noindex:

   Assembly metric visualisations to facilitate rapid assessment and comparison of assembly quality.

   :homepage: https://github.com/rjchallis/assembly-stats
   :license: MIT / MIT
   :recipe: /`rjchallis-assembly-stats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rjchallis-assembly-stats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rjchallis-assembly-stats/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.322347`

   


.. conda:package:: rjchallis-assembly-stats

   |downloads_rjchallis-assembly-stats| |docker_rjchallis-assembly-stats|

   :versions:
      
      

      ``17.02-0``

      

   
   :depends perl: 
   :depends perl-json: 
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

      mamba install rjchallis-assembly-stats

   and update with::

      mamba update rjchallis-assembly-stats

  To create a new environment, run::

      mamba create --name myenvname rjchallis-assembly-stats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rjchallis-assembly-stats:<tag>

   (see `rjchallis-assembly-stats/tags`_ for valid values for ``<tag>``)


.. |downloads_rjchallis-assembly-stats| image:: https://img.shields.io/conda/dn/bioconda/rjchallis-assembly-stats.svg?style=flat
   :target: https://anaconda.org/bioconda/rjchallis-assembly-stats
   :alt:   (downloads)
.. |docker_rjchallis-assembly-stats| image:: https://quay.io/repository/biocontainers/rjchallis-assembly-stats/status
   :target: https://quay.io/repository/biocontainers/rjchallis-assembly-stats
.. _`rjchallis-assembly-stats/tags`: https://quay.io/repository/biocontainers/rjchallis-assembly-stats?tab=tags


.. raw:: html

    <script>
        var package = "rjchallis-assembly-stats";
        var versions = ["17.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rjchallis-assembly-stats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rjchallis-assembly-stats/README.html