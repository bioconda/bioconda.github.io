:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snns'
.. highlight: bash

snns
====

.. conda:recipe:: snns
   :replaces_section_title:
   :noindex:

   Stuttgart Neural Network Simulator \(SNNS\)

   :homepage: http://www.ra.cs.uni-tuebingen.de/SNNS/
   :license: LGPL v2.1
   :recipe: /`snns <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snns>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snns/meta.yaml>`_

   


.. conda:package:: snns

   |downloads_snns| |docker_snns|

   :versions:
      
      

      ``4.3-3``,  ``4.3-2``,  ``4.3-1``,  ``4.3-0``

      

   
   :depends bison: 
   :depends flex: 
   :depends xorg-libxaw3d: 
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

      mamba install snns

   and update with::

      mamba update snns

  To create a new environment, run::

      mamba create --name myenvname snns

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snns:<tag>

   (see `snns/tags`_ for valid values for ``<tag>``)


.. |downloads_snns| image:: https://img.shields.io/conda/dn/bioconda/snns.svg?style=flat
   :target: https://anaconda.org/bioconda/snns
   :alt:   (downloads)
.. |docker_snns| image:: https://quay.io/repository/biocontainers/snns/status
   :target: https://quay.io/repository/biocontainers/snns
.. _`snns/tags`: https://quay.io/repository/biocontainers/snns?tab=tags


.. raw:: html

    <script>
        var package = "snns";
        var versions = ["4.3","4.3","4.3","4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snns/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snns/README.html