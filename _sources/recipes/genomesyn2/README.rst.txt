:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomesyn2'
.. highlight: bash

genomesyn2
==========

.. conda:recipe:: genomesyn2
   :replaces_section_title:
   :noindex:

   A Comparative Genomics Framework Integrating Synteny Visualization

   :homepage: https://github.com/banzhou59/GenomeSyn2
   :license: MIT
   :recipe: /`genomesyn2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomesyn2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomesyn2/meta.yaml>`_

   GenomeSyn2 is a flexible and high\-performance framework for comparative
   genomics visualization\, synteny construction\, and multi\-genome feature
   analysis. It supports multiple alignment engines \(MUMmer\, minimap2\, BLASTp\,
   Diamond\, MMseqs2\) and provides rich downstream visualization modules.



.. conda:package:: genomesyn2

   |downloads_genomesyn2| |docker_genomesyn2|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends blast: 
   :depends cairosvg: 
   :depends diamond: 
   :depends gffread: 
   :depends minimap2: 
   :depends mmseqs2: 
   :depends mummer4: 
   :depends perl: ``>=5.32``
   :depends perl-bioperl-core: 
   :depends perl-svg: 
   :depends python: ``>=3.8``
   :depends seqkit: 
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

      mamba install genomesyn2

   and update with::

      mamba update genomesyn2

  To create a new environment, run::

      mamba create --name myenvname genomesyn2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomesyn2:<tag>

   (see `genomesyn2/tags`_ for valid values for ``<tag>``)


.. |downloads_genomesyn2| image:: https://img.shields.io/conda/dn/bioconda/genomesyn2.svg?style=flat
   :target: https://anaconda.org/bioconda/genomesyn2
   :alt:   (downloads)
.. |docker_genomesyn2| image:: https://quay.io/repository/biocontainers/genomesyn2/status
   :target: https://quay.io/repository/biocontainers/genomesyn2
.. _`genomesyn2/tags`: https://quay.io/repository/biocontainers/genomesyn2?tab=tags


.. raw:: html

    <script>
        var package = "genomesyn2";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomesyn2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomesyn2/README.html