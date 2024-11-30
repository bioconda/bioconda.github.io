:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'glnexus'
.. highlight: bash

glnexus
=======

.. conda:recipe:: glnexus
   :replaces_section_title:
   :noindex:

   scalable gVCF merging and joint variant calling for population sequencing projects.

   :homepage: https://github.com/dnanexus-rnd/GLnexus
   :license: Apache License 2.0
   :recipe: /`glnexus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glnexus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glnexus/meta.yaml>`_

   


.. conda:package:: glnexus

   |downloads_glnexus| |docker_glnexus|

   :versions:
      
      

      ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``

      

   
   :depends glib: 
   :depends libgcc-ng: ``>=12``
   :depends libglib: ``>=2.76.2,<3.0a0``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install glnexus

   and update with::

      mamba update glnexus

  To create a new environment, run::

      mamba create --name myenvname glnexus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/glnexus:<tag>

   (see `glnexus/tags`_ for valid values for ``<tag>``)


.. |downloads_glnexus| image:: https://img.shields.io/conda/dn/bioconda/glnexus.svg?style=flat
   :target: https://anaconda.org/bioconda/glnexus
   :alt:   (downloads)
.. |docker_glnexus| image:: https://quay.io/repository/biocontainers/glnexus/status
   :target: https://quay.io/repository/biocontainers/glnexus
.. _`glnexus/tags`: https://quay.io/repository/biocontainers/glnexus?tab=tags


.. raw:: html

    <script>
        var package = "glnexus";
        var versions = ["1.4.1","1.4.1","1.4.1","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/glnexus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/glnexus/README.html