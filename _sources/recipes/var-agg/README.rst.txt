:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'var-agg'
.. highlight: bash

var-agg
=======

.. conda:recipe:: var-agg
   :replaces_section_title:
   :noindex:

   A simple helper for aggregating multi\-sample VCF files into \"site VCF\" files.

   :homepage: https://github.com/bihealth/var-agg
   :license: MIT
   :recipe: /`var-agg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/var-agg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/var-agg/meta.yaml>`_

   


.. conda:package:: var-agg

   |downloads_var-agg| |docker_var-agg|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install var-agg

   and update with::

      mamba update var-agg

  To create a new environment, run::

      mamba create --name myenvname var-agg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/var-agg:<tag>

   (see `var-agg/tags`_ for valid values for ``<tag>``)


.. |downloads_var-agg| image:: https://img.shields.io/conda/dn/bioconda/var-agg.svg?style=flat
   :target: https://anaconda.org/bioconda/var-agg
   :alt:   (downloads)
.. |docker_var-agg| image:: https://quay.io/repository/biocontainers/var-agg/status
   :target: https://quay.io/repository/biocontainers/var-agg
.. _`var-agg/tags`: https://quay.io/repository/biocontainers/var-agg?tab=tags


.. raw:: html

    <script>
        var package = "var-agg";
        var versions = ["0.1.1","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/var-agg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/var-agg/README.html