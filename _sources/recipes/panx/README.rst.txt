:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panx'
.. highlight: bash

panx
====

.. conda:recipe:: panx/1.6.0
   :replaces_section_title:
   :noindex:

   Microbial pan\-genome analysis and exploration tool

   :homepage: http://pangenome.de
   :license: GNU General Public License v3.0
   :recipe: /`panx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panx>`_/`1.6.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panx/1.6.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panx/1.6.0/meta.yaml>`_

   


.. conda:package:: panx

   |downloads_panx| |docker_panx|

   :versions:
      
      

      ``1.6.0-0``,  ``1.5.0-0``

      

   
   :depends biopython: 
   :depends diamond: 
   :depends ete2: 
   :depends fasttree: 
   :depends mafft: 
   :depends mcl: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``2.7*``
   :depends raxml: 
   :depends scipy: 
   :depends treetime: 
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

      mamba install panx

   and update with::

      mamba update panx

  To create a new environment, run::

      mamba create --name myenvname panx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panx:<tag>

   (see `panx/tags`_ for valid values for ``<tag>``)


.. |downloads_panx| image:: https://img.shields.io/conda/dn/bioconda/panx.svg?style=flat
   :target: https://anaconda.org/bioconda/panx
   :alt:   (downloads)
.. |docker_panx| image:: https://quay.io/repository/biocontainers/panx/status
   :target: https://quay.io/repository/biocontainers/panx
.. _`panx/tags`: https://quay.io/repository/biocontainers/panx?tab=tags


.. raw:: html

    <script>
        var package = "panx";
        var versions = ["1.6.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panx/README.html