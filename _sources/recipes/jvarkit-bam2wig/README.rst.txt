:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jvarkit-bam2wig'
.. highlight: bash

jvarkit-bam2wig
===============

.. conda:recipe:: jvarkit-bam2wig
   :replaces_section_title:
   :noindex:

   Bam to fixedStep Wiggle converter\, or BED GRAPH.

   :homepage: http://lindenb.github.io/jvarkit/Bam2Wig.html
   :license: MIT
   :recipe: /`jvarkit-bam2wig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-bam2wig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-bam2wig/meta.yaml>`_

   


.. conda:package:: jvarkit-bam2wig

   |downloads_jvarkit-bam2wig| |docker_jvarkit-bam2wig|

   :versions:
      
      

      ``201904251722-1``,  ``201904251722-0``

      

   
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

      mamba install jvarkit-bam2wig

   and update with::

      mamba update jvarkit-bam2wig

  To create a new environment, run::

      mamba create --name myenvname jvarkit-bam2wig

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jvarkit-bam2wig:<tag>

   (see `jvarkit-bam2wig/tags`_ for valid values for ``<tag>``)


.. |downloads_jvarkit-bam2wig| image:: https://img.shields.io/conda/dn/bioconda/jvarkit-bam2wig.svg?style=flat
   :target: https://anaconda.org/bioconda/jvarkit-bam2wig
   :alt:   (downloads)
.. |docker_jvarkit-bam2wig| image:: https://quay.io/repository/biocontainers/jvarkit-bam2wig/status
   :target: https://quay.io/repository/biocontainers/jvarkit-bam2wig
.. _`jvarkit-bam2wig/tags`: https://quay.io/repository/biocontainers/jvarkit-bam2wig?tab=tags


.. raw:: html

    <script>
        var package = "jvarkit-bam2wig";
        var versions = ["201904251722","201904251722"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jvarkit-bam2wig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jvarkit-bam2wig/README.html