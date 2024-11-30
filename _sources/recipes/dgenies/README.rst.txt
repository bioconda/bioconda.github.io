:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dgenies'
.. highlight: bash

dgenies
=======

.. conda:recipe:: dgenies
   :replaces_section_title:
   :noindex:

   Dotplot large Genomes in an Interactive\, Efficient and Simple way

   :homepage: http://dgenies.toulouse.inrae.fr
   :documentation: http://dgenies.toulouse.inrae.fr/
   
   :developer docs: https://github.com/genotoul-bioinfo/dgenies
   :license: GPL / GPL-3
   :recipe: /`dgenies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dgenies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dgenies/meta.yaml>`_

   


.. conda:package:: dgenies

   |downloads_dgenies| |docker_dgenies|

   :versions:
      
      

      ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0.2-0``,  ``1.2.0.1-0``

      

   
   :depends biopython: ``>=1.70``
   :depends flask: ``2.*``
   :depends intervaltree: ``3.*``
   :depends jinja2: ``>=2.11.3``
   :depends markdown: ``>=2.6``
   :depends matplotlib-base: ``>=2.1``
   :depends numpy: 
   :depends psutil: ``>=5.6.6``
   :depends python: ``>=3.6``
   :depends python-crontab: ``>=2.2``
   :depends pyyaml: ``>=5.4.1``
   :depends requests: ``>=2.20.1``
   :depends tendo: ``0.2.*``
   :depends xopen: ``>=1.0``
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

      mamba install dgenies

   and update with::

      mamba update dgenies

  To create a new environment, run::

      mamba create --name myenvname dgenies

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dgenies:<tag>

   (see `dgenies/tags`_ for valid values for ``<tag>``)


.. |downloads_dgenies| image:: https://img.shields.io/conda/dn/bioconda/dgenies.svg?style=flat
   :target: https://anaconda.org/bioconda/dgenies
   :alt:   (downloads)
.. |docker_dgenies| image:: https://quay.io/repository/biocontainers/dgenies/status
   :target: https://quay.io/repository/biocontainers/dgenies
.. _`dgenies/tags`: https://quay.io/repository/biocontainers/dgenies?tab=tags


.. raw:: html

    <script>
        var package = "dgenies";
        var versions = ["1.5.0","1.5.0","1.4.0","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dgenies/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dgenies/README.html