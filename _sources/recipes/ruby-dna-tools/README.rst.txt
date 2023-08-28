:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ruby-dna-tools'
.. highlight: bash

ruby-dna-tools
==============

.. conda:recipe:: ruby-dna-tools
   :replaces_section_title:
   :noindex:

   Various libraries containing useful functions for working with DNA sequences\, written in ruby. Some tools are not specific to DNA.

   :homepage: https://github.com/Carldeboer/Ruby-DNA-Tools
   :license: GPL-2.0
   :recipe: /`ruby-dna-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ruby-dna-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ruby-dna-tools/meta.yaml>`_

   


.. conda:package:: ruby-dna-tools

   |downloads_ruby-dna-tools| |docker_ruby-dna-tools|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends jemalloc: 
   :depends python: 
   :depends ruby: ``>=2.4``
   :depends zlib: 
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

      mamba install ruby-dna-tools

   and update with::

      mamba update ruby-dna-tools

  To create a new environment, run::

      mamba create --name myenvname ruby-dna-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ruby-dna-tools:<tag>

   (see `ruby-dna-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_ruby-dna-tools| image:: https://img.shields.io/conda/dn/bioconda/ruby-dna-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/ruby-dna-tools
   :alt:   (downloads)
.. |docker_ruby-dna-tools| image:: https://quay.io/repository/biocontainers/ruby-dna-tools/status
   :target: https://quay.io/repository/biocontainers/ruby-dna-tools
.. _`ruby-dna-tools/tags`: https://quay.io/repository/biocontainers/ruby-dna-tools?tab=tags


.. raw:: html

    <script>
        var package = "ruby-dna-tools";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ruby-dna-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ruby-dna-tools/README.html