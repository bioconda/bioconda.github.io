:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'telometer'
.. highlight: bash

telometer
=========

.. conda:recipe:: telometer
   :replaces_section_title:
   :noindex:

   A simple regular expression based method for measuring individual\, chromosome\-specific telomere lengths from long\-read sequencing data.

   :homepage: https://github.com/santiago-es/Telometer
   :license: MIT / MIT
   :recipe: /`telometer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telometer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telometer/meta.yaml>`_

   


.. conda:package:: telometer

   |downloads_telometer| |docker_telometer|

   :versions:
      
      

      ``1.1-0``,  ``1.0-0``,  ``0.81-0``,  ``0.5-0``

      

   
   :depends minimap2: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends regex: 
   :depends samtools: 
   :depends scipy: 
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

      mamba install telometer

   and update with::

      mamba update telometer

  To create a new environment, run::

      mamba create --name myenvname telometer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/telometer:<tag>

   (see `telometer/tags`_ for valid values for ``<tag>``)


.. |downloads_telometer| image:: https://img.shields.io/conda/dn/bioconda/telometer.svg?style=flat
   :target: https://anaconda.org/bioconda/telometer
   :alt:   (downloads)
.. |docker_telometer| image:: https://quay.io/repository/biocontainers/telometer/status
   :target: https://quay.io/repository/biocontainers/telometer
.. _`telometer/tags`: https://quay.io/repository/biocontainers/telometer?tab=tags


.. raw:: html

    <script>
        var package = "telometer";
        var versions = ["1.1","1.0","0.81","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/telometer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/telometer/README.html