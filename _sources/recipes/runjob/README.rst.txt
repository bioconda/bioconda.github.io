:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'runjob'
.. highlight: bash

runjob
======

.. conda:recipe:: runjob
   :replaces_section_title:
   :noindex:

   Manage jobs or pipeline of bioinfomation.

   :homepage: https://github.com/yodeng/runjob
   :license: MIT
   :recipe: /`runjob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/runjob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/runjob/meta.yaml>`_

   Runjob is a program for managing a group of related bioinformatic jobs or pipelines running on a compute cluster.


.. conda:package:: runjob

   |downloads_runjob| |docker_runjob|

   :versions:
      
      

      ``2.10.5-0``,  ``2.10.4-0``,  ``2.10.3-0``,  ``2.10.2-0``

      

   
   :depends configparser: ``>=5.0.2``
   :depends pip: 
   :depends prettytable: ``>=3.2.0``
   :depends psutil: ``>=5.7.0``
   :depends python: ``>=2.7.10,<3.11``
   :depends ratelimiter: ``>=1.2.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install runjob

   and update with::

      mamba update runjob

  To create a new environment, run::

      mamba create --name myenvname runjob

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/runjob:<tag>

   (see `runjob/tags`_ for valid values for ``<tag>``)


.. |downloads_runjob| image:: https://img.shields.io/conda/dn/bioconda/runjob.svg?style=flat
   :target: https://anaconda.org/bioconda/runjob
   :alt:   (downloads)
.. |docker_runjob| image:: https://quay.io/repository/biocontainers/runjob/status
   :target: https://quay.io/repository/biocontainers/runjob
.. _`runjob/tags`: https://quay.io/repository/biocontainers/runjob?tab=tags


.. raw:: html

    <script>
        var package = "runjob";
        var versions = ["2.10.5","2.10.4","2.10.3","2.10.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/runjob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/runjob/README.html