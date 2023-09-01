:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplocheck'
.. highlight: bash

haplocheck
==========

.. conda:recipe:: haplocheck
   :replaces_section_title:
   :noindex:

   Detects in\-sample contamination in mtDNA or WGS sequencing studies by analyzing the mitchondrial content.

   :homepage: https://github.com/genepi/haplocheck
   :license: MIT
   :recipe: /`haplocheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplocheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplocheck/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.256545.119`

   


.. conda:package:: haplocheck

   |downloads_haplocheck| |docker_haplocheck|

   :versions:
      
      

      ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``

      

   
   :depends openjdk: ``>=8``
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

      mamba install haplocheck

   and update with::

      mamba update haplocheck

  To create a new environment, run::

      mamba create --name myenvname haplocheck

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haplocheck:<tag>

   (see `haplocheck/tags`_ for valid values for ``<tag>``)


.. |downloads_haplocheck| image:: https://img.shields.io/conda/dn/bioconda/haplocheck.svg?style=flat
   :target: https://anaconda.org/bioconda/haplocheck
   :alt:   (downloads)
.. |docker_haplocheck| image:: https://quay.io/repository/biocontainers/haplocheck/status
   :target: https://quay.io/repository/biocontainers/haplocheck
.. _`haplocheck/tags`: https://quay.io/repository/biocontainers/haplocheck?tab=tags


.. raw:: html

    <script>
        var package = "haplocheck";
        var versions = ["1.3.3","1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplocheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplocheck/README.html