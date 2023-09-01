:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgbio-minimal'
.. highlight: bash

fgbio-minimal
=============

.. conda:recipe:: fgbio-minimal
   :replaces_section_title:
   :noindex:

   A set of tools for working with genomic and high throughput sequencing data\, including UMIs

   :homepage: https://github.com/fulcrumgenomics/fgbio
   :license: MIT
   :recipe: /`fgbio-minimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgbio-minimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgbio-minimal/meta.yaml>`_

   A set of tools for working with genomic and high throughput sequencing data\, including UMIs. The \'fgbio\-minimal\' package offers an installation of fgbio without the \'r\-base\' dependency.


.. conda:package:: fgbio-minimal

   |downloads_fgbio-minimal| |docker_fgbio-minimal|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.5.1-0``,  ``1.5.0-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
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

      mamba install fgbio-minimal

   and update with::

      mamba update fgbio-minimal

  To create a new environment, run::

      mamba create --name myenvname fgbio-minimal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fgbio-minimal:<tag>

   (see `fgbio-minimal/tags`_ for valid values for ``<tag>``)


.. |downloads_fgbio-minimal| image:: https://img.shields.io/conda/dn/bioconda/fgbio-minimal.svg?style=flat
   :target: https://anaconda.org/bioconda/fgbio-minimal
   :alt:   (downloads)
.. |docker_fgbio-minimal| image:: https://quay.io/repository/biocontainers/fgbio-minimal/status
   :target: https://quay.io/repository/biocontainers/fgbio-minimal
.. _`fgbio-minimal/tags`: https://quay.io/repository/biocontainers/fgbio-minimal?tab=tags


.. raw:: html

    <script>
        var package = "fgbio-minimal";
        var versions = ["2.1.0","2.0.2","2.0.1","2.0.0","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgbio-minimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgbio-minimal/README.html