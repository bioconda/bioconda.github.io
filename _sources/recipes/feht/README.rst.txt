:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'feht'
.. highlight: bash

feht
====

.. conda:recipe:: feht
   :replaces_section_title:
   :noindex:

   A commandline program to automatically identify markers predictive of groups. Can be used with binary data\, genomic \(single nucleotide variant\) data\, or arbitrary character data.

   :homepage: https://github.com/chadlaing/feht/
   :license: BSD / BSD 3-clause
   :recipe: /`feht <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feht>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feht/meta.yaml>`_

   


.. conda:package:: feht

   |downloads_feht| |docker_feht|

   :versions:
      
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
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

      mamba install feht

   and update with::

      mamba update feht

  To create a new environment, run::

      mamba create --name myenvname feht

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/feht:<tag>

   (see `feht/tags`_ for valid values for ``<tag>``)


.. |downloads_feht| image:: https://img.shields.io/conda/dn/bioconda/feht.svg?style=flat
   :target: https://anaconda.org/bioconda/feht
   :alt:   (downloads)
.. |docker_feht| image:: https://quay.io/repository/biocontainers/feht/status
   :target: https://quay.io/repository/biocontainers/feht
.. _`feht/tags`: https://quay.io/repository/biocontainers/feht?tab=tags


.. raw:: html

    <script>
        var package = "feht";
        var versions = ["1.1.0","1.1.0","1.1.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/feht/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/feht/README.html