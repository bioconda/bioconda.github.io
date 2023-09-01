:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bmtagger'
.. highlight: bash

bmtagger
========

.. conda:recipe:: bmtagger
   :replaces_section_title:
   :noindex:

   BMTagger aka Best Match Tagger is for removing human reads from metagenomics datasets

   :homepage: ftp://ftp.ncbi.nlm.nih.gov/pub/agarwala/bmtagger/
   :license: Public Domain
   :recipe: /`bmtagger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmtagger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmtagger/meta.yaml>`_

   


.. conda:package:: bmtagger

   |downloads_bmtagger| |docker_bmtagger|

   :versions:
      
      

      ``3.101-5``,  ``3.101-4``,  ``3.101-3``,  ``3.101-1``

      

   
   :depends blast: 
   :depends bmfilter: 
   :depends bmtool: 
   :depends extract_fullseq: 
   :depends gnu-getopt: 
   :depends srprism: 
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

      mamba install bmtagger

   and update with::

      mamba update bmtagger

  To create a new environment, run::

      mamba create --name myenvname bmtagger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bmtagger:<tag>

   (see `bmtagger/tags`_ for valid values for ``<tag>``)


.. |downloads_bmtagger| image:: https://img.shields.io/conda/dn/bioconda/bmtagger.svg?style=flat
   :target: https://anaconda.org/bioconda/bmtagger
   :alt:   (downloads)
.. |docker_bmtagger| image:: https://quay.io/repository/biocontainers/bmtagger/status
   :target: https://quay.io/repository/biocontainers/bmtagger
.. _`bmtagger/tags`: https://quay.io/repository/biocontainers/bmtagger?tab=tags


.. raw:: html

    <script>
        var package = "bmtagger";
        var versions = ["3.101","3.101","3.101","3.101"];
    </script>





Notes
-----
You may find it necessary to create a bmtagger.conf file to specify paired or single\-end searching. The file should contain the line \'srprismopts\=\"\-b 100000000 \-n 5 \-R 0 \-r 1 \-M 7168\"\' along with \'\-p true\' or \'\-p false\' for paired\, and single\, respectively. This config file can be passed to bmtagger.sh via the \'\-C\' option.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bmtagger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bmtagger/README.html