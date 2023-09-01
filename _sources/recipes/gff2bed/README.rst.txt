:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gff2bed'
.. highlight: bash

gff2bed
=======

.. conda:recipe:: gff2bed
   :replaces_section_title:
   :noindex:

   Convert GFF3\-formatted data to BED format

   :homepage: https://gitlab.com/salk-tm/gff2bed
   :license: MIT
   :recipe: /`gff2bed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff2bed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff2bed/meta.yaml>`_

   


.. conda:package:: gff2bed

   |downloads_gff2bed| |docker_gff2bed|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends python: ``>=3.7``
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

      mamba install gff2bed

   and update with::

      mamba update gff2bed

  To create a new environment, run::

      mamba create --name myenvname gff2bed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gff2bed:<tag>

   (see `gff2bed/tags`_ for valid values for ``<tag>``)


.. |downloads_gff2bed| image:: https://img.shields.io/conda/dn/bioconda/gff2bed.svg?style=flat
   :target: https://anaconda.org/bioconda/gff2bed
   :alt:   (downloads)
.. |docker_gff2bed| image:: https://quay.io/repository/biocontainers/gff2bed/status
   :target: https://quay.io/repository/biocontainers/gff2bed
.. _`gff2bed/tags`: https://quay.io/repository/biocontainers/gff2bed?tab=tags


.. raw:: html

    <script>
        var package = "gff2bed";
        var versions = ["1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gff2bed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gff2bed/README.html