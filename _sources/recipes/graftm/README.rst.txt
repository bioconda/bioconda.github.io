:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graftm'
.. highlight: bash

graftm
======

.. conda:recipe:: graftm
   :replaces_section_title:
   :noindex:

   GraftM is a pipeline used for identifying and classifying marker gene reads from metagenomic datasets

   :homepage: http://geronimp.github.io/graftM
   :license: GPL3 / GPL3+
   :recipe: /`graftm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graftm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graftm/meta.yaml>`_

   


.. conda:package:: graftm

   |downloads_graftm| |docker_graftm|

   :versions:
      
      

      ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.12.2-0``,  ``0.11.1-0``,  ``0.10.1-1``,  ``0.10.1-0``

      

   
   :depends biom-format: ``>=2.1.4``
   :depends biopython: ``>=1.64``
   :depends bird_tool_utils_python: 
   :depends dendropy: ``>=4.1.0``
   :depends diamond: ``>=0.9``
   :depends extern: 
   :depends fastalite: 
   :depends fasttree: 
   :depends hmmer: ``3.2.1.*``
   :depends jinja2: 
   :depends krona: ``>=2.4``
   :depends mafft: ``>=7.22``
   :depends mfqe: ``>=0.5.0``
   :depends orfm: ``>=0.2.0``
   :depends pplacer: 
   :depends python: 
   :depends python: ``>3.7``
   :depends pyyaml: 
   :depends taxtastic: ``>=0.5.4``
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

      mamba install graftm

   and update with::

      mamba update graftm

  To create a new environment, run::

      mamba create --name myenvname graftm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/graftm:<tag>

   (see `graftm/tags`_ for valid values for ``<tag>``)


.. |downloads_graftm| image:: https://img.shields.io/conda/dn/bioconda/graftm.svg?style=flat
   :target: https://anaconda.org/bioconda/graftm
   :alt:   (downloads)
.. |docker_graftm| image:: https://quay.io/repository/biocontainers/graftm/status
   :target: https://quay.io/repository/biocontainers/graftm
.. _`graftm/tags`: https://quay.io/repository/biocontainers/graftm?tab=tags


.. raw:: html

    <script>
        var package = "graftm";
        var versions = ["0.14.0","0.14.0","0.13.1","0.12.2","0.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graftm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graftm/README.html