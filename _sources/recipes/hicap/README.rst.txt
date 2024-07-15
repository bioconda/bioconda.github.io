:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hicap'
.. highlight: bash

hicap
=====

.. conda:recipe:: hicap
   :replaces_section_title:
   :noindex:

   In silico typing of the H. influenzae capsule locus

   :homepage: https://github.com/scwatts/hicap
   :documentation: https://github.com/scwatts/hicap/blob/main/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`hicap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicap/meta.yaml>`_
   :links: doi: :doi:`10.1128/jcm.00190-19`

   


.. conda:package:: hicap

   |downloads_hicap| |docker_hicap|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends biopython: ``>=1.79``
   :depends blast: ``>=2.2.28``
   :depends prodigal: ``>=2.6.1``
   :depends python: ``>=3.6``
   :depends reportlab: ``3.4.0``
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

      mamba install hicap

   and update with::

      mamba update hicap

  To create a new environment, run::

      mamba create --name myenvname hicap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hicap:<tag>

   (see `hicap/tags`_ for valid values for ``<tag>``)


.. |downloads_hicap| image:: https://img.shields.io/conda/dn/bioconda/hicap.svg?style=flat
   :target: https://anaconda.org/bioconda/hicap
   :alt:   (downloads)
.. |docker_hicap| image:: https://quay.io/repository/biocontainers/hicap/status
   :target: https://quay.io/repository/biocontainers/hicap
.. _`hicap/tags`: https://quay.io/repository/biocontainers/hicap?tab=tags


.. raw:: html

    <script>
        var package = "hicap";
        var versions = ["1.0.4","1.0.4","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicap/README.html