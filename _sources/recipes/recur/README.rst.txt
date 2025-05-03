:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recur'
.. highlight: bash

recur
=====

.. conda:recipe:: recur
   :replaces_section_title:
   :noindex:

   Detect recurrent amino\-acid substitutions from multiple\-sequence alignments.

   :homepage: https://github.com/OrthoFinder/RECUR
   :documentation: https://orthofinder.github.io/RECUR
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`recur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recur/meta.yaml>`_

   


.. conda:package:: recur

   |downloads_recur| |docker_recur|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends dendropy: 
   :depends iqtree: ``>=2,<3``
   :depends numpy: 
   :depends psutil: 
   :depends python: ``>=3.9,<3.13``
   :depends pyyaml: 
   :depends rich: 
   :depends types-pyyaml: 
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

      mamba install recur

   and update with::

      mamba update recur

  To create a new environment, run::

      mamba create --name myenvname recur

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/recur:<tag>

   (see `recur/tags`_ for valid values for ``<tag>``)


.. |downloads_recur| image:: https://img.shields.io/conda/dn/bioconda/recur.svg?style=flat
   :target: https://anaconda.org/bioconda/recur
   :alt:   (downloads)
.. |docker_recur| image:: https://quay.io/repository/biocontainers/recur/status
   :target: https://quay.io/repository/biocontainers/recur
.. _`recur/tags`: https://quay.io/repository/biocontainers/recur?tab=tags


.. raw:: html

    <script>
        var package = "recur";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recur/README.html