:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgd'
.. highlight: bash

wgd
===

.. conda:recipe:: wgd
   :replaces_section_title:
   :noindex:

   a suite tool of WGD inference and timing

   :homepage: https://github.com/heche-psb/wgd
   :license: GPL-3.0
   :recipe: /`wgd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgd/meta.yaml>`_

   


.. conda:package:: wgd

   |downloads_wgd| |docker_wgd|

   :versions:
      
      

      ``2.0.22-0``,  ``2.0.21-0``,  ``2.0.20-0``,  ``2.0.19-0``,  ``2.0.18-0``,  ``2.0.16-0``,  ``2.0.15-0``,  ``2.0.12-0``

      

   
   :depends diamond: 
   :depends mafft: 
   :depends mcl: 
   :depends paml: 
   :depends python: ``>=3.6,<=3.9``
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

      mamba install wgd

   and update with::

      mamba update wgd

  To create a new environment, run::

      mamba create --name myenvname wgd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wgd:<tag>

   (see `wgd/tags`_ for valid values for ``<tag>``)


.. |downloads_wgd| image:: https://img.shields.io/conda/dn/bioconda/wgd.svg?style=flat
   :target: https://anaconda.org/bioconda/wgd
   :alt:   (downloads)
.. |docker_wgd| image:: https://quay.io/repository/biocontainers/wgd/status
   :target: https://quay.io/repository/biocontainers/wgd
.. _`wgd/tags`: https://quay.io/repository/biocontainers/wgd?tab=tags


.. raw:: html

    <script>
        var package = "wgd";
        var versions = ["2.0.22","2.0.21","2.0.20","2.0.19","2.0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgd/README.html