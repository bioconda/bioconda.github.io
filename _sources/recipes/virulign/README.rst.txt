:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virulign'
.. highlight: bash

virulign
========

.. conda:recipe:: virulign
   :replaces_section_title:
   :noindex:

   VIRULIGN is a tool for codon\-correct pairwise alignments\, with an augmented functionality to annotate the alignment according the positions of the proteins.

   :homepage: https://github.com/rega-cev/virulign
   :license: GPL-2.0-only
   :recipe: /`virulign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virulign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virulign/meta.yaml>`_

   


.. conda:package:: virulign

   |downloads_virulign| |docker_virulign|

   :versions:
      
      

      ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openmp: 
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

      mamba install virulign

   and update with::

      mamba update virulign

  To create a new environment, run::

      mamba create --name myenvname virulign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/virulign:<tag>

   (see `virulign/tags`_ for valid values for ``<tag>``)


.. |downloads_virulign| image:: https://img.shields.io/conda/dn/bioconda/virulign.svg?style=flat
   :target: https://anaconda.org/bioconda/virulign
   :alt:   (downloads)
.. |docker_virulign| image:: https://quay.io/repository/biocontainers/virulign/status
   :target: https://quay.io/repository/biocontainers/virulign
.. _`virulign/tags`: https://quay.io/repository/biocontainers/virulign?tab=tags


.. raw:: html

    <script>
        var package = "virulign";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virulign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virulign/README.html