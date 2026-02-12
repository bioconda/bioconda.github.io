:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tn3_ta_finder'
.. highlight: bash

tn3_ta_finder
=============

.. conda:recipe:: tn3_ta_finder
   :replaces_section_title:
   :noindex:

   Tn3 transposon and type II toxin\-antitoxin finder for bacterial and archaeal genomes

   :homepage: https://github.com/danillo-alvarenga/tn3-ta_finder
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`tn3_ta_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tn3_ta_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tn3_ta_finder/meta.yaml>`_

   Tn3\+TA\_finder is a program for the automatic prediction of transposable
   elements of the Tn3 family associated with type II toxin and antitoxin
   pairs in bacteria and archaea. It compares bacterial and archaeal genome
   sequences to custom Tn3 transposase\+resolvase and type II toxin\+antitoxin
   databases



.. conda:package:: tn3_ta_finder

   |downloads_tn3_ta_finder| |docker_tn3_ta_finder|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends biopython: ``>=1.66,<1.78``
   :depends blast: ``>=2.2.28``
   :depends prodigal: ``>=2.6.1``
   :depends python: ``>=3.6``
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

      mamba install tn3_ta_finder

   and update with::

      mamba update tn3_ta_finder

  To create a new environment, run::

      mamba create --name myenvname tn3_ta_finder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tn3_ta_finder:<tag>

   (see `tn3_ta_finder/tags`_ for valid values for ``<tag>``)


.. |downloads_tn3_ta_finder| image:: https://img.shields.io/conda/dn/bioconda/tn3_ta_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/tn3_ta_finder
   :alt:   (downloads)
.. |docker_tn3_ta_finder| image:: https://quay.io/repository/biocontainers/tn3_ta_finder/status
   :target: https://quay.io/repository/biocontainers/tn3_ta_finder
.. _`tn3_ta_finder/tags`: https://quay.io/repository/biocontainers/tn3_ta_finder?tab=tags


.. raw:: html

    <script>
        var package = "tn3_ta_finder";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tn3_ta_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tn3_ta_finder/README.html