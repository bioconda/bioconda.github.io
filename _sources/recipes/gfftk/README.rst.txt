:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfftk'
.. highlight: bash

gfftk
=====

.. conda:recipe:: gfftk
   :replaces_section_title:
   :noindex:

   GFFtk\: genome annotation GFF3 tool kit

   :homepage: https://github.com/nextgenusfs/gfftk
   :license: BSD / BSD-2-Clause
   :recipe: /`gfftk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfftk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfftk/meta.yaml>`_

   


.. conda:package:: gfftk

   |downloads_gfftk| |docker_gfftk|

   :versions:
      
      

      ``25.6.10-0``,  ``25.4.17-0``,  ``24.10.30-0``,  ``24.2.4-0``,  ``23.12.5-0``,  ``23.9.6-0``

      

   
   :depends gb-io: ``>=0.3.2``
   :depends natsort: 
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends requests: 
   :depends table2asn: 
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

      mamba install gfftk

   and update with::

      mamba update gfftk

  To create a new environment, run::

      mamba create --name myenvname gfftk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gfftk:<tag>

   (see `gfftk/tags`_ for valid values for ``<tag>``)


.. |downloads_gfftk| image:: https://img.shields.io/conda/dn/bioconda/gfftk.svg?style=flat
   :target: https://anaconda.org/bioconda/gfftk
   :alt:   (downloads)
.. |docker_gfftk| image:: https://quay.io/repository/biocontainers/gfftk/status
   :target: https://quay.io/repository/biocontainers/gfftk
.. _`gfftk/tags`: https://quay.io/repository/biocontainers/gfftk?tab=tags


.. raw:: html

    <script>
        var package = "gfftk";
        var versions = ["25.6.10","25.4.17","24.10.30","24.2.4","23.12.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfftk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfftk/README.html