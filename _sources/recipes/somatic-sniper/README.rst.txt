:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'somatic-sniper'
.. highlight: bash

somatic-sniper
==============

.. conda:recipe:: somatic-sniper
   :replaces_section_title:
   :noindex:

   A tool to call somatic single nucleotide variants.

   :homepage: https://github.com/genome/somatic-sniper/
   :license: MIT
   :recipe: /`somatic-sniper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somatic-sniper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somatic-sniper/meta.yaml>`_

   


.. conda:package:: somatic-sniper

   |downloads_somatic-sniper| |docker_somatic-sniper|

   :versions:
      
      

      ``1.0.5.0-1``,  ``1.0.5.0-0``

      

   
   :depends zlib: ``1.2.11*``
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

      mamba install somatic-sniper

   and update with::

      mamba update somatic-sniper

  To create a new environment, run::

      mamba create --name myenvname somatic-sniper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/somatic-sniper:<tag>

   (see `somatic-sniper/tags`_ for valid values for ``<tag>``)


.. |downloads_somatic-sniper| image:: https://img.shields.io/conda/dn/bioconda/somatic-sniper.svg?style=flat
   :target: https://anaconda.org/bioconda/somatic-sniper
   :alt:   (downloads)
.. |docker_somatic-sniper| image:: https://quay.io/repository/biocontainers/somatic-sniper/status
   :target: https://quay.io/repository/biocontainers/somatic-sniper
.. _`somatic-sniper/tags`: https://quay.io/repository/biocontainers/somatic-sniper?tab=tags


.. raw:: html

    <script>
        var package = "somatic-sniper";
        var versions = ["1.0.5.0","1.0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/somatic-sniper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/somatic-sniper/README.html