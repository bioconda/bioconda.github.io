:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sspace_basic'
.. highlight: bash

sspace_basic
============

.. conda:recipe:: sspace_basic
   :replaces_section_title:
   :noindex:

   Scaffolding Pre\-Assemblies After Contig Extension \(SSPACE\).

   :homepage: https://github.com/nsoranzo/sspace_basic
   :license: GPL / GPL-2.0-only
   :recipe: /`sspace_basic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sspace_basic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sspace_basic/meta.yaml>`_

   


.. conda:package:: sspace_basic

   |downloads_sspace_basic| |docker_sspace_basic|

   :versions:
      
      

      ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``

      

   
   :depends bowtie: ``>=1.1.2``
   :depends perl: ``>=5.24``
   :depends python: 
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

      mamba install sspace_basic

   and update with::

      mamba update sspace_basic

  To create a new environment, run::

      mamba create --name myenvname sspace_basic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sspace_basic:<tag>

   (see `sspace_basic/tags`_ for valid values for ``<tag>``)


.. |downloads_sspace_basic| image:: https://img.shields.io/conda/dn/bioconda/sspace_basic.svg?style=flat
   :target: https://anaconda.org/bioconda/sspace_basic
   :alt:   (downloads)
.. |docker_sspace_basic| image:: https://quay.io/repository/biocontainers/sspace_basic/status
   :target: https://quay.io/repository/biocontainers/sspace_basic
.. _`sspace_basic/tags`: https://quay.io/repository/biocontainers/sspace_basic?tab=tags


.. raw:: html

    <script>
        var package = "sspace_basic";
        var versions = ["2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sspace_basic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sspace_basic/README.html