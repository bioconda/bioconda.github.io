:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spotyping3'
.. highlight: bash

spotyping3
==========

.. conda:recipe:: spotyping3
   :replaces_section_title:
   :noindex:

   SpoTyping3\: fast and accurate in silico Mycobacterium spoligotyping from sequence reads\, compatible with Python3

   :homepage: https://github.com/matnguyen/SpoTyping
   :license: GPL / GPL-3
   :recipe: /`spotyping3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping3/meta.yaml>`_
   :links: DOI: :DOI:`10.1186/s13073-016-0270-7`

   


.. conda:package:: spotyping3

   |downloads_spotyping3| |docker_spotyping3|

   :versions:
      
      

      ``3.0-0``

      

   
   :depends blast: 
   :depends python: ``>=3.5``
   :depends r-gdata: 
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

      mamba install spotyping3

   and update with::

      mamba update spotyping3

  To create a new environment, run::

      mamba create --name myenvname spotyping3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spotyping3:<tag>

   (see `spotyping3/tags`_ for valid values for ``<tag>``)


.. |downloads_spotyping3| image:: https://img.shields.io/conda/dn/bioconda/spotyping3.svg?style=flat
   :target: https://anaconda.org/bioconda/spotyping3
   :alt:   (downloads)
.. |docker_spotyping3| image:: https://quay.io/repository/biocontainers/spotyping3/status
   :target: https://quay.io/repository/biocontainers/spotyping3
.. _`spotyping3/tags`: https://quay.io/repository/biocontainers/spotyping3?tab=tags


.. raw:: html

    <script>
        var package = "spotyping3";
        var versions = ["3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spotyping3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spotyping3/README.html