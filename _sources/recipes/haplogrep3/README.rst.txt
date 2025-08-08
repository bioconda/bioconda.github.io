:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplogrep3'
.. highlight: bash

haplogrep3
==========

.. conda:recipe:: haplogrep3
   :replaces_section_title:
   :noindex:

   A tool for mtDNA haplogroup classification.

   :homepage: https://haplogrep.i-med.ac.at
   :documentation: https://haplogrep.readthedocs.io/en/latest
   
   :developer docs: https://github.com/genepi/haplogrep3
   :license: MIT / MIT
   :recipe: /`haplogrep3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplogrep3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplogrep3/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkad284`

   


.. conda:package:: haplogrep3

   |downloads_haplogrep3| |docker_haplogrep3|

   :versions:
      
      

      ``3.2.2-1``,  ``3.2.2-0``

      

   
   :depends openjdk: ``>=11``
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

      mamba install haplogrep3

   and update with::

      mamba update haplogrep3

  To create a new environment, run::

      mamba create --name myenvname haplogrep3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haplogrep3:<tag>

   (see `haplogrep3/tags`_ for valid values for ``<tag>``)


.. |downloads_haplogrep3| image:: https://img.shields.io/conda/dn/bioconda/haplogrep3.svg?style=flat
   :target: https://anaconda.org/bioconda/haplogrep3
   :alt:   (downloads)
.. |docker_haplogrep3| image:: https://quay.io/repository/biocontainers/haplogrep3/status
   :target: https://quay.io/repository/biocontainers/haplogrep3
.. _`haplogrep3/tags`: https://quay.io/repository/biocontainers/haplogrep3?tab=tags


.. raw:: html

    <script>
        var package = "haplogrep3";
        var versions = ["3.2.2","3.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplogrep3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplogrep3/README.html