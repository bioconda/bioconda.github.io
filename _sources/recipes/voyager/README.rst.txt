:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'voyager'
.. highlight: bash

voyager
=======

.. conda:recipe:: voyager
   :replaces_section_title:
   :noindex:

   Rapid and efficient mapping algorithm for long sequencing reads with insertion\- and deletion errors.

   :homepage: https://bitbucket.org/sverre-phd-work/voyager/
   :documentation: https://bitbucket.org/sverre-phd-work/voyager/wiki/Home
   
   :license: LGPL-3.0-only
   :recipe: /`voyager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/voyager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/voyager/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.04.13.589333`

   


.. conda:package:: voyager

   |downloads_voyager| |docker_voyager|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends openjdk: ``>=11``
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

      mamba install voyager

   and update with::

      mamba update voyager

  To create a new environment, run::

      mamba create --name myenvname voyager

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/voyager:<tag>

   (see `voyager/tags`_ for valid values for ``<tag>``)


.. |downloads_voyager| image:: https://img.shields.io/conda/dn/bioconda/voyager.svg?style=flat
   :target: https://anaconda.org/bioconda/voyager
   :alt:   (downloads)
.. |docker_voyager| image:: https://quay.io/repository/biocontainers/voyager/status
   :target: https://quay.io/repository/biocontainers/voyager
.. _`voyager/tags`: https://quay.io/repository/biocontainers/voyager?tab=tags


.. raw:: html

    <script>
        var package = "voyager";
        var versions = ["0.1.3","0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/voyager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/voyager/README.html