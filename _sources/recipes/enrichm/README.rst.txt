:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enrichm'
.. highlight: bash

enrichm
=======

.. conda:recipe:: enrichm
   :replaces_section_title:
   :noindex:

   EnrichM is a toolbox for comparing the functional composition of population genomes

   :homepage: https://github.com/geronimp/enrichM
   :license: GPL3 / GPL3+
   :recipe: /`enrichm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enrichm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enrichm/meta.yaml>`_

   


.. conda:package:: enrichm

   |downloads_enrichm| |docker_enrichm|

   :versions:
      
      

      ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.5.0-0``

      

   
   :depends biopython: ``>=1.66``
   :depends diamond: ``0.9.22``
   :depends hmmer: ``>=3.1b``
   :depends mcl: ``>=14.137``
   :depends mmseqs2: ``>=2.23394``
   :depends moreutils: 
   :depends numpy: ``>=1.9.1``
   :depends openmp: 
   :depends pandas: ``>=0.17.1``
   :depends parallel: ``>=20180222``
   :depends prodigal: ``>=2.6.3``
   :depends python: ``>=3.6``
   :depends python-dateutil: ``>=2.5.1``
   :depends r-base: 
   :depends r-gridextra: 
   :depends r-optparse: 
   :depends scikit-learn: 
   :depends scipy: ``>=0.17.0``
   :depends seqmagick: 
   :depends six: ``>=1.10.0``
   :depends statsmodels: ``>=0.8.0rc1``
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

      mamba install enrichm

   and update with::

      mamba update enrichm

  To create a new environment, run::

      mamba create --name myenvname enrichm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/enrichm:<tag>

   (see `enrichm/tags`_ for valid values for ``<tag>``)


.. |downloads_enrichm| image:: https://img.shields.io/conda/dn/bioconda/enrichm.svg?style=flat
   :target: https://anaconda.org/bioconda/enrichm
   :alt:   (downloads)
.. |docker_enrichm| image:: https://quay.io/repository/biocontainers/enrichm/status
   :target: https://quay.io/repository/biocontainers/enrichm
.. _`enrichm/tags`: https://quay.io/repository/biocontainers/enrichm?tab=tags


.. raw:: html

    <script>
        var package = "enrichm";
        var versions = ["0.6.5","0.6.4","0.6.3","0.6.2","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enrichm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enrichm/README.html