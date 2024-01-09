:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitgard'
.. highlight: bash

mitgard
=======

.. conda:recipe:: mitgard
   :replaces_section_title:
   :noindex:

   Mitochondrial Genome Assembly from RNA\-seq Data.

   :homepage: https://github.com/pedronachtigall/MITGARD
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mitgard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitgard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitgard/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1093/bib/bbaa429`

   


.. conda:package:: mitgard

   |downloads_mitgard| |docker_mitgard|

   :versions:
      
      

      ``1.1-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends bowtie2: 
   :depends canu: 
   :depends hifiasm: 
   :depends minimap2: 
   :depends python: ``>=3.6``
   :depends samtools: 
   :depends spades: ``3.13.1.*``
   :depends trinity: ``2.8.5.*``
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

      mamba install mitgard

   and update with::

      mamba update mitgard

  To create a new environment, run::

      mamba create --name myenvname mitgard

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mitgard:<tag>

   (see `mitgard/tags`_ for valid values for ``<tag>``)


.. |downloads_mitgard| image:: https://img.shields.io/conda/dn/bioconda/mitgard.svg?style=flat
   :target: https://anaconda.org/bioconda/mitgard
   :alt:   (downloads)
.. |docker_mitgard| image:: https://quay.io/repository/biocontainers/mitgard/status
   :target: https://quay.io/repository/biocontainers/mitgard
.. _`mitgard/tags`: https://quay.io/repository/biocontainers/mitgard?tab=tags


.. raw:: html

    <script>
        var package = "mitgard";
        var versions = ["1.1","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitgard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitgard/README.html