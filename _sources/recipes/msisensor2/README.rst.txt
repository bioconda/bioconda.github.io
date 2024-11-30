:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msisensor2'
.. highlight: bash

msisensor2
==========

.. conda:recipe:: msisensor2
   :replaces_section_title:
   :noindex:

   MSIsensor2 is a novel algorithm based machine learning\, featuring a large upgrade in the microsatellite instability \(MSI\) detection for tumor only sequencing data\, including Cell\-Free DNA \(cfDNA\)\, Formalin\-Fixed Paraffin\-Embedded\(FFPE\) and other sample types.

   :homepage: https://github.com/niu-lab/msisensor2
   :license: GPL / GPL3
   :recipe: /`msisensor2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msisensor2/meta.yaml>`_

   


.. conda:package:: msisensor2

   |downloads_msisensor2| |docker_msisensor2|

   :versions:
      
      

      ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libgomp: 
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install msisensor2

   and update with::

      mamba update msisensor2

  To create a new environment, run::

      mamba create --name myenvname msisensor2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msisensor2:<tag>

   (see `msisensor2/tags`_ for valid values for ``<tag>``)


.. |downloads_msisensor2| image:: https://img.shields.io/conda/dn/bioconda/msisensor2.svg?style=flat
   :target: https://anaconda.org/bioconda/msisensor2
   :alt:   (downloads)
.. |docker_msisensor2| image:: https://quay.io/repository/biocontainers/msisensor2/status
   :target: https://quay.io/repository/biocontainers/msisensor2
.. _`msisensor2/tags`: https://quay.io/repository/biocontainers/msisensor2?tab=tags


.. raw:: html

    <script>
        var package = "msisensor2";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msisensor2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msisensor2/README.html