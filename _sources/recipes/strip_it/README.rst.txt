:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strip_it'
.. highlight: bash

strip_it
========

.. conda:recipe:: strip_it/1.0.2
   :replaces_section_title:
   :noindex:

   Strip\-it is a program that extracts predefined scaffolds from organic small molecules.

   :homepage: http://silicos-it.be.s3-website-eu-west-1.amazonaws.com/software/strip-it/1.0.2/strip-it.html
   :license: LGPL
   :recipe: /`strip_it <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strip_it>`_/`1.0.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strip_it/1.0.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strip_it/1.0.2/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`ctb_stripit`

   


.. conda:package:: strip_it

   |downloads_strip_it| |docker_strip_it|

   :versions:
      
      

      ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends openbabel: ``2.4.1.*``
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

      mamba install strip_it

   and update with::

      mamba update strip_it

  To create a new environment, run::

      mamba create --name myenvname strip_it

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strip_it:<tag>

   (see `strip_it/tags`_ for valid values for ``<tag>``)


.. |downloads_strip_it| image:: https://img.shields.io/conda/dn/bioconda/strip_it.svg?style=flat
   :target: https://anaconda.org/bioconda/strip_it
   :alt:   (downloads)
.. |docker_strip_it| image:: https://quay.io/repository/biocontainers/strip_it/status
   :target: https://quay.io/repository/biocontainers/strip_it
.. _`strip_it/tags`: https://quay.io/repository/biocontainers/strip_it?tab=tags


.. raw:: html

    <script>
        var package = "strip_it";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strip_it/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strip_it/README.html