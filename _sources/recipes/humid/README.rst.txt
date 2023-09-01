:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'humid'
.. highlight: bash

humid
=====

.. conda:recipe:: humid
   :replaces_section_title:
   :noindex:

   HUMID \-\- High\-performance UMI Deduplicator

   :homepage: https://github.com/jfjlaros/HUMID
   :license: MIT
   :recipe: /`humid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/humid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/humid/meta.yaml>`_

   


.. conda:package:: humid

   |downloads_humid| |docker_humid|

   :versions:
      
      

      ``1.0.37-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends isa-l: 
   :depends libcxx: ``>=14.0.4``
   :depends libdeflate: ``>=1.13,<1.14.0a0``
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

      mamba install humid

   and update with::

      mamba update humid

  To create a new environment, run::

      mamba create --name myenvname humid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/humid:<tag>

   (see `humid/tags`_ for valid values for ``<tag>``)


.. |downloads_humid| image:: https://img.shields.io/conda/dn/bioconda/humid.svg?style=flat
   :target: https://anaconda.org/bioconda/humid
   :alt:   (downloads)
.. |docker_humid| image:: https://quay.io/repository/biocontainers/humid/status
   :target: https://quay.io/repository/biocontainers/humid
.. _`humid/tags`: https://quay.io/repository/biocontainers/humid?tab=tags


.. raw:: html

    <script>
        var package = "humid";
        var versions = ["1.0.37","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/humid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/humid/README.html