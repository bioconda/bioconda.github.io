:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ampd-up'
.. highlight: bash

ampd-up
=======

.. conda:recipe:: ampd-up
   :replaces_section_title:
   :noindex:

   De novo antimicrobial peptide sequence generation with recurrent neural networks

   :homepage: https://github.com/bcgsc/AMPd-Up
   :license: GPL / GPL-3
   :recipe: /`ampd-up <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampd-up>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampd-up/meta.yaml>`_

   


.. conda:package:: ampd-up

   |downloads_ampd-up| |docker_ampd-up|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``3.6.*``
   :depends pytorch: ``<2.0.0``
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

      mamba install ampd-up

   and update with::

      mamba update ampd-up

  To create a new environment, run::

      mamba create --name myenvname ampd-up

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ampd-up:<tag>

   (see `ampd-up/tags`_ for valid values for ``<tag>``)


.. |downloads_ampd-up| image:: https://img.shields.io/conda/dn/bioconda/ampd-up.svg?style=flat
   :target: https://anaconda.org/bioconda/ampd-up
   :alt:   (downloads)
.. |docker_ampd-up| image:: https://quay.io/repository/biocontainers/ampd-up/status
   :target: https://quay.io/repository/biocontainers/ampd-up
.. _`ampd-up/tags`: https://quay.io/repository/biocontainers/ampd-up?tab=tags


.. raw:: html

    <script>
        var package = "ampd-up";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ampd-up/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ampd-up/README.html