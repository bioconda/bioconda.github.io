:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'btyper3'
.. highlight: bash

btyper3
=======

.. conda:recipe:: btyper3
   :replaces_section_title:
   :noindex:

   In silico taxonomic classification of Bacillus cereus group isolates using assembled genomes

   :homepage: https://github.com/lmc297/BTyper3
   :license: GPL / GPL-3
   :recipe: /`btyper3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btyper3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btyper3/meta.yaml>`_
   :links: https: :https:`//doi.org/10.3389/fmicb.2020.580691`

   


.. conda:package:: btyper3

   |downloads_btyper3| |docker_btyper3|

   :versions:
      
      

      ``3.4.0-0``,  ``3.3.4-0``,  ``3.3.3-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.2.0-0``

      

   
   :depends biopython: ``>=1.74``
   :depends blast: ``>=2.9.0``
   :depends numpy: ``>=1.18``
   :depends pandas: ``>=1.0``
   :depends pyfastani: ``>=0.4``
   :depends python: ``>=3.7``
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

      mamba install btyper3

   and update with::

      mamba update btyper3

  To create a new environment, run::

      mamba create --name myenvname btyper3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/btyper3:<tag>

   (see `btyper3/tags`_ for valid values for ``<tag>``)


.. |downloads_btyper3| image:: https://img.shields.io/conda/dn/bioconda/btyper3.svg?style=flat
   :target: https://anaconda.org/bioconda/btyper3
   :alt:   (downloads)
.. |docker_btyper3| image:: https://quay.io/repository/biocontainers/btyper3/status
   :target: https://quay.io/repository/biocontainers/btyper3
.. _`btyper3/tags`: https://quay.io/repository/biocontainers/btyper3?tab=tags


.. raw:: html

    <script>
        var package = "btyper3";
        var versions = ["3.4.0","3.3.4","3.3.3","3.3.2","3.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/btyper3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/btyper3/README.html