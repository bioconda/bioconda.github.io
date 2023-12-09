:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'insilicosv'
.. highlight: bash

insilicosv
==========

.. conda:recipe:: insilicosv
   :replaces_section_title:
   :noindex:

   Simulator for complex structural variants

   :homepage: https://github.com/PopicLab/insilicoSV
   :license: MIT / MIT
   :recipe: /`insilicosv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/insilicosv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/insilicosv/meta.yaml>`_

   


.. conda:package:: insilicosv

   |downloads_insilicosv| |docker_insilicosv|

   :versions:
      
      

      ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends cycler: 
   :depends kiwisolver: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pillow: 
   :depends pyparsing: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends python-dateutil: 
   :depends pyyaml: 
   :depends six: 
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

      mamba install insilicosv

   and update with::

      mamba update insilicosv

  To create a new environment, run::

      mamba create --name myenvname insilicosv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/insilicosv:<tag>

   (see `insilicosv/tags`_ for valid values for ``<tag>``)


.. |downloads_insilicosv| image:: https://img.shields.io/conda/dn/bioconda/insilicosv.svg?style=flat
   :target: https://anaconda.org/bioconda/insilicosv
   :alt:   (downloads)
.. |docker_insilicosv| image:: https://quay.io/repository/biocontainers/insilicosv/status
   :target: https://quay.io/repository/biocontainers/insilicosv
.. _`insilicosv/tags`: https://quay.io/repository/biocontainers/insilicosv?tab=tags


.. raw:: html

    <script>
        var package = "insilicosv";
        var versions = ["0.0.6","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/insilicosv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/insilicosv/README.html