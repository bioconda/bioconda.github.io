:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conifer'
.. highlight: bash

conifer
=======

.. conda:recipe:: conifer
   :replaces_section_title:
   :noindex:

   Calculate confidence scores from Kraken2 output

   :homepage: https://github.com/Ivarz/Conifer/
   :license: BSD / BSD-2-Clause
   :recipe: /`conifer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conifer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conifer/meta.yaml>`_

   


.. conda:package:: conifer

   |downloads_conifer| |docker_conifer|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install conifer

   and update with::

      mamba update conifer

  To create a new environment, run::

      mamba create --name myenvname conifer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/conifer:<tag>

   (see `conifer/tags`_ for valid values for ``<tag>``)


.. |downloads_conifer| image:: https://img.shields.io/conda/dn/bioconda/conifer.svg?style=flat
   :target: https://anaconda.org/bioconda/conifer
   :alt:   (downloads)
.. |docker_conifer| image:: https://quay.io/repository/biocontainers/conifer/status
   :target: https://quay.io/repository/biocontainers/conifer
.. _`conifer/tags`: https://quay.io/repository/biocontainers/conifer?tab=tags


.. raw:: html

    <script>
        var package = "conifer";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conifer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conifer/README.html