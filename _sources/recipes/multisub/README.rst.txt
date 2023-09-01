:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multisub'
.. highlight: bash

multisub
========

.. conda:recipe:: multisub
   :replaces_section_title:
   :noindex:

   multiSub is a command\-line tool to prepare and\/or submit a SARS\-CoV\-2 genome sequence to the NCBI Genbank\, EBI ENA and GISAID sequence repositories.

   :homepage: https://github.com/maximilianh/multiSub
   :license: GPL3
   :recipe: /`multisub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multisub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multisub/meta.yaml>`_

   


.. conda:package:: multisub

   |downloads_multisub| |docker_multisub|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends python: 
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

      mamba install multisub

   and update with::

      mamba update multisub

  To create a new environment, run::

      mamba create --name myenvname multisub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/multisub:<tag>

   (see `multisub/tags`_ for valid values for ``<tag>``)


.. |downloads_multisub| image:: https://img.shields.io/conda/dn/bioconda/multisub.svg?style=flat
   :target: https://anaconda.org/bioconda/multisub
   :alt:   (downloads)
.. |docker_multisub| image:: https://quay.io/repository/biocontainers/multisub/status
   :target: https://quay.io/repository/biocontainers/multisub
.. _`multisub/tags`: https://quay.io/repository/biocontainers/multisub?tab=tags


.. raw:: html

    <script>
        var package = "multisub";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multisub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multisub/README.html