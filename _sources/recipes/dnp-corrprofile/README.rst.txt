:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnp-corrprofile'
.. highlight: bash

dnp-corrprofile
===============

.. conda:recipe:: dnp-corrprofile
   :replaces_section_title:
   :noindex:

   Profile of correlations between the patterns of dinucleotide frequency on forward and reverse strands

   :homepage: https://github.com/erinijapranckeviciene/dnpatterntools
   :license: MIT
   :recipe: /`dnp-corrprofile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnp-corrprofile>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnp-corrprofile/meta.yaml>`_

   


.. conda:package:: dnp-corrprofile

   |downloads_dnp-corrprofile| |docker_dnp-corrprofile|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcxx: ``>=18``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install dnp-corrprofile

   and update with::

      mamba update dnp-corrprofile

  To create a new environment, run::

      mamba create --name myenvname dnp-corrprofile

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dnp-corrprofile:<tag>

   (see `dnp-corrprofile/tags`_ for valid values for ``<tag>``)


.. |downloads_dnp-corrprofile| image:: https://img.shields.io/conda/dn/bioconda/dnp-corrprofile.svg?style=flat
   :target: https://anaconda.org/bioconda/dnp-corrprofile
   :alt:   (downloads)
.. |docker_dnp-corrprofile| image:: https://quay.io/repository/biocontainers/dnp-corrprofile/status
   :target: https://quay.io/repository/biocontainers/dnp-corrprofile
.. _`dnp-corrprofile/tags`: https://quay.io/repository/biocontainers/dnp-corrprofile?tab=tags


.. raw:: html

    <script>
        var package = "dnp-corrprofile";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnp-corrprofile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnp-corrprofile/README.html