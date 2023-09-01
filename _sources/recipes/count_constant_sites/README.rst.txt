:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'count_constant_sites'
.. highlight: bash

count_constant_sites
====================

.. conda:recipe:: count_constant_sites
   :replaces_section_title:
   :noindex:

   Compute the count of cases in constant sites in a \(FASTA\) multiple sequence alignment

   :homepage: https://github.com/pvanheus/count_constant_sites
   :license: MIT
   :recipe: /`count_constant_sites <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/count_constant_sites>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/count_constant_sites/meta.yaml>`_

   Given a FASTA file with a multiple sequence alignment of nucleotides\,
   this tool counts the sites in the alignment that are constant. The 
   output is a line suitable for use in IQTREE\'s \`\-fconst\`\, thus 4 numbers
   with commas expressing the count of As\, Cs\, Gs and Ts.



.. conda:package:: count_constant_sites

   |downloads_count_constant_sites| |docker_count_constant_sites|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``

      

   
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

      mamba install count_constant_sites

   and update with::

      mamba update count_constant_sites

  To create a new environment, run::

      mamba create --name myenvname count_constant_sites

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/count_constant_sites:<tag>

   (see `count_constant_sites/tags`_ for valid values for ``<tag>``)


.. |downloads_count_constant_sites| image:: https://img.shields.io/conda/dn/bioconda/count_constant_sites.svg?style=flat
   :target: https://anaconda.org/bioconda/count_constant_sites
   :alt:   (downloads)
.. |docker_count_constant_sites| image:: https://quay.io/repository/biocontainers/count_constant_sites/status
   :target: https://quay.io/repository/biocontainers/count_constant_sites
.. _`count_constant_sites/tags`: https://quay.io/repository/biocontainers/count_constant_sites?tab=tags


.. raw:: html

    <script>
        var package = "count_constant_sites";
        var versions = ["0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/count_constant_sites/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/count_constant_sites/README.html