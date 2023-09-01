:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 's3gof3r'
.. highlight: bash

s3gof3r
=======

.. conda:recipe:: s3gof3r
   :replaces_section_title:
   :noindex:

   Fast\, concurrent\, streaming access to Amazon S3\, including gof3r\, a CLI

   :homepage: https://github.com/rlmcpherson/s3gof3r
   :license: MIT
   :recipe: /`s3gof3r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/s3gof3r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/s3gof3r/meta.yaml>`_

   


.. conda:package:: s3gof3r

   |downloads_s3gof3r| |docker_s3gof3r|

   :versions:
      
      

      ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
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

      mamba install s3gof3r

   and update with::

      mamba update s3gof3r

  To create a new environment, run::

      mamba create --name myenvname s3gof3r

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/s3gof3r:<tag>

   (see `s3gof3r/tags`_ for valid values for ``<tag>``)


.. |downloads_s3gof3r| image:: https://img.shields.io/conda/dn/bioconda/s3gof3r.svg?style=flat
   :target: https://anaconda.org/bioconda/s3gof3r
   :alt:   (downloads)
.. |docker_s3gof3r| image:: https://quay.io/repository/biocontainers/s3gof3r/status
   :target: https://quay.io/repository/biocontainers/s3gof3r
.. _`s3gof3r/tags`: https://quay.io/repository/biocontainers/s3gof3r?tab=tags


.. raw:: html

    <script>
        var package = "s3gof3r";
        var versions = ["0.5.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/s3gof3r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/s3gof3r/README.html