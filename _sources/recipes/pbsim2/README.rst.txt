:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbsim2'
.. highlight: bash

pbsim2
======

.. conda:recipe:: pbsim2
   :replaces_section_title:
   :noindex:

   PBSIM2\: a simulator for long read sequencers with a novel generative model of quality scores

   :homepage: https://github.com/yukiteruono/pbsim2
   :license: GPL-2.0
   :recipe: /`pbsim2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsim2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsim2/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa835`

   


.. conda:package:: pbsim2

   |downloads_pbsim2| |docker_pbsim2|

   :versions:
      
      

      ``2.0.1-4``,  ``2.0.1-3``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install pbsim2

   and update with::

      mamba update pbsim2

  To create a new environment, run::

      mamba create --name myenvname pbsim2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbsim2:<tag>

   (see `pbsim2/tags`_ for valid values for ``<tag>``)


.. |downloads_pbsim2| image:: https://img.shields.io/conda/dn/bioconda/pbsim2.svg?style=flat
   :target: https://anaconda.org/bioconda/pbsim2
   :alt:   (downloads)
.. |docker_pbsim2| image:: https://quay.io/repository/biocontainers/pbsim2/status
   :target: https://quay.io/repository/biocontainers/pbsim2
.. _`pbsim2/tags`: https://quay.io/repository/biocontainers/pbsim2?tab=tags


.. raw:: html

    <script>
        var package = "pbsim2";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbsim2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbsim2/README.html