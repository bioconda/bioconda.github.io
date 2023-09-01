:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'astalavista'
.. highlight: bash

astalavista
===========

.. conda:recipe:: astalavista
   :replaces_section_title:
   :noindex:

   AStalavista is a computer program to extract alternative splicing \(AS\) events from a given genomic annotation of exon\-intron gene coordinates. By comparing all given transcripts\, AStalavista detects the variations in their splicing structure and identify all AS events \(like exon skipping\, alternate donor\, etc\) by assigning to each of them an AS code.

   :homepage: http://sammeth.net/confluence/display/ASTA/Home
   :license: BSD
   :recipe: /`astalavista <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/astalavista>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/astalavista/meta.yaml>`_
   :links: biotools: :biotools:`astalavista`, doi: :doi:`10.1101/gr.121947.111`

   


.. conda:package:: astalavista

   |downloads_astalavista| |docker_astalavista|

   :versions:
      
      

      ``4.0-1``,  ``4.0-0``,  ``3.2-0``

      

   
   :depends openjdk: 
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

      mamba install astalavista

   and update with::

      mamba update astalavista

  To create a new environment, run::

      mamba create --name myenvname astalavista

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/astalavista:<tag>

   (see `astalavista/tags`_ for valid values for ``<tag>``)


.. |downloads_astalavista| image:: https://img.shields.io/conda/dn/bioconda/astalavista.svg?style=flat
   :target: https://anaconda.org/bioconda/astalavista
   :alt:   (downloads)
.. |docker_astalavista| image:: https://quay.io/repository/biocontainers/astalavista/status
   :target: https://quay.io/repository/biocontainers/astalavista
.. _`astalavista/tags`: https://quay.io/repository/biocontainers/astalavista?tab=tags


.. raw:: html

    <script>
        var package = "astalavista";
        var versions = ["4.0","4.0","3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/astalavista/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/astalavista/README.html