:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'musicc'
.. highlight: bash

musicc
======

.. conda:recipe:: musicc
   :replaces_section_title:
   :noindex:

   MUSICC\: A marker genes based framework for metagenomic normalization and accurate profiling of gene abundances in the microbiome.

   :homepage: http://elbo.gs.washington.edu/software_musicc.html
   :license: BSD License
   :recipe: /`musicc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/musicc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/musicc/meta.yaml>`_

   


.. conda:package:: musicc

   |downloads_musicc| |docker_musicc|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends numpy: ``>=1.17.0``
   :depends pandas: ``>=0.25.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends scikit-learn: ``>=0.21.3``
   :depends scipy: ``>=1.3.0``
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

      mamba install musicc

   and update with::

      mamba update musicc

  To create a new environment, run::

      mamba create --name myenvname musicc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/musicc:<tag>

   (see `musicc/tags`_ for valid values for ``<tag>``)


.. |downloads_musicc| image:: https://img.shields.io/conda/dn/bioconda/musicc.svg?style=flat
   :target: https://anaconda.org/bioconda/musicc
   :alt:   (downloads)
.. |docker_musicc| image:: https://quay.io/repository/biocontainers/musicc/status
   :target: https://quay.io/repository/biocontainers/musicc
.. _`musicc/tags`: https://quay.io/repository/biocontainers/musicc?tab=tags


.. raw:: html

    <script>
        var package = "musicc";
        var versions = ["1.0.4","1.0.3","1.0.3","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/musicc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/musicc/README.html