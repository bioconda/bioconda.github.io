:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'debwt'
.. highlight: bash

debwt
=====

.. conda:recipe:: debwt
   :replaces_section_title:
   :noindex:

   A efficient method to construct BWT index of a given DNA sequence\, especially
   useful for gigantic and high similar genome.
   DeBWT has good scalability to construct BWT in parallel computing.
   It is well\-suited to run on multiple core servers or clusters to
   construct the BWT of large collections of genome sequences.

   :homepage: https://github.com/DixianZhu/deBWT
   :license: Unknown
   :recipe: /`debwt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debwt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debwt/meta.yaml>`_

   


.. conda:package:: debwt

   |downloads_debwt| |docker_debwt|

   :versions:
      
      

      ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install debwt

   and update with::

      mamba update debwt

  To create a new environment, run::

      mamba create --name myenvname debwt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/debwt:<tag>

   (see `debwt/tags`_ for valid values for ``<tag>``)


.. |downloads_debwt| image:: https://img.shields.io/conda/dn/bioconda/debwt.svg?style=flat
   :target: https://anaconda.org/bioconda/debwt
   :alt:   (downloads)
.. |docker_debwt| image:: https://quay.io/repository/biocontainers/debwt/status
   :target: https://quay.io/repository/biocontainers/debwt
.. _`debwt/tags`: https://quay.io/repository/biocontainers/debwt?tab=tags


.. raw:: html

    <script>
        var package = "debwt";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/debwt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/debwt/README.html