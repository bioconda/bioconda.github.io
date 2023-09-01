:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yass'
.. highlight: bash

yass
====

.. conda:recipe:: yass
   :replaces_section_title:
   :noindex:

   YASS is a genomic similarity search tool\, for nucleic \(DNA\/RNA\) sequences in fasta or plain text format.

   :homepage: http://bioinfo.lifl.fr/yass/
   :license: CeCILL Free Software License
   :recipe: /`yass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yass/meta.yaml>`_
   :links: biotools: :biotools:`yass`

   


.. conda:package:: yass

   |downloads_yass| |docker_yass|

   :versions:
      
      

      ``1.14-6``,  ``1.14-5``,  ``1.14-4``,  ``1.14-3``,  ``1.14-2``,  ``1.14-1``,  ``1.14-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install yass

   and update with::

      mamba update yass

  To create a new environment, run::

      mamba create --name myenvname yass

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yass:<tag>

   (see `yass/tags`_ for valid values for ``<tag>``)


.. |downloads_yass| image:: https://img.shields.io/conda/dn/bioconda/yass.svg?style=flat
   :target: https://anaconda.org/bioconda/yass
   :alt:   (downloads)
.. |docker_yass| image:: https://quay.io/repository/biocontainers/yass/status
   :target: https://quay.io/repository/biocontainers/yass
.. _`yass/tags`: https://quay.io/repository/biocontainers/yass?tab=tags


.. raw:: html

    <script>
        var package = "yass";
        var versions = ["1.14","1.14","1.14","1.14","1.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yass/README.html