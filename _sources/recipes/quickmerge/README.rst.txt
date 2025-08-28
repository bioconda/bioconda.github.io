:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quickmerge'
.. highlight: bash

quickmerge
==========

.. conda:recipe:: quickmerge
   :replaces_section_title:
   :noindex:

   Quickmerge uses a simple concept to improve contiguity of genome assemblies based on long molecule sequences.

   :homepage: https://github.com/mahulchak/quickmerge
   :license: GPL-3
   :recipe: /`quickmerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quickmerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quickmerge/meta.yaml>`_

   


.. conda:package:: quickmerge

   |downloads_quickmerge| |docker_quickmerge|

   :versions:
      
      

      ``0.3-6``,  ``0.3-5``,  ``0.3-4``,  ``0.3-3``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends mummer: ``3.23.*``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: 
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

      mamba install quickmerge

   and update with::

      mamba update quickmerge

  To create a new environment, run::

      mamba create --name myenvname quickmerge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quickmerge:<tag>

   (see `quickmerge/tags`_ for valid values for ``<tag>``)


.. |downloads_quickmerge| image:: https://img.shields.io/conda/dn/bioconda/quickmerge.svg?style=flat
   :target: https://anaconda.org/bioconda/quickmerge
   :alt:   (downloads)
.. |docker_quickmerge| image:: https://quay.io/repository/biocontainers/quickmerge/status
   :target: https://quay.io/repository/biocontainers/quickmerge
.. _`quickmerge/tags`: https://quay.io/repository/biocontainers/quickmerge?tab=tags


.. raw:: html

    <script>
        var package = "quickmerge";
        var versions = ["0.3","0.3","0.3","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quickmerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quickmerge/README.html