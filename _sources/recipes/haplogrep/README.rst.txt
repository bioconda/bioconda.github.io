:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplogrep'
.. highlight: bash

haplogrep
=========

.. conda:recipe:: haplogrep
   :replaces_section_title:
   :noindex:

   A tool for mtDNA haplogroup classification.

   :homepage: https://haplogrep.i-med.ac.at
   :documentation: https://github.com/seppinho/haplogrep-cmd
   
   :developer docs: https://github.com/seppinho/haplogrep-cmd
   :license: MIT
   :recipe: /`haplogrep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplogrep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplogrep/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw233`

   


.. conda:package:: haplogrep

   |downloads_haplogrep| |docker_haplogrep|

   :versions:
      
      

      ``2.4.0-0``

      

   
   :depends openjdk: 
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

      mamba install haplogrep

   and update with::

      mamba update haplogrep

  To create a new environment, run::

      mamba create --name myenvname haplogrep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haplogrep:<tag>

   (see `haplogrep/tags`_ for valid values for ``<tag>``)


.. |downloads_haplogrep| image:: https://img.shields.io/conda/dn/bioconda/haplogrep.svg?style=flat
   :target: https://anaconda.org/bioconda/haplogrep
   :alt:   (downloads)
.. |docker_haplogrep| image:: https://quay.io/repository/biocontainers/haplogrep/status
   :target: https://quay.io/repository/biocontainers/haplogrep
.. _`haplogrep/tags`: https://quay.io/repository/biocontainers/haplogrep?tab=tags


.. raw:: html

    <script>
        var package = "haplogrep";
        var versions = ["2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplogrep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplogrep/README.html