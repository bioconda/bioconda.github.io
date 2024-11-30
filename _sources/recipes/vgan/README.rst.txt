:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vgan'
.. highlight: bash

vgan
====

.. conda:recipe:: vgan
   :replaces_section_title:
   :noindex:

   Suite of tools for pangenomics built using vg

   :homepage: https://github.com/grenaud/vgan
   :license: GPLv3.0
   :recipe: /`vgan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vgan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vgan/meta.yaml>`_

   


.. conda:package:: vgan

   |downloads_vgan| |docker_vgan|

   :versions:
      
      

      ``3.0.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends wget: 
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

      mamba install vgan

   and update with::

      mamba update vgan

  To create a new environment, run::

      mamba create --name myenvname vgan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vgan:<tag>

   (see `vgan/tags`_ for valid values for ``<tag>``)


.. |downloads_vgan| image:: https://img.shields.io/conda/dn/bioconda/vgan.svg?style=flat
   :target: https://anaconda.org/bioconda/vgan
   :alt:   (downloads)
.. |docker_vgan| image:: https://quay.io/repository/biocontainers/vgan/status
   :target: https://quay.io/repository/biocontainers/vgan
.. _`vgan/tags`: https://quay.io/repository/biocontainers/vgan?tab=tags


.. raw:: html

    <script>
        var package = "vgan";
        var versions = ["3.0.0","2.0.2","2.0.1","2.0.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vgan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vgan/README.html