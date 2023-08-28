:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pmga'
.. highlight: bash

pmga
====

.. conda:recipe:: pmga
   :replaces_section_title:
   :noindex:

   Command\-line version of PMGA \(PubMLST Genome Annotator\) for all Neisseria species and Haemophilus influenzae

   :homepage: https://github.com/CDCgov/BMGAP
   :license: AGPL / AGPL-2.0
   :recipe: /`pmga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmga/meta.yaml>`_
   :links: doi: :doi:`10.3389/fgene.2020.601870`

   


.. conda:package:: pmga

   |downloads_pmga| |docker_pmga|

   :versions:
      
      

      ``3.0.2-0``,  ``3.0.1-0``

      

   
   :depends biopython: ``>1.77``
   :depends blast: 
   :depends executor: 
   :depends mash: ``1.1.*``
   :depends pigz: 
   :depends python: ``>=3.7``
   :depends requests: 
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

      mamba install pmga

   and update with::

      mamba update pmga

  To create a new environment, run::

      mamba create --name myenvname pmga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pmga:<tag>

   (see `pmga/tags`_ for valid values for ``<tag>``)


.. |downloads_pmga| image:: https://img.shields.io/conda/dn/bioconda/pmga.svg?style=flat
   :target: https://anaconda.org/bioconda/pmga
   :alt:   (downloads)
.. |docker_pmga| image:: https://quay.io/repository/biocontainers/pmga/status
   :target: https://quay.io/repository/biocontainers/pmga
.. _`pmga/tags`: https://quay.io/repository/biocontainers/pmga?tab=tags


.. raw:: html

    <script>
        var package = "pmga";
        var versions = ["3.0.2","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pmga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pmga/README.html