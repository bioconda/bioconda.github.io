:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-validateannotation'
.. highlight: bash

biopet-validateannotation
=========================

.. conda:recipe:: biopet-validateannotation
   :replaces_section_title:
   :noindex:

   ValidateAnnotationvalidates whether an annotation file is correct.

   :homepage: https://github.com/biopet/validateannotation
   :license: MIT
   :recipe: /`biopet-validateannotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validateannotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validateannotation/meta.yaml>`_

   ValidateAnnotationvalidates whether an annotation file is correct.
   It checks whether all the annotated contigs are present on the reference.
   It can check gtf or refflat files. It can also check both\,
   in which case it will also check for dissimilarities between the refflat and
   GTF files.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/validateannotation


.. conda:package:: biopet-validateannotation

   |downloads_biopet-validateannotation| |docker_biopet-validateannotation|

   :versions:
      
      

      ``0.1-1``,  ``0.1-0``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
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

      mamba install biopet-validateannotation

   and update with::

      mamba update biopet-validateannotation

  To create a new environment, run::

      mamba create --name myenvname biopet-validateannotation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biopet-validateannotation:<tag>

   (see `biopet-validateannotation/tags`_ for valid values for ``<tag>``)


.. |downloads_biopet-validateannotation| image:: https://img.shields.io/conda/dn/bioconda/biopet-validateannotation.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-validateannotation
   :alt:   (downloads)
.. |docker_biopet-validateannotation| image:: https://quay.io/repository/biocontainers/biopet-validateannotation/status
   :target: https://quay.io/repository/biocontainers/biopet-validateannotation
.. _`biopet-validateannotation/tags`: https://quay.io/repository/biocontainers/biopet-validateannotation?tab=tags


.. raw:: html

    <script>
        var package = "biopet-validateannotation";
        var versions = ["0.1","0.1"];
    </script>





Notes
-----
biopet\-validateannotation is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-validateannotation\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-validateannotation \-Xms512m \-Xmx1g\'. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-validateannotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-validateannotation/README.html