:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spotyping'
.. highlight: bash

spotyping
=========

.. conda:recipe:: spotyping
   :replaces_section_title:
   :noindex:

   SpoTyping\: fast and accurate in silico Mycobacterium spoligotyping from sequence reads

   :homepage: https://github.com/xiaeryu/SpoTyping
   :license: GPL / GPL-3
   :recipe: /`spotyping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spotyping/meta.yaml>`_
   :links: DOI: :DOI:`10.1186/s13073-016-0270-7`

   


.. conda:package:: spotyping

   |downloads_spotyping| |docker_spotyping|

   :versions:
      
      

      ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``

      

   
   :depends blast: 
   :depends python: ``<3``
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

      mamba install spotyping

   and update with::

      mamba update spotyping

  To create a new environment, run::

      mamba create --name myenvname spotyping

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spotyping:<tag>

   (see `spotyping/tags`_ for valid values for ``<tag>``)


.. |downloads_spotyping| image:: https://img.shields.io/conda/dn/bioconda/spotyping.svg?style=flat
   :target: https://anaconda.org/bioconda/spotyping
   :alt:   (downloads)
.. |docker_spotyping| image:: https://quay.io/repository/biocontainers/spotyping/status
   :target: https://quay.io/repository/biocontainers/spotyping
.. _`spotyping/tags`: https://quay.io/repository/biocontainers/spotyping?tab=tags


.. raw:: html

    <script>
        var package = "spotyping";
        var versions = ["2.1","2.1","2.1","2.1","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spotyping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spotyping/README.html