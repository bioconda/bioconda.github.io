:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmfinder'
.. highlight: bash

cmfinder
========

.. conda:recipe:: cmfinder
   :replaces_section_title:
   :noindex:

   CMfinder \- A Covariance Model Based RNA Motif Finding Algorithm

   :homepage: https://sourceforge.net/projects/weinberg-cmfinder/
   :license: GPL3
   :recipe: /`cmfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmfinder/meta.yaml>`_

   


.. conda:package:: cmfinder

   |downloads_cmfinder| |docker_cmfinder|

   :versions:
      
      

      ``0.4.1.9-2``,  ``0.4.1.9-1``,  ``0.4.1.9-0``,  ``0.2-0``

      

   
   :depends blast: 
   :depends libgcc-ng: ``>=4.9``
   :depends perl: 
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

      mamba install cmfinder

   and update with::

      mamba update cmfinder

  To create a new environment, run::

      mamba create --name myenvname cmfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cmfinder:<tag>

   (see `cmfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_cmfinder| image:: https://img.shields.io/conda/dn/bioconda/cmfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/cmfinder
   :alt:   (downloads)
.. |docker_cmfinder| image:: https://quay.io/repository/biocontainers/cmfinder/status
   :target: https://quay.io/repository/biocontainers/cmfinder
.. _`cmfinder/tags`: https://quay.io/repository/biocontainers/cmfinder?tab=tags


.. raw:: html

    <script>
        var package = "cmfinder";
        var versions = ["0.4.1.9","0.4.1.9","0.4.1.9","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmfinder/README.html