:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bibliospec'
.. highlight: bash

bibliospec
==========

.. conda:recipe:: bibliospec
   :replaces_section_title:
   :noindex:

   The BiblioSpec Spetral Library tool suite

   :homepage: https://skyline.ms/project/home/software/BiblioSpec/begin.view?
   :license: Apache 2.0
   :recipe: /`bibliospec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bibliospec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bibliospec/meta.yaml>`_

   


.. conda:package:: bibliospec

   |downloads_bibliospec| |docker_bibliospec|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
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

      mamba install bibliospec

   and update with::

      mamba update bibliospec

  To create a new environment, run::

      mamba create --name myenvname bibliospec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bibliospec:<tag>

   (see `bibliospec/tags`_ for valid values for ``<tag>``)


.. |downloads_bibliospec| image:: https://img.shields.io/conda/dn/bioconda/bibliospec.svg?style=flat
   :target: https://anaconda.org/bioconda/bibliospec
   :alt:   (downloads)
.. |docker_bibliospec| image:: https://quay.io/repository/biocontainers/bibliospec/status
   :target: https://quay.io/repository/biocontainers/bibliospec
.. _`bibliospec/tags`: https://quay.io/repository/biocontainers/bibliospec?tab=tags


.. raw:: html

    <script>
        var package = "bibliospec";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bibliospec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bibliospec/README.html