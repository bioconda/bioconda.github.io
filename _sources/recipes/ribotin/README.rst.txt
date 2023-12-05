:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotin'
.. highlight: bash

ribotin
=======

.. conda:recipe:: ribotin
   :replaces_section_title:
   :noindex:

   Ribosomal DNA assembly tool

   :homepage: https://github.com/maickrau/ribotin
   :license: MIT
   :recipe: /`ribotin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotin/meta.yaml>`_

   


.. conda:package:: ribotin

   |downloads_ribotin| |docker_ribotin|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends graphaligner: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends liftoff: ``1.6.3.*``
   :depends mbg: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ribotin

   and update with::

      mamba update ribotin

  To create a new environment, run::

      mamba create --name myenvname ribotin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ribotin:<tag>

   (see `ribotin/tags`_ for valid values for ``<tag>``)


.. |downloads_ribotin| image:: https://img.shields.io/conda/dn/bioconda/ribotin.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotin
   :alt:   (downloads)
.. |docker_ribotin| image:: https://quay.io/repository/biocontainers/ribotin/status
   :target: https://quay.io/repository/biocontainers/ribotin
.. _`ribotin/tags`: https://quay.io/repository/biocontainers/ribotin?tab=tags


.. raw:: html

    <script>
        var package = "ribotin";
        var versions = ["1.2","1.2","1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotin/README.html