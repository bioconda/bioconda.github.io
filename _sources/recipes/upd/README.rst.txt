:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'upd'
.. highlight: bash

upd
===

.. conda:recipe:: upd
   :replaces_section_title:
   :noindex:

   Simple software to call UPD regions from germline exome\/wgs trios.

   :homepage: https://github.com/bjhall/upd
   :license: MIT / MIT
   :recipe: /`upd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/upd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/upd/meta.yaml>`_

   


.. conda:package:: upd

   |downloads_upd| |docker_upd|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends click: 
   :depends coloredlogs: 
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

      mamba install upd

   and update with::

      mamba update upd

  To create a new environment, run::

      mamba create --name myenvname upd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/upd:<tag>

   (see `upd/tags`_ for valid values for ``<tag>``)


.. |downloads_upd| image:: https://img.shields.io/conda/dn/bioconda/upd.svg?style=flat
   :target: https://anaconda.org/bioconda/upd
   :alt:   (downloads)
.. |docker_upd| image:: https://quay.io/repository/biocontainers/upd/status
   :target: https://quay.io/repository/biocontainers/upd
.. _`upd/tags`: https://quay.io/repository/biocontainers/upd?tab=tags


.. raw:: html

    <script>
        var package = "upd";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/upd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/upd/README.html