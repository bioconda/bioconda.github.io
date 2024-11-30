:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapidshapes'
.. highlight: bash

rapidshapes
===========

.. conda:recipe:: rapidshapes
   :replaces_section_title:
   :noindex:

   RapidShapes computes a thermodynamic matcher \(TDM\)\, using a runtime heuristic for probabilistic shape analysis.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/rapidshapes
   :license: GPL-3.0-or-later
   :recipe: /`rapidshapes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapidshapes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapidshapes/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btq014`, doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: rapidshapes

   |downloads_rapidshapes| |docker_rapidshapes|

   :versions:
      
      

      ``2.1.0-1``,  ``2.1.0-0``

      

   
   :depends bellmans-gapc: ``>=2024.01.12``
   :depends bellmans-gapc: ``>=2024.1.12``
   :depends gxx_linux-64: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install rapidshapes

   and update with::

      mamba update rapidshapes

  To create a new environment, run::

      mamba create --name myenvname rapidshapes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rapidshapes:<tag>

   (see `rapidshapes/tags`_ for valid values for ``<tag>``)


.. |downloads_rapidshapes| image:: https://img.shields.io/conda/dn/bioconda/rapidshapes.svg?style=flat
   :target: https://anaconda.org/bioconda/rapidshapes
   :alt:   (downloads)
.. |docker_rapidshapes| image:: https://quay.io/repository/biocontainers/rapidshapes/status
   :target: https://quay.io/repository/biocontainers/rapidshapes
.. _`rapidshapes/tags`: https://quay.io/repository/biocontainers/rapidshapes?tab=tags


.. raw:: html

    <script>
        var package = "rapidshapes";
        var versions = ["2.1.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapidshapes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapidshapes/README.html