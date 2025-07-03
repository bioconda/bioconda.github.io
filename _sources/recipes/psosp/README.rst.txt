:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psosp'
.. highlight: bash

psosp
=====

.. conda:recipe:: psosp
   :replaces_section_title:
   :noindex:

   PSOSP \(Prophage SOS\-dependency Predictor\)

   :homepage: https://github.com/mujiezhang/PSOSP
   :documentation: https://github.com/mujiezhang/PSOSP/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`psosp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psosp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psosp/meta.yaml>`_

   PSOSP \(Prophage SOS\-dependency Predictor\) is a novel bioinformatics tool 
   to predict prophage induction modes by analyzing the heterology index \(HI\) 
   of LexA protein binding to target DNA\, classifying prophages into 
   SOS\-dependent \(SdPs\) and SOS\-independent \(SiPs\).



.. conda:package:: psosp

   |downloads_psosp| |docker_psosp|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends biopython: 
   :depends checkv: ``>=1.0.3``
   :depends diamond: ``>=2.0.4``
   :depends meme: ``>=5.5.5``
   :depends prodigal: 
   :depends python: ``>=3.10``
   :depends scikit-learn: 
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

      mamba install psosp

   and update with::

      mamba update psosp

  To create a new environment, run::

      mamba create --name myenvname psosp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/psosp:<tag>

   (see `psosp/tags`_ for valid values for ``<tag>``)


.. |downloads_psosp| image:: https://img.shields.io/conda/dn/bioconda/psosp.svg?style=flat
   :target: https://anaconda.org/bioconda/psosp
   :alt:   (downloads)
.. |docker_psosp| image:: https://quay.io/repository/biocontainers/psosp/status
   :target: https://quay.io/repository/biocontainers/psosp
.. _`psosp/tags`: https://quay.io/repository/biocontainers/psosp?tab=tags


.. raw:: html

    <script>
        var package = "psosp";
        var versions = ["1.1.2","1.1.2","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psosp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psosp/README.html