:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'e-pcr'
.. highlight: bash

e-pcr
=====

.. conda:recipe:: e-pcr
   :replaces_section_title:
   :noindex:

   e\-PCR identifies sequence tagged sites\(STSs\)within DNA sequences..

   :homepage: http://www.ncbi.nlm.nih.gov/tools/epcr/
   :license: GPLv2
   :recipe: /`e-pcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/e-pcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/e-pcr/meta.yaml>`_

   


.. conda:package:: e-pcr

   |downloads_e-pcr| |docker_e-pcr|

   :versions:
      
      

      ``2.3.12-0``

      

   
   :depends libgcc: 
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

      mamba install e-pcr

   and update with::

      mamba update e-pcr

  To create a new environment, run::

      mamba create --name myenvname e-pcr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/e-pcr:<tag>

   (see `e-pcr/tags`_ for valid values for ``<tag>``)


.. |downloads_e-pcr| image:: https://img.shields.io/conda/dn/bioconda/e-pcr.svg?style=flat
   :target: https://anaconda.org/bioconda/e-pcr
   :alt:   (downloads)
.. |docker_e-pcr| image:: https://quay.io/repository/biocontainers/e-pcr/status
   :target: https://quay.io/repository/biocontainers/e-pcr
.. _`e-pcr/tags`: https://quay.io/repository/biocontainers/e-pcr?tab=tags


.. raw:: html

    <script>
        var package = "e-pcr";
        var versions = ["2.3.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/e-pcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/e-pcr/README.html