:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'finestructure'
.. highlight: bash

finestructure
=============

.. conda:recipe:: finestructure
   :replaces_section_title:
   :noindex:

   fineSTRUCTURE is a fast and powerful algorithm for identifying population structure using dense sequencing data.

   :homepage: https://people.maths.bris.ac.uk/~madjl/finestructure/finestructure.html
   :license: OTHER
   :recipe: /`finestructure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finestructure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finestructure/meta.yaml>`_
   :links: biotools: :biotools:`fineSTRUCTURE`, doi: :doi:`10.1371/journal.pgen.1002453`

   


.. conda:package:: finestructure

   |downloads_finestructure| |docker_finestructure|

   :versions:
      
      

      ``4.1.1-0``,  ``2.1.3-7``,  ``2.1.3-6``,  ``2.1.3-5``,  ``2.1.3-4``,  ``2.1.3-3``,  ``2.1.3-2``,  ``2.1.3-1``,  ``2.1.3-0``

      

   
   :depends clang: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends r-ape: 
   :depends r-xml: 
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

      mamba install finestructure

   and update with::

      mamba update finestructure

  To create a new environment, run::

      mamba create --name myenvname finestructure

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/finestructure:<tag>

   (see `finestructure/tags`_ for valid values for ``<tag>``)


.. |downloads_finestructure| image:: https://img.shields.io/conda/dn/bioconda/finestructure.svg?style=flat
   :target: https://anaconda.org/bioconda/finestructure
   :alt:   (downloads)
.. |docker_finestructure| image:: https://quay.io/repository/biocontainers/finestructure/status
   :target: https://quay.io/repository/biocontainers/finestructure
.. _`finestructure/tags`: https://quay.io/repository/biocontainers/finestructure?tab=tags


.. raw:: html

    <script>
        var package = "finestructure";
        var versions = ["4.1.1","2.1.3","2.1.3","2.1.3","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/finestructure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/finestructure/README.html