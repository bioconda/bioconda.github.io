:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bmtool'
.. highlight: bash

bmtool
======

.. conda:recipe:: bmtool
   :replaces_section_title:
   :noindex:

   bmtool is part of BMTagger aka Best Match Tagger\, for removing human reads from metagenomics datasets

   :homepage: ftp://ftp.ncbi.nlm.nih.gov/pub/agarwala/bmtagger/
   :license: Public Domain
   :recipe: /`bmtool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmtool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmtool/meta.yaml>`_

   


.. conda:package:: bmtool

   |downloads_bmtool| |docker_bmtool|

   :versions:
      
      

      ``3.101-4``,  ``3.101-3``,  ``3.101-2``,  ``3.101-1``

      

   
   :depends libcxx: ``>=11.1.0``
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

      mamba install bmtool

   and update with::

      mamba update bmtool

  To create a new environment, run::

      mamba create --name myenvname bmtool

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bmtool:<tag>

   (see `bmtool/tags`_ for valid values for ``<tag>``)


.. |downloads_bmtool| image:: https://img.shields.io/conda/dn/bioconda/bmtool.svg?style=flat
   :target: https://anaconda.org/bioconda/bmtool
   :alt:   (downloads)
.. |docker_bmtool| image:: https://quay.io/repository/biocontainers/bmtool/status
   :target: https://quay.io/repository/biocontainers/bmtool
.. _`bmtool/tags`: https://quay.io/repository/biocontainers/bmtool?tab=tags


.. raw:: html

    <script>
        var package = "bmtool";
        var versions = ["3.101","3.101","3.101","3.101"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bmtool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bmtool/README.html