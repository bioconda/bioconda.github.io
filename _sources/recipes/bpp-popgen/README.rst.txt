:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bpp-popgen'
.. highlight: bash

bpp-popgen
==========

.. conda:recipe:: bpp-popgen
   :replaces_section_title:
   :noindex:

   Bio\+\+ is a set of C\+\+ libraries for Bioinformatics.

   :homepage: https://github.com/BioPP/bpp-popgen
   :license: CeCILL
   :recipe: /`bpp-popgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-popgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-popgen/meta.yaml>`_

   


.. conda:package:: bpp-popgen

   |downloads_bpp-popgen| |docker_bpp-popgen|

   :versions:
      
      

      ``2.4.1-5``,  ``2.4.1-4``,  ``2.4.1-3``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``

      

   
   :depends bpp-seq: 
   :depends libcxx: ``>=18``
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

      mamba install bpp-popgen

   and update with::

      mamba update bpp-popgen

  To create a new environment, run::

      mamba create --name myenvname bpp-popgen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bpp-popgen:<tag>

   (see `bpp-popgen/tags`_ for valid values for ``<tag>``)


.. |downloads_bpp-popgen| image:: https://img.shields.io/conda/dn/bioconda/bpp-popgen.svg?style=flat
   :target: https://anaconda.org/bioconda/bpp-popgen
   :alt:   (downloads)
.. |docker_bpp-popgen| image:: https://quay.io/repository/biocontainers/bpp-popgen/status
   :target: https://quay.io/repository/biocontainers/bpp-popgen
.. _`bpp-popgen/tags`: https://quay.io/repository/biocontainers/bpp-popgen?tab=tags


.. raw:: html

    <script>
        var package = "bpp-popgen";
        var versions = ["2.4.1","2.4.1","2.4.1","2.4.1","2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bpp-popgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bpp-popgen/README.html