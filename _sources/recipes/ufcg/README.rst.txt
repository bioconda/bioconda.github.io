:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ufcg'
.. highlight: bash

ufcg
====

.. conda:recipe:: ufcg
   :replaces_section_title:
   :noindex:

   UFCG pipeline provides methods for a genome\-wide taxonomic profiling and annotation of your own biological sequences of Fungi.

   :homepage: https://ufcg.steineggerlab.com
   :developer docs: https://github.com/steineggerlab/ufcg
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`ufcg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ufcg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ufcg/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkac894`

   


.. conda:package:: ufcg

   |downloads_ufcg| |docker_ufcg|

   :versions:
      
      

      ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3c-0``

      

   
   :depends augustus: ``>=3.5.0``
   :depends iqtree: 
   :depends mafft: 
   :depends mmseqs2: ``>=14.7e284``
   :depends openjdk: ``>=8``
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

      mamba install ufcg

   and update with::

      mamba update ufcg

  To create a new environment, run::

      mamba create --name myenvname ufcg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ufcg:<tag>

   (see `ufcg/tags`_ for valid values for ``<tag>``)


.. |downloads_ufcg| image:: https://img.shields.io/conda/dn/bioconda/ufcg.svg?style=flat
   :target: https://anaconda.org/bioconda/ufcg
   :alt:   (downloads)
.. |docker_ufcg| image:: https://quay.io/repository/biocontainers/ufcg/status
   :target: https://quay.io/repository/biocontainers/ufcg
.. _`ufcg/tags`: https://quay.io/repository/biocontainers/ufcg?tab=tags


.. raw:: html

    <script>
        var package = "ufcg";
        var versions = ["1.0.5","1.0.4","1.0.3c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ufcg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ufcg/README.html