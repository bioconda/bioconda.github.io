:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jvarkit-bam2svg'
.. highlight: bash

jvarkit-bam2svg
===============

.. conda:recipe:: jvarkit-bam2svg
   :replaces_section_title:
   :noindex:

   BAM to Scalar Vector Graphics \(SVG\)

   :homepage: http://lindenb.github.io/jvarkit/BamToSVG.html
   :license: MIT
   :recipe: /`jvarkit-bam2svg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-bam2svg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-bam2svg/meta.yaml>`_

   


.. conda:package:: jvarkit-bam2svg

   |downloads_jvarkit-bam2svg| |docker_jvarkit-bam2svg|

   :versions:
      
      

      ``201904251722-1``,  ``201904251722-0``

      

   
   :depends openjdk: ``>=11``
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

      mamba install jvarkit-bam2svg

   and update with::

      mamba update jvarkit-bam2svg

  To create a new environment, run::

      mamba create --name myenvname jvarkit-bam2svg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jvarkit-bam2svg:<tag>

   (see `jvarkit-bam2svg/tags`_ for valid values for ``<tag>``)


.. |downloads_jvarkit-bam2svg| image:: https://img.shields.io/conda/dn/bioconda/jvarkit-bam2svg.svg?style=flat
   :target: https://anaconda.org/bioconda/jvarkit-bam2svg
   :alt:   (downloads)
.. |docker_jvarkit-bam2svg| image:: https://quay.io/repository/biocontainers/jvarkit-bam2svg/status
   :target: https://quay.io/repository/biocontainers/jvarkit-bam2svg
.. _`jvarkit-bam2svg/tags`: https://quay.io/repository/biocontainers/jvarkit-bam2svg?tab=tags


.. raw:: html

    <script>
        var package = "jvarkit-bam2svg";
        var versions = ["201904251722","201904251722"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jvarkit-bam2svg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jvarkit-bam2svg/README.html