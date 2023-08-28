:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'luciphor2'
.. highlight: bash

luciphor2
=========

.. conda:recipe:: luciphor2
   :replaces_section_title:
   :noindex:

   Luciphor2 performs PTM\-site localization on MS\/MS data

   :homepage: http://luciphor2.sourceforge.net/
   :license: Apache-2.0
   :recipe: /`luciphor2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/luciphor2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/luciphor2/meta.yaml>`_

   


.. conda:package:: luciphor2

   |downloads_luciphor2| |docker_luciphor2|

   :versions:
      
      

      ``2020_04_03-1``,  ``2020_04_03-0``,  ``2018_06_28-1``,  ``2018_06_28-0``

      

   
   :depends openjdk: ``>=6``
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

      mamba install luciphor2

   and update with::

      mamba update luciphor2

  To create a new environment, run::

      mamba create --name myenvname luciphor2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/luciphor2:<tag>

   (see `luciphor2/tags`_ for valid values for ``<tag>``)


.. |downloads_luciphor2| image:: https://img.shields.io/conda/dn/bioconda/luciphor2.svg?style=flat
   :target: https://anaconda.org/bioconda/luciphor2
   :alt:   (downloads)
.. |docker_luciphor2| image:: https://quay.io/repository/biocontainers/luciphor2/status
   :target: https://quay.io/repository/biocontainers/luciphor2
.. _`luciphor2/tags`: https://quay.io/repository/biocontainers/luciphor2?tab=tags


.. raw:: html

    <script>
        var package = "luciphor2";
        var versions = ["2020_04_03","2020_04_03","2018_06_28","2018_06_28"];
    </script>





Notes
-----
Adds a wrapper shell script \"luciphor2\".
This shell wrapper is called \"luciphor2\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run with \"luciphor \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/luciphor2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/luciphor2/README.html