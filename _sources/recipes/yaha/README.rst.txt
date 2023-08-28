:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yaha'
.. highlight: bash

yaha
====

.. conda:recipe:: yaha
   :replaces_section_title:
   :noindex:

   yaha is an open source\, flexible\, sensitive and accurate DNA aligner designed for single\-end reads

   :homepage: https://github.com/GregoryFaust/yaha
   :license: GPL
   :recipe: /`yaha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yaha>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yaha/meta.yaml>`_

   


.. conda:package:: yaha

   |downloads_yaha| |docker_yaha|

   :versions:
      
      

      ``0.1.83-6``,  ``0.1.83-5``,  ``0.1.83-4``,  ``0.1.83-3``,  ``0.1.83-2``,  ``0.1.83-1``,  ``0.1.83-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install yaha

   and update with::

      mamba update yaha

  To create a new environment, run::

      mamba create --name myenvname yaha

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yaha:<tag>

   (see `yaha/tags`_ for valid values for ``<tag>``)


.. |downloads_yaha| image:: https://img.shields.io/conda/dn/bioconda/yaha.svg?style=flat
   :target: https://anaconda.org/bioconda/yaha
   :alt:   (downloads)
.. |docker_yaha| image:: https://quay.io/repository/biocontainers/yaha/status
   :target: https://quay.io/repository/biocontainers/yaha
.. _`yaha/tags`: https://quay.io/repository/biocontainers/yaha?tab=tags


.. raw:: html

    <script>
        var package = "yaha";
        var versions = ["0.1.83","0.1.83","0.1.83","0.1.83","0.1.83"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yaha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yaha/README.html