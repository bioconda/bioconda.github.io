:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jasmine'
.. highlight: bash

jasmine
=======

.. conda:recipe:: jasmine
   :replaces_section_title:
   :noindex:

   Jasmine\: a Java pipeline for isomiR characterization in miRNA\-Seq Data

   :homepage: https://bitbucket.org/bipous/jasmine/src/master
   :license: GPL >=3
   :recipe: /`jasmine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jasmine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jasmine/meta.yaml>`_

   


.. conda:package:: jasmine

   |downloads_jasmine| |docker_jasmine|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
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

      mamba install jasmine

   and update with::

      mamba update jasmine

  To create a new environment, run::

      mamba create --name myenvname jasmine

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jasmine:<tag>

   (see `jasmine/tags`_ for valid values for ``<tag>``)


.. |downloads_jasmine| image:: https://img.shields.io/conda/dn/bioconda/jasmine.svg?style=flat
   :target: https://anaconda.org/bioconda/jasmine
   :alt:   (downloads)
.. |docker_jasmine| image:: https://quay.io/repository/biocontainers/jasmine/status
   :target: https://quay.io/repository/biocontainers/jasmine
.. _`jasmine/tags`: https://quay.io/repository/biocontainers/jasmine?tab=tags


.. raw:: html

    <script>
        var package = "jasmine";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jasmine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jasmine/README.html