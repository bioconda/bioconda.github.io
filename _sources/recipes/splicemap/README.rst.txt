:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'splicemap'
.. highlight: bash

splicemap
=========

.. conda:recipe:: splicemap
   :replaces_section_title:
   :noindex:

   Detects splice junctions from RNA\-seq data. This method does not depend on any existing annotation of gene structures and is capable of finding novel splice junctions with high sensitivity and specificity. It can handle long reads \(50–100 nt\) and can exploit paired\-read information to improve mapping accuracy.

   :homepage: http://www.stanford.edu/group/wonglab/SpliceMap/
   :license: file
   :recipe: /`splicemap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splicemap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splicemap/meta.yaml>`_
   :links: biotools: :biotools:`splicemap`, doi: :doi:`10.1093/nar/gkq211`

   


.. conda:package:: splicemap

   |downloads_splicemap| |docker_splicemap|

   :versions:
      
      

      ``3.3.5.2-6``,  ``3.3.5.2-5``,  ``3.3.5.2-4``,  ``3.3.5.2-3``,  ``3.3.5.2-2``,  ``3.3.5.2-1``,  ``3.3.5.2-0``

      

   
   :depends bowtie: 
   :depends libcxx: ``>=18``
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

      mamba install splicemap

   and update with::

      mamba update splicemap

  To create a new environment, run::

      mamba create --name myenvname splicemap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/splicemap:<tag>

   (see `splicemap/tags`_ for valid values for ``<tag>``)


.. |downloads_splicemap| image:: https://img.shields.io/conda/dn/bioconda/splicemap.svg?style=flat
   :target: https://anaconda.org/bioconda/splicemap
   :alt:   (downloads)
.. |docker_splicemap| image:: https://quay.io/repository/biocontainers/splicemap/status
   :target: https://quay.io/repository/biocontainers/splicemap
.. _`splicemap/tags`: https://quay.io/repository/biocontainers/splicemap?tab=tags


.. raw:: html

    <script>
        var package = "splicemap";
        var versions = ["3.3.5.2","3.3.5.2","3.3.5.2","3.3.5.2","3.3.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/splicemap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/splicemap/README.html