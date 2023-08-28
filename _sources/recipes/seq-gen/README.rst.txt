:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq-gen'
.. highlight: bash

seq-gen
=======

.. conda:recipe:: seq-gen
   :replaces_section_title:
   :noindex:

   Seq\-Gen is a program that will simulate the evolution of nucleotide or amino acid sequences along a phylogeny\, using common models of the substitution process.

   :homepage: http://tree.bio.ed.ac.uk/software/Seq-Gen/
   :developer docs: https://github.com/rambaut/Seq-Gen
   :license: BSD / BSD-3-Clause
   :recipe: /`seq-gen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-gen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-gen/meta.yaml>`_

   


.. conda:package:: seq-gen

   |downloads_seq-gen| |docker_seq-gen|

   :versions:
      
      

      ``1.3.4-7``,  ``1.3.4-6``,  ``1.3.4-5``,  ``1.3.4-4``,  ``1.3.4-3``,  ``1.3.4-2``,  ``1.3.4-0``,  ``1.3.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install seq-gen

   and update with::

      mamba update seq-gen

  To create a new environment, run::

      mamba create --name myenvname seq-gen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seq-gen:<tag>

   (see `seq-gen/tags`_ for valid values for ``<tag>``)


.. |downloads_seq-gen| image:: https://img.shields.io/conda/dn/bioconda/seq-gen.svg?style=flat
   :target: https://anaconda.org/bioconda/seq-gen
   :alt:   (downloads)
.. |docker_seq-gen| image:: https://quay.io/repository/biocontainers/seq-gen/status
   :target: https://quay.io/repository/biocontainers/seq-gen
.. _`seq-gen/tags`: https://quay.io/repository/biocontainers/seq-gen?tab=tags


.. raw:: html

    <script>
        var package = "seq-gen";
        var versions = ["1.3.4","1.3.4","1.3.4","1.3.4","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq-gen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq-gen/README.html