:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio_monitor'
.. highlight: bash

bcbio_monitor
=============

.. conda:recipe:: bcbio_monitor
   :replaces_section_title:
   :noindex:

   bcbio\-monitor is an extension of bcbio\-nextgen to visualize its progress

   :homepage: https://github.com/guillermo-carrasco/bcbio-nextgen-monitor
   :license: MIT
   :recipe: /`bcbio_monitor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio_monitor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio_monitor/meta.yaml>`_

   


.. conda:package:: bcbio_monitor

   |downloads_bcbio_monitor| |docker_bcbio_monitor|

   :versions:
      
      

      ``1.0.6-4``,  ``1.0.6-3``,  ``1.0.6-2``,  ``1.0.6-0``,  ``1.0.2-0``

      

   
   :depends dateutil: 
   :depends flask: ``>=0.10.1``
   :depends gevent: ``>=1.0,<1.2``
   :depends paramiko: 
   :depends python: ``<3``
   :depends python-graphviz: 
   :depends pytz: 
   :depends pyyaml: 
   :depends requests: 
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

      mamba install bcbio_monitor

   and update with::

      mamba update bcbio_monitor

  To create a new environment, run::

      mamba create --name myenvname bcbio_monitor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bcbio_monitor:<tag>

   (see `bcbio_monitor/tags`_ for valid values for ``<tag>``)


.. |downloads_bcbio_monitor| image:: https://img.shields.io/conda/dn/bioconda/bcbio_monitor.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbio_monitor
   :alt:   (downloads)
.. |docker_bcbio_monitor| image:: https://quay.io/repository/biocontainers/bcbio_monitor/status
   :target: https://quay.io/repository/biocontainers/bcbio_monitor
.. _`bcbio_monitor/tags`: https://quay.io/repository/biocontainers/bcbio_monitor?tab=tags


.. raw:: html

    <script>
        var package = "bcbio_monitor";
        var versions = ["1.0.6","1.0.6","1.0.6","1.0.6","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio_monitor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio_monitor/README.html