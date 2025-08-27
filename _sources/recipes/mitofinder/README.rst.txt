:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitofinder'
.. highlight: bash

mitofinder
==========

.. conda:recipe:: mitofinder
   :replaces_section_title:
   :noindex:

   Mitofinder is a pipeline to assemble mitochondrial genomes and annotate mitochondrial genes from trimmed read sequencing data.

   :homepage: https://github.com/RemiAllio/MitoFinder
   :license: MIT / MIT
   :recipe: /`mitofinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitofinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitofinder/meta.yaml>`_

   


.. conda:package:: mitofinder

   |downloads_mitofinder| |docker_mitofinder|

   :versions:
      
      

      ``1.4.1-1``,  ``1.4.1-0``,  ``1.4-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends idba: 
   :depends megahit: 
   :depends openjdk: 
   :depends pandas: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends spades: 
   :depends trnascan-se: 
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

      mamba install mitofinder

   and update with::

      mamba update mitofinder

  To create a new environment, run::

      mamba create --name myenvname mitofinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mitofinder:<tag>

   (see `mitofinder/tags`_ for valid values for ``<tag>``)


.. |downloads_mitofinder| image:: https://img.shields.io/conda/dn/bioconda/mitofinder.svg?style=flat
   :target: https://anaconda.org/bioconda/mitofinder
   :alt:   (downloads)
.. |docker_mitofinder| image:: https://quay.io/repository/biocontainers/mitofinder/status
   :target: https://quay.io/repository/biocontainers/mitofinder
.. _`mitofinder/tags`: https://quay.io/repository/biocontainers/mitofinder?tab=tags


.. raw:: html

    <script>
        var package = "mitofinder";
        var versions = ["1.4.1","1.4.1","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitofinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitofinder/README.html