:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnavirhost'
.. highlight: bash

rnavirhost
==========

.. conda:recipe:: rnavirhost
   :replaces_section_title:
   :noindex:

   RNAVirHost\: a machine learning\-based method for predicting hosts of RNA viruses through viral genomes

   :homepage: https://github.com/GreyGuoweiChen/VirHost.git
   :license: MIT / MIT
   :recipe: /`rnavirhost <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnavirhost>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnavirhost/meta.yaml>`_

   


.. conda:package:: rnavirhost

   |downloads_rnavirhost| |docker_rnavirhost|

   :versions:
      
      

      ``1.0.5-0``

      

   
   :depends biopython: ``>=1.83``
   :depends blast: ``>=2.12.0``
   :depends numpy: ``>=1.23.5``
   :depends pandas: ``>=2.0.3``
   :depends prodigal: ``>=2.6.3``
   :depends python: 
   :depends scikit-learn: ``>=1.1.3``
   :depends xgboost: ``>=1.7.4``
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

      mamba install rnavirhost

   and update with::

      mamba update rnavirhost

  To create a new environment, run::

      mamba create --name myenvname rnavirhost

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnavirhost:<tag>

   (see `rnavirhost/tags`_ for valid values for ``<tag>``)


.. |downloads_rnavirhost| image:: https://img.shields.io/conda/dn/bioconda/rnavirhost.svg?style=flat
   :target: https://anaconda.org/bioconda/rnavirhost
   :alt:   (downloads)
.. |docker_rnavirhost| image:: https://quay.io/repository/biocontainers/rnavirhost/status
   :target: https://quay.io/repository/biocontainers/rnavirhost
.. _`rnavirhost/tags`: https://quay.io/repository/biocontainers/rnavirhost?tab=tags


.. raw:: html

    <script>
        var package = "rnavirhost";
        var versions = ["1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnavirhost/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnavirhost/README.html