:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genview'
.. highlight: bash

genview
=======

.. conda:recipe:: genview
   :replaces_section_title:
   :noindex:

   Gene\-centric visualization tool for genomic sequences

   :homepage: https://github.com/EbmeyerSt/GEnView.git
   :license: GPLv3.0
   :recipe: /`genview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genview/meta.yaml>`_

   


.. conda:package:: genview

   |downloads_genview| |docker_genview|

   :versions:
      
      

      ``0.2-0``,  ``0.1.1-0``,  ``0.1-0``

      

   
   :depends biopython: ``>=1.68``
   :depends blast: 
   :depends cd-hit: 
   :depends diamond: 
   :depends fasttree: 
   :depends mafft: 
   :depends numpy: 
   :depends pandas: 
   :depends pip: 
   :depends prodigal: 
   :depends python: ``>=3.6``
   :depends sqlite: ``>=3.38.2,<4.0a0``
   :depends time: 
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

      mamba install genview

   and update with::

      mamba update genview

  To create a new environment, run::

      mamba create --name myenvname genview

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genview:<tag>

   (see `genview/tags`_ for valid values for ``<tag>``)


.. |downloads_genview| image:: https://img.shields.io/conda/dn/bioconda/genview.svg?style=flat
   :target: https://anaconda.org/bioconda/genview
   :alt:   (downloads)
.. |docker_genview| image:: https://quay.io/repository/biocontainers/genview/status
   :target: https://quay.io/repository/biocontainers/genview
.. _`genview/tags`: https://quay.io/repository/biocontainers/genview?tab=tags


.. raw:: html

    <script>
        var package = "genview";
        var versions = ["0.2","0.1.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genview/README.html