:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magetab-curation-scripts'
.. highlight: bash

magetab-curation-scripts
========================

.. conda:recipe:: magetab-curation-scripts
   :replaces_section_title:
   :noindex:

   Perl\-based scripts for ArrayExpress and Expression Atlas curation of MAGE\-TAB files

   :homepage: https://github.com/ebi-gene-expression-group/perl-curation-scripts
   :license: APACHE / Apache Software License
   :recipe: /`magetab-curation-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magetab-curation-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magetab-curation-scripts/meta.yaml>`_

   The scripts are used by ArrayExpress and Expression Atlas curators for
   validating and processing experiments and array designs in MAGE\-TAB format.



.. conda:package:: magetab-curation-scripts

   |downloads_magetab-curation-scripts| |docker_magetab-curation-scripts|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends perl: 
   :depends perl-atlas-modules: ``>=0.2.0``
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

      mamba install magetab-curation-scripts

   and update with::

      mamba update magetab-curation-scripts

  To create a new environment, run::

      mamba create --name myenvname magetab-curation-scripts

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/magetab-curation-scripts:<tag>

   (see `magetab-curation-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_magetab-curation-scripts| image:: https://img.shields.io/conda/dn/bioconda/magetab-curation-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/magetab-curation-scripts
   :alt:   (downloads)
.. |docker_magetab-curation-scripts| image:: https://quay.io/repository/biocontainers/magetab-curation-scripts/status
   :target: https://quay.io/repository/biocontainers/magetab-curation-scripts
.. _`magetab-curation-scripts/tags`: https://quay.io/repository/biocontainers/magetab-curation-scripts?tab=tags


.. raw:: html

    <script>
        var package = "magetab-curation-scripts";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magetab-curation-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magetab-curation-scripts/README.html