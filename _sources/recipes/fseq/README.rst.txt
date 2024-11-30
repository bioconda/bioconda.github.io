:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fseq'
.. highlight: bash

fseq
====

.. conda:recipe:: fseq
   :replaces_section_title:
   :noindex:

   F\-Seq\: A feature density estimator for high\-throughput sequence tags

   :homepage: http://fureylab.web.unc.edu/software/fseq/
   :license: GPL >=3
   :recipe: /`fseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fseq/meta.yaml>`_

   


.. conda:package:: fseq

   |downloads_fseq| |docker_fseq|

   :versions:
      
      

      ``1.84-0``

      

   
   :depends openjdk: ``>=6``
   :depends perl: ``5.22.0*``
   :depends python: ``2.7*``
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

      mamba install fseq

   and update with::

      mamba update fseq

  To create a new environment, run::

      mamba create --name myenvname fseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fseq:<tag>

   (see `fseq/tags`_ for valid values for ``<tag>``)


.. |downloads_fseq| image:: https://img.shields.io/conda/dn/bioconda/fseq.svg?style=flat
   :target: https://anaconda.org/bioconda/fseq
   :alt:   (downloads)
.. |docker_fseq| image:: https://quay.io/repository/biocontainers/fseq/status
   :target: https://quay.io/repository/biocontainers/fseq
.. _`fseq/tags`: https://quay.io/repository/biocontainers/fseq?tab=tags


.. raw:: html

    <script>
        var package = "fseq";
        var versions = ["1.84"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fseq/README.html